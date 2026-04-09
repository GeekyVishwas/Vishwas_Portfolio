import { useEffect } from 'react';

// Very basic helper to parse User Agent into readable strings
function getDeviceDetails(userAgent) {
  let browser = 'Unknown Browser';
  if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('SamsungBrowser')) browser = 'Samsung Internet';
  else if (userAgent.includes('Opera') || userAgent.includes('OPR')) browser = 'Opera';
  else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) browser = 'Internet Explorer';
  else if (userAgent.includes('Edge') || userAgent.includes('Edg/')) browser = 'Edge';
  else if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Safari')) browser = 'Safari';

  let os = 'Unknown OS';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'MacOS';
  else if (userAgent.includes('X11')) os = 'UNIX';
  else if (userAgent.includes('Linux')) os = 'Linux';

  if (/Mobi|Android/i.test(userAgent)) {
    if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS';
    else os = 'Mobile OS';
  }

  return { browser, os };
}

let hasFiredThisLoad = false;

export function useVisitorAnalytics() {
  useEffect(() => {
    // Prevent React Strict Mode from firing twice on a single load
    // but ALWAYS track on a true page refresh or new visit.
    if (hasFiredThisLoad) {
      return; 
    }
    hasFiredThisLoad = true;

    const trackVisitor = async () => {
      const botToken = import.meta.env.VITE_ANALYTICS_BOT_TOKEN;
      const chatId = import.meta.env.VITE_ANALYTICS_CHAT_ID;

      // If credentials aren't set, silently abort
      if (!botToken || !chatId || botToken.includes('your_analytics_bot_token_here')) {
        console.warn('Analytics bot not configured. Skipping visitor tracking.');
        return;
      }

      try {
        // 2. Fetch IP and Geolocation data securely
        // Using ipapi.co (Free, no keys needed for basic usage, very reliable)
        let geoData = { ip: 'Unknown', city: 'Unknown', country_name: 'Unknown', org: 'Unknown' };
        try {
          const geoRes = await fetch('https://ipapi.co/json/');
          if (geoRes.ok) {
            geoData = await geoRes.json();
          }
        } catch (e) {
          console.warn('Could not fetch geolocation:', e);
        }

        // 3. Gather local device info
        const { browser, os } = getDeviceDetails(navigator.userAgent);
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const language = navigator.language;
        const referrer = document.referrer || 'Direct / None';
        const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }); // Fixed to Indian time for context, or use local

        // 4. Format the Telegram Message
        const message = `
🚀 <b>New Portfolio Visitor!</b>

📍 <b>Location:</b> ${geoData.city || 'Unknown'}, ${geoData.country_name || 'Unknown'}
🌐 <b>IP Address:</b> ${geoData.ip}
🏢 <b>ISP/Network:</b> ${geoData.org || 'Unknown'}

💻 <b>Device:</b> ${os} — ${browser}
📱 <b>Resolution:</b> ${screenRes}
🗣 <b>Language:</b> ${language}

🔗 <b>Referrer:</b> ${referrer}
🕒 <b>Time (IST):</b> ${currentTime}
        `;

        // 5. Send to Telegram
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
            disable_web_page_preview: 'true',
          }),
        });

      } catch (error) {
        // Fail silently so we don't break the user's experience
        console.error('Visitor analytics failed to send:', error);
      }
    };

    // Execute tracking asynchronously
    // Adding a slight delay ensures it doesn't block initial critical rendering
    setTimeout(trackVisitor, 2000);

  }, []);
}

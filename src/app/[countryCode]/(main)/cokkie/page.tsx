// app/components/CookieConsent.tsx

"use client";

import { useState, useEffect } from 'react';
import { setCookie, parseCookies } from 'nookies';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    if (!cookies.cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(null, 'cookieConsent', 'accepted', {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    setShowBanner(false);
  };

  const handleDeny = () => {
    setCookie(null, 'cookieConsent', 'denied', {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p>We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>
      <div>
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Accept
        </button>
        <button
          onClick={handleDeny}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Deny
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

import React, { useEffect, useState, useRef } from 'react';
import Script from 'react-load-script';
import { useLocation } from "@reach/router"

import "./CarbonAd.css";

const CarbonAd = () => {
  const [showReminder, setShowreminder] = useState(false);
  const [correctlyLoaded, setCorrectylLoaded] = useState(!!window._carbonads);
  const containerRef = useRef();
  const { pathname } = useLocation();

  const verifyIsLoaded = () => {
    const ads = document.getElementById('carbonads');
    if (!containerRef.current) {
      return;
    }
    const style = window.getComputedStyle(containerRef.current);
    if (!ads || style.display === 'none') {
      setShowreminder(true);
    } else if (window._carbonads) {
      setCorrectylLoaded(true);
    }
  }

  useEffect(() => {
    setTimeout(verifyIsLoaded, 3000);
  }, [])

  useEffect(() => {
    if (correctlyLoaded) {
      window._carbonads.refresh();
    }
  }, [pathname])
  return (<div
    ref={containerRef}
    >
    {showReminder || <Script
      async
      attributes={{
        id: '_carbonads_js',
      }}
      onLoad={() => setCorrectylLoaded(true)}
      url="//cdn.carbonads.com/carbon.js?serve=CKYIEK7E&placement=fabricjscom"
    />}
    {showReminder && <div id="gentle-reminder" className="reminder">
        Do you like fabricJS?<br />
        If you want it continue running and you do not mind tech related ads, please allow this website in your adblocker.
        <br />
        <br />
        ❤️ Thank You!
      </div>
    }
  </div>);
}

export default CarbonAd;

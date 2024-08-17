import { useEffect, useState, useRef, useCallback } from 'react'
// import Script from 'react-load-script'

import './InlineCarbonAd.css'

const CarbonAd = () => {
  const [showReminder, setShowreminder] = useState(false)
  // eslint-disable-next-line no-undef, no-underscore-dangle
  const [correctlyLoaded, setCorrectylLoaded] = useState(
    typeof window !== 'undefined' ? !!window._carbonads : false
  )
  const containerRef = useRef()

  const moveUp = useCallback(() => {
    setCorrectylLoaded(true);
  });

  const verifyIsLoaded = () => {
    // eslint-disable-next-line no-undef
    if (!containerRef.current) {
      return
    }

    const ads = document.getElementById('carbonads');
    // eslint-disable-next-line no-undef
    const style = window.getComputedStyle(containerRef.current)
    if (!ads || style.display === 'none') {
      setShowreminder(true)
      // eslint-disable-next-line no-undef, no-underscore-dangle
    } else if (window._carbonads) {
      setCorrectylLoaded(true)
    }
  }

  useEffect(() => {
    setTimeout(verifyIsLoaded, 3000)
  }, [])

  return (
    <main>
      <div ref={containerRef} >
        {showReminder || (
          <script
            async
            id="_carbonads_js"
            onLoad={moveUp}
            type="text/javascript"
            src="//cdn.carbonads.com/carbon.js?serve=CKYIEK7E&placement=fabricjscom"
          />
        )}
        {showReminder && (
          <div id="gentle-reminder" className="reminder">
            Do you like fabricJS?
            <br />
            If you want it continue running and you do not mind tech related ads,
            please allow this website in your adblocker.
            <br />
            The ad is actually smaller than this nag screen!
            <br />
            ❤️ Thank You!
          </div>
        )}
      </div>
    </main>
  )
}

export default CarbonAd

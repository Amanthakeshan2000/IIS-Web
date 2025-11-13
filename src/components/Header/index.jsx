import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >

      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in d-flex align-items-center justify-content-between">
            {/* <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img src="/images/logo.svg" alt="Logo" />
              </Link>
            </div> */}
            <div className="cs_nav cs_primary_font fw-medium d-flex align-items-center justify-content-center flex-grow-1">
              <Nav setMobileToggle={setMobileToggle} />
            </div>
            <div className="d-flex align-items-center">
              <span
                className={
                  mobileToggle
                    ? 'cs-munu_toggle cs_teggle_active'
                    : 'cs-munu_toggle'
                }
                onClick={() => setMobileToggle(!mobileToggle)}
              >
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import ContactForm from '../Form';
import { pageTitle } from '../../helpers/PageTitle';

export default function ContactPage() {
  pageTitle('Contact');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb title="Contact us" bgUrl="/images/page_header_1.jpeg" />
      
      <Section pt="140" ptLg="80" pb="140" pbLg="80" className="position-relative">
        <div className="container">
          {/* <SectionHeadingStyle2
            sectionTitleUp="Contact us"
            sectionTitle="Contact us"
          /> */}
          
          {/* Contact Information */}
          {/* <div className="row cs_mb_60 cs_mb_lg_40">
            <div className="col-lg-6 cs_mb_lg_30">
              <div className="d-flex align-items-center">
                <div 
                  className="cs_rounded_10 d-flex align-items-center justify-content-center cs_mr_20"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#CC5500',
                    boxShadow: '0 5px 15px rgba(204, 85, 0, 0.3)',
                    flexShrink: 0
                  }}
                >
                  <span className="text-white cs_fs_24">📞</span>
                </div>
                <div>
                  <h4 className="cs_fs_20 cs_fs_lg_18 fw-medium cs_mb_5 m-0">Phone:</h4>
                  <p className="cs_fs_16 cs_fs_lg_14 m-0">+ 070 4531 9507</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <div 
                  className="cs_rounded_10 d-flex align-items-center justify-content-center cs_mr_20"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#CC5500',
                    boxShadow: '0 5px 15px rgba(204, 85, 0, 0.3)',
                    flexShrink: 0
                  }}
                >
                  <span className="text-white cs_fs_24">✉</span>
                </div>
                <div>
                  <h4 className="cs_fs_20 cs_fs_lg_18 fw-medium cs_mb_5 m-0">Email:</h4>
                  <p className="cs_fs_16 cs_fs_lg_14 m-0">bizmax@laralink.com</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact Form Section */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center cs_mb_40">
                <h2 className="cs_fs_36 cs_fs_lg_28 fw-medium cs_mb_10">
                  Contact Us
                </h2>
                <div 
                  className="mx-auto cs_mb_30" 
                  style={{ 
                    width: '100px', 
                    height: '3px', 
                    backgroundColor: '#CC5500' 
                  }}
                ></div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      
      {/* <LocationInMap data={locationData} /> */}
    </>
  );
}

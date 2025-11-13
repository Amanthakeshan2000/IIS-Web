import React, { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import { pageTitle } from '../../helpers/PageTitle';

export default function AboutPage() {
  pageTitle('About Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="About Us" bgUrl="/images/page_header_1.jpeg" />

      {/* Transforming Your Operations Section */}
      <Section pt="135" ptLg="75" pb="140" pbLg="80" className="position-relative">
        <div className="container">
          <SectionHeadingStyle2
            sectionTitleUp="About Us"
            sectionTitle="Transforming Your Operations"
          />
          <div className="row align-items-center">
            <div className="col-lg-5 cs_mb_lg_40">
              <div className="position-relative">
                <img 
                  src="/images/about_img_1.png" 
                  alt="Operations" 
                  className="w-100 cs_rounded_20"
                  style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
                <div className="position-absolute" style={{ bottom: '-20px', right: '-20px', zIndex: -1 }}>
                  <img 
                    src="/images/about_img_3.png" 
                    alt="Operations" 
                    className="cs_rounded_20"
                    style={{ width: '200px', height: '200px', objectFit: 'cover', opacity: 0.3 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="cs_fs_18 cs_fs_lg_16 cs_lh_lg cs_mb_20 text-muted">
                We stay the course with you to see real, measurable change.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg cs_mb_15">
                Our purpose is to empower organisations through strategy, technical insight, and practical consultation — helping them change how they operate at every level, achieve their potential, and deliver sustainable results.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg m-0">
                We are trusted partners, known for being hands-on, outcome-driven, and deeply committed to making a real difference for every client we work with.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Expertise and Operational Excellence Section */}
      <Section pt="0" ptLg="0" pb="140" pbLg="80" className="cs_gray_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cs_mb_lg_40">
              <div className="cs_mb_40">
                <h2 className="cs_fs_36 cs_fs_lg_28 fw-medium cs_mb_20">
                  Technical Expertise and Operational Excellence
                </h2>
                <div className="cs_divider cs_style_1 cs_mb_30" style={{ width: '100px', height: '3px', backgroundColor: '#CC5500' }}></div>
              </div>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg cs_mb_15">
                We bring together deep technical expertise, engineering knowledge, and real operational experience to deliver lasting results.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg cs_mb_15">
                Every member of our team comes from diverse operational background and has been through rigorous industry training — meaning we don't just advise on solutions; we've lived them.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg m-0">
                Our strength lies in understanding the realities of production, compliance, and logistics — and turning that understanding into practical, high-impact improvements.
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="position-relative cs_mt_40 cs_mt_lg_0">
                <img 
                  src="/images/experience_imgs.png" 
                  alt="Technical Expertise" 
                  className="cs_rounded_20"
                  style={{ 
                    width: '100%', 
                    maxWidth: '500px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Transformation Section */}
      <Section pt="140" ptLg="80" pb="140" pbLg="80" className="position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cs_mb_lg_40">
              <div className="position-relative">
                <img 
                  src="/images/service_1.jpeg" 
                  alt="Transformation" 
                  className="w-100 cs_rounded_20"
                  style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
                <div className="position-absolute" style={{ top: '20px', left: '20px', zIndex: 1 }}>
                  <div className="bg-white cs_rounded_10 p-3" style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                    <h4 className="cs_fs_24 cs_fs_lg_20 m-0 text-accent">40+</h4>
                    <p className="cs_fs_14 m-0">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_mb_40">
                <h2 className="cs_fs_36 cs_fs_lg_28 fw-medium cs_mb_20">
                  Transformation
                </h2>
                <div className="cs_divider cs_style_1 cs_mb_30" style={{ width: '100px', height: '3px', backgroundColor: '#CC5500' }}></div>
              </div>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg cs_mb_20">
                With experience spanning manufacturing, fresh produce, supply chain, logistics, procurement, and compliance, we work side by side with you to transform your operations and create long-term value.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg m-0">
                Transformation for us means more than short-term gains. It's about making a step-change in the way businesses operate — enabling better use of existing assets, developing new capabilities, and achieving substantial performance improvement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Futureproof your operation Section */}
      <Section pt="0" ptLg="0" pb="140" pbLg="80" className="cs_gray_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cs_mb_lg_40">
              <div className="cs_mb_40">
                <h2 className="cs_fs_36 cs_fs_lg_28 fw-medium cs_mb_20">
                  Futureproof your operation
                </h2>
                <div className="cs_divider cs_style_1 cs_mb_30" style={{ width: '100px', height: '3px', backgroundColor: '#CC5500' }}></div>
              </div>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg cs_mb_15">
                We combine a global perspective with local industry knowledge to deliver solutions that work in practice, not just on paper.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg m-0">
                Our team draws on insights from international best practices while tailoring every solution to local regulations, conditions, and markets — ensuring our clients remain compliant, competitive, export-ready and most importantly being current.
              </p>
            </div>
            <div className="col-lg-6 cs_mt_40 cs_mt_lg_0">
              <div className="row g-3">
                <div className="col-6">
                  <img 
                    src="/images/service_2.jpeg" 
                    alt="Futureproof" 
                    className="w-100 cs_rounded_10"
                    style={{ height: '200px', objectFit: 'cover', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                  />
                </div>
                <div className="col-6">
                  <img 
                    src="/images/service_3.jpeg" 
                    alt="Futureproof" 
                    className="w-100 cs_rounded_10"
                    style={{ height: '200px', objectFit: 'cover', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                  />
                </div>
                <div className="col-12">
                  <img 
                    src="/images/service_4.jpeg" 
                    alt="Futureproof" 
                    className="w-100 cs_rounded_10"
                    style={{ height: '200px', objectFit: 'cover', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Vision Section */}
      <Section pt="140" ptLg="80" pb="140" pbLg="80" className="bg-primary position-relative overflow-hidden">
        <div 
          className="position-absolute w-100 h-100 start-0 top-0"
          style={{ 
            backgroundImage: 'url("/images/experience_bgs.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        ></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-5 cs_mb_lg_40">
              <img 
                src="/images/about_img_4.png" 
                alt="Our Vision" 
                className="w-100 cs_rounded_20"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              />
            </div>
            <div className="col-lg-7 text-center text-lg-start">
              <h2 className="cs_fs_60 cs_fs_lg_48 text-white fw-medium cs_mb_20 m-0">
                Our Vision
              </h2>
              <p className="cs_fs_18 cs_fs_lg_16 cs_lh_lg text-white m-0">
                To be the trusted partner delivering world-class auditing, engineering, and compliance solutions that empower the manufacturing and fresh produce industries to operate efficiently, sustainably, and successfully in local and global markets
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Who we are Section */}
      <Section pt="140" ptLg="80" pb="140" pbLg="80" className="position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cs_mb_lg_40">
              <div className="row g-4">
                <div className="col-6">
                  <div className="position-relative overflow-hidden cs_rounded_10">
                    <img 
                      src="/images/team_member_1.jpeg" 
                      alt="Team" 
                      className="w-100"
                      style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="position-relative overflow-hidden cs_rounded_10">
                    <img 
                      src="/images/team_member_2.jpeg" 
                      alt="Team" 
                      className="w-100"
                      style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="position-relative overflow-hidden cs_rounded_10">
                    <img 
                      src="/images/team_member_3.jpeg" 
                      alt="Team" 
                      className="w-100"
                      style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_fs_60 cs_fs_lg_48 fw-medium cs_mb_20 m-0">
                Who we are
              </h2>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg cs_mb_20">
                Highly Experienced Operations, Supply chain, Quality, Engineering, Integrated IT and Process optimization professional with extensive experience across the manufacturing and fresh produce industry.
              </p>
              <p className="cs_fs_16 cs_fs_lg_14 cs_lh_lg m-0">
                Skilled in developing and implementing integrated systems that improve operational efficiency, product quality, sustainability, and supply chain resilience. Proven ability to lead transformation initiatives that align technology, process, and people strategies to deliver measurable business values.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

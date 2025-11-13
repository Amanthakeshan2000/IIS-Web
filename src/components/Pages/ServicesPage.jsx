import { useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import Section from '../Section';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import { pageTitle } from '../../helpers/PageTitle';

const servicesData = [
  {
    title: 'Business Management',
    description: 'We provide end-to-end solutions across business management, operational excellence, and quality assurance — empowering organisations to improve performance, compliance, and profitability across the manufacturing and fresh produce sectors',
    services: [
      'Troubleshooting and master solutions – diagnosing complex issues and delivering practical, lasting resolutions.',
      'Business master planning – developing structured business plans and operational roadmaps for long-term success.',
      'Direction setting – defining clear priorities and aligning teams to achieve strategic goals.',
      'CAPEX project management (inception to completion) – managing capital projects with precision, accountability, and return on investment. Main focus - on budget on time.',
      'Implementation of best practices – embedding proven industry standards and performance frameworks.',
    ],
    imgUrl: '/images/about_img_3.png',
  },
  {
    title: 'Operational Excellence',
    description: 'We help organisations build robust, efficient, and continuously improving operations through structured systems and training.',
    services: [
      'Daily Management System (DMS) – design, training, and implementation for effective day-to-day performance management.',
      'TPM tools and training – implementation of all Total Productive Maintenance tools including 5 Whys, 5S, Fishbone diagrams, and Root Cause Analysis (RCA).',
      'Lean Six Sigma implementation – tailored deployment of lean and six sigma methodologies to reduce waste, variation, and inefficiency.',
      'Continuous improvement frameworks – creating a culture of accountability, ownership, and data-driven improvement.',
    ],
    imgUrl: '/images/about_img_3.png',
  },
  {
    title: 'Quality Assurance (QA)',
    description: 'We ensure businesses are audit-ready and compliant with national and international quality standards across the manufacturing and fresh produce industries.',
    services: [
      'Audit preparation and management – from inception to completion for all audit types including Freshcare, ISO, BRC, SQF, HACCP, GMP, and home-brand supermarket audits.',
      'Development of QA documentation – manuals, SOPs, and compliance documentation tailored to client operations.',
      'QA reporting – structured reporting systems for continuous monitoring and improvement.',
      'Staff training and capability development – ensuring teams understand, implement, and sustain QA standards across all functions.',
    ],
    imgUrl: '/images/about_img_3.png',
  },
  {
    title: 'IT Solutions',
    description: 'We have some of the best in the business on our team — combining deep technical expertise with a clear understanding of operational needs. Our capability spans everything from simple IT infrastructure setups to full-scale ERP implementations, ensuring your systems are efficient, reliable, and aligned with your business goals.',
    services: [
      'IT setup and installations – from basic infrastructure and network configuration to user systems and connectivity.',
      'Business analysis and needs assessment – understanding your operations to identify the right technology solutions.',
      'Solution development – designing and delivering practical, cost-effective systems that simplify business processes.',
      'Software selection and blueprint management – helping you choose the right software, define system requirements, and manage end-to-end implementation.',
      'Implementation and integration – ensuring solutions are embedded into daily operations and teams are confident using them.',
      'Ongoing support and optimisation – providing continuous technical support, maintenance, and system optimisation to keep your business running smoothly and securely.',
    ],
    imgUrl: '/images/about_img_3.png',
  },
];

export default function ServicesPage() {
  pageTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb title="Our Services" bgUrl="/images/page_header_1.jpeg" />

      {/* Main Services Section */}
      <Section pt="140" ptLg="80" pb="140" pbLg="80" className="position-relative">
        <div className="container">
          <SectionHeadingStyle2
            sectionTitleUp="Our Services"
            sectionTitle="Our Services"
          />
          
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div 
                  className="h-100 cs_rounded_20 overflow-hidden position-relative"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Image Section */}
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={service.imgUrl} 
                      alt={service.title} 
                      className="w-100"
                      style={{ 
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Overlay Gradient */}
                    <div 
                      className="position-absolute w-100 h-100 start-0 top-0"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)'
                      }}
                    ></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    {/* Title with Icon */}
                    <div className="d-flex align-items-center cs_mb_15">
                      <div 
                        className="cs_rounded_10 d-flex align-items-center justify-content-center cs_mr_15"
                        style={{
                          width: '50px',
                          height: '50px',
                          backgroundColor: '#CC5500',
                          boxShadow: '0 5px 15px rgba(204, 85, 0, 0.3)',
                          flexShrink: 0
                        }}
                      >
                        <span className="text-white cs_fs_20">✓</span>
                      </div>
                      <h3 className="cs_fs_28 cs_fs_lg_24 fw-medium m-0">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Divider */}
                    <div 
                      className="cs_mb_20" 
                      style={{ 
                        width: '60px', 
                        height: '3px', 
                        backgroundColor: '#CC5500' 
                      }}
                    ></div>
                    
                    {/* Description */}
                    <p className="cs_fs_15 cs_fs_lg_14 cs_lh_lg cs_mb_25 text-muted">
                      {service.description}
                    </p>
                    
                    {/* Services List */}
                    <div>
                      <h5 className="cs_fs_18 cs_fs_lg_16 fw-medium cs_mb_15 d-flex align-items-center">
                        {/* <span 
                          className="cs_mr_10"
                          style={{
                            width: '25px',
                            height: '25px',
                            backgroundColor: '#CC5500',
                            borderRadius: '50%',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <span className="text-white cs_fs_12">→</span>
                        </span> */}
                        Our services include:
                      </h5>
                      <ul className="list-unstyled cs_mb_0">
                        {service.services.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="cs_fs_15 cs_fs_lg_14 cs_lh_lg cs_mb_15 d-flex align-items-start"
                            style={{
                              transition: 'all 0.3s ease',
                              paddingLeft: '5px'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateX(8px)';
                              e.currentTarget.style.color = '#CC5500';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateX(0)';
                              e.currentTarget.style.color = 'inherit';
                            }}
                          >
                            <div
                              className="cs_mr_15"
                              style={{
                                width: '24px',
                                height: '24px',
                                minWidth: '24px',
                                backgroundColor: '#CC5500',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 2px 8px rgba(204, 85, 0, 0.3)',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.2) rotate(360deg)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(204, 85, 0, 0.5)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(204, 85, 0, 0.3)';
                              }}
                            >
                              <span 
                                className="text-white"
                                style={{
                                  fontSize: '12px',
                                  fontWeight: 'bold',
                                  lineHeight: '1'
                                }}
                              >
                                ✓
                              </span>
                            </div>
                            <span style={{ flex: 1 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

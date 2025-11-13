import { useEffect } from 'react';
import Section from '../Section';
import AboutUsSection from '../Section/AboutSection';
import ContactSection from '../Section/ContactSection';
import HeroSection from '../Section/HeroSection';
import MovingTextSection from '../Section/MovingTextSection';
import ServiceSection from '../Section/ServiceSection';
import TeamSection from '../Section/TeamSection';

const heroData = [
  {
    bgUrl: '/images/hero_slider.png',
    titleUp: 'Ignite Your Edge in Every Operation',
    title: 'HARVEST INNOVATION,<br> FORGE TOMORROW',
    subTitle:
      'Empower your manufacturing and fresh produce empire with unyielding strategy,<br> hands-on engineering, and agile transformation—turning raw potential into a <br>symphony of sustainable success.',
    btnText: 'EXPLORE OUR SERVICES',
    btnUrl: '/contact',
  },

];

const movingTextData = [
  '• Quality Assurance and related',
  '• Business planning and support',
  '• Operational Excellence',
  '• IT solutions',
];

const serviceData = [
  {
    iconUrl: '/images/icons/service_icon_1.svg',
    title: 'Quality Assurance',
    subTitle:
      'Ensuring businesses are audit-ready and compliant with national and international quality standards.',
    imgUrl: '/images/service_10.png',
    href: '/',
  },
  {
    iconUrl: '/images/icons/service_icon_2.svg',
    title: 'IT solutions',
    subTitle:
      'Combining deep technical expertise with a clear understanding of operational needs.',
    imgUrl: '/images/service_10.png',
    href: '/',
  },
  {
    iconUrl: '/images/icons/service_icon_3.svg',
    title: 'Operational Excellence',
    subTitle:
      'Building robust, efficient, and continuously improving operations through structured systems.',
    imgUrl: '/images/service_10.png',
    href: '/',
  },
  {
    iconUrl: '/images/icons/service_icon_4.svg',
    title: 'Business planning',
    subTitle:
      'Providing end-to-end solutions across business management, operational excellence, and quality assurance.',
    imgUrl: '/images/service_10.png',
    href: '/',
  },
];

const teamData = [
  {
    imgUrl: '/images/team_member_1.jpeg',
    name: 'Curious',
    designation: 'We explore, understand, connect, and imagine possibilities — always asking how things could be better or different. We embrace "constructive discontent", challenging the status quo to uncover innovative solutions for our clients.',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_2.jpeg',
    name: 'Inclusive',
    designation: 'We draw on diverse talent, perspectives, and experiences to strengthen our ideas. By combining individual insight with collaborative teamwork, we ensure that the best solutions come from everyone working together.',
    srcUrl: '/team/team-details',
  },
  {
    imgUrl: '/images/team_member_3.jpeg',
    name: 'Agile',
    designation: 'We take an iterative, real-world approach to problem-solving. By adapting quickly, testing ideas in practice, and learning continuously, we deliver solutions that are both practical and impactful.',
    srcUrl: '/team/team-details',
  },
];

export default function Home() {
  // pageTitle('Business Home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection data={heroData} />

      <Section>
        <MovingTextSection data={movingTextData} />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="cs_gray_bg"
        style={{ backgroundImage: 'url("/images/services_bg.png")' }}
      >
        <ServiceSection
          sectionTitleUp="Our Services"
          sectionTitle="We Provide The Solution <br />For Our Clients"
          sectionSubTitle="We provide end-to-end solutions across business management, operational excellence, and quality assurance — empowering organisations to improve performance, compliance, and profitability across the manufacturing and fresh produce sectors"
          sectionTitleDown="Digital agency  services built specifically for your business"
          sectionBtnText="Find More Services"
          sectionBtnUrl="/service"
          data={serviceData}
        />
      </Section>

      <Section
        pt="135"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="position-relative"
      >
        <AboutUsSection
          thumbUrl="/images/experience_imgs.png"
          experienceBgUrl="/images/experience_bgs.png"
          experienceIconUrl="/images/experience_icon.svg"
          experienceNumber="40"
          experienceTitle="Work Experience"
          sectionTitleUp="About Us"
          sectionTitle='Transforming Operations with <span className="text-accent">ISS</span>: Your Path to Excellence.'
          sectionSubTitle="Empowering organizations through strategy, technical insight, and hands-on consultation to deliver measurable results."
          grothTitle="Web development"
          grothPercentage="90"
          featureList={[
            {
              title: 'Technical Expertise and Operational Excellence',
              subTitle: 'Deep engineering knowledge and real-world experience from trained teams.',
            },
            {
              title: 'True Transformation',
              subTitle: 'Partnership to optimize assets, build capabilities, and drive performance.',
            },
            // {
            //   title: 'Futureproof Solutions',
            //   subTitle: 'Global best practices tailored to local markets, ensuring compliance and competitiveness.',
            // },
          ]}
          btnText="Get A Quote"
          btnUrl="/contact"
          videoBtnText="Watch the video"
          videoBtnUrl="https://www.youtube.com/embed/0Tz4Ycjbdbg"
        />
      </Section>

      {/* <Section pt="135" ptLg="" className="bg-gray">
        <PortfolioSection
          sectionTitle="Take a look our <br/>Completed Projects"
          sectionTitleUp="Our Latest Project"
          data={portfolioData}
        />
      </Section> */}
{/* 
      <Section
        pt="135"
        ptLg="75"
        pb="100"
        pbLg="40"
        className="position-relative cs_iconbox_2_wrap overflow-hidden"
      >
        <WhyChooseUsSection
          imgUrlLeft="/images/why_choose_us_left_img.jpeg"
          imgUrlRight="/images/why_choose_us_right_img.jpeg"
          sectionTitleUp="Why Choose Us"
          sectionTitle='Developing a <span className="text-accent"> design that <br /> is easy </span> to use and <br /> navigate'
          sectionSubTitle="Providing legal advice, contract drafting, compliance
          assistance, intellectual <br /> property protection, and other
          legal support for businesses. Creating visual <br /> content,
          such as logos, brochures, infographics."
          services={[
            {
              imgUrl: '/images/icons/service_icon_5.svg',
              title: 'Digital agency services',
            },
            {
              imgUrl: '/images/icons/service_icon_6.svg',
              title: 'Creative digital agency',
            },
            {
              imgUrl: '/images/icons/service_icon_7.svg',
              title: 'Super expert developers',
            },
            {
              imgUrl: '/images/icons/service_icon_8.svg',
              title: 'Creating a user friendly design',
            },
          ]}
        />
      </Section> */}

      {/* <Section
        pt="140"
        ptLg="75"
        pb="135"
        pbLg="75"
        style={{ backgroundImage: `url(${'/images/testimonial_bg.jpeg'})` }}
      >
        <TestimonialSection
          sectionTitleUp="Testimonial"
          sectionTitle="What They’re Saying?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          data={testimonialData}
        />
      </Section> */}

      <Section pb="115" pbLg="55">
        <TeamSection
          data={teamData}
          sectionTitle="Meet the professional team <br/> behind the success"
          sectionTitleUp="Our Behaviours"
        />
      </Section>

      <Section
        pt="133"
        ptLg="75"
        pb="140"
        pbLg="80"
        className="background-filled overflow-hidden position-relative"
        style={{ backgroundImage: `url(${'/images/contacts_bg.png'})` }}
      >
        <div className="bg-dark opacity-75 position-absolute w-100 h-100 start-0 top-0" />
        <div className="position-relative cs_zindex_1">
          <ContactSection
          sectionTitleUp="Contact With Us"
          sectionTitle="Let’s Work Together?"
          sectionSubTitle="Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses."
          textVarient="text-white"
          className="cs_mb_40"
          sectionImgUrl="/images/contact_img_1.png"
          contactInfo={[
            {
              imgUrl: '/images/icons/contact_icon_1.svg',
              titleUp: 'Have Any Question',
              title: '(Contact Number)',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_2.svg',
              titleUp: 'Send Email',
              title: '(Email)',
              textColor: 'text-white',
            },
            {
              imgUrl: '/images/icons/contact_icon_3.svg',
              titleUp: 'Address',
              title: '(Address)',
              textColor: 'text-white',
            },
          ]}
        />
        </div>
      </Section>

      {/* <Section pt="140" ptLg="80">
        <BrandSection data={brandData} />
      </Section> */}

      {/* <Section pt="115" ptLg="75" pb="110" pbLg="50">
        <PostSection
          data={postData}
          sectionTitleUp="Find The Blogs"
          sectionTitle="Find Out Latest News <br/> and Articles"
        />
      </Section> */}
    </>
  );
}

import React from 'react';

export default function ContactForm({ variant }) {
  return (
    <form
      action="#"
      className={`cs_contact_form bg-white cs_pt_64 cs_pl_80 cs_pr_80 cs_pb_80 cs_pl_lg_30 cs_pr_lg_30 position-relative cs_rounded_20 ${
        variant ? variant : ''
      }`}
      style={{ backgroundImage: `url('/images/contact_bg_pattern.svg')` }}
    >
      {/* <div className="cs_section_heading cs_style_1 d-flex align-items-center text-center cs_mb_30">
        <div className="cs_section_heading_in">
          <h2 className="cs_fs_48 cs_fs_lg_36 m-0">Contact your Skilled Experts</h2>
        </div>
      </div> */}
      <div className="cs_mb_15">
        <label className="cs_fs_14 mb-2">Your Name:</label>
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-gray"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="cs_mb_15">
        <label className="cs_fs_14 mb-2">Your Email:</label>
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-gray"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="cs_mb_15">
        <label className="cs_fs_14 mb-2">Your Telephone number:</label>
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-gray"
          type="tel"
          placeholder="Your Telephone number"
        />
      </div>
      <div className="cs_mb_15">
        <label className="cs_fs_14 mb-2">Service you after:</label>
        <select className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_15 bg-gray">
          <option value="">Select a service</option>
          <option value="quality-assurance">Quality Assurance and related</option>
          <option value="business-planning">Business planning and support</option>
          <option value="operational-excellence">Operational Excellence</option>
          <option value="it-solutions">IT solutions</option>
        </select>
      </div>
      <div className="cs_mb_30">
        <div className="d-flex align-items-start">
          <input
            type="checkbox"
            id="consent"
            className="cs_mr_10 mt-1"
            style={{ marginTop: '4px' }}
          />
          <label htmlFor="consent" className="cs_fs_14 mb-0">
            By continuing, I understand and agree that I will be contacted regarding my enquiry and based on the information I provided
          </label>
        </div>
      </div>
      <button className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
        <span>Submit Now</span>
      </button>
    </form>
  );
}

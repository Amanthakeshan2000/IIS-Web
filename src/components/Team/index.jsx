import React from 'react';
import { Link } from 'react-router-dom';

export default function Team({ imgUrl, name, designation, srcUrl }) {
  return (
    <div className="cs_team cs_style_1 text-center cs_mb_25 cs_mb_lg_30 overflow-hidden cs_rounded_50 d-flex flex-column h-100">
      <div className="cs_team_member position-relative cs_rounded_50">
      </div>
      <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4 d-flex flex-column flex-grow-1">
        <h2 className="text-white m-0 cs_fs_26 cs_mb_3">
        <br />
          <Link to={srcUrl || '#'}>{name}</Link>
        </h2>
        <br /> <br />
        <p className="text-white m-0">{designation}</p>
      </div>
      <br /> <br />
    </div>
  );
}

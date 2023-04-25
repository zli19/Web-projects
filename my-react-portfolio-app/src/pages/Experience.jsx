import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma - Red River College Polytechnic
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Winnipeg, MB</h4>
          <p>Business Information Technology program</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<StorefrontIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Business Manager - Molijun Restaurant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Chengdu, China</h4>
          <p>Customer service, Business operation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Marketing Manager - Western Leadbank Fund Management Co. LTD
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shanghai, China
          </h4>
          <p>Marketing, Business development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Banking advisor, Product Manager - Industrial and Commercial Bank of
            China (ICBC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Jinan, China</h4>
          <p>Personal banking, Banc-assurance business</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Master of Applied Economics - Shanghai University of Finance and
            Economics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shanghai, China
          </h4>
          <p>Insurance, Actuarial science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;

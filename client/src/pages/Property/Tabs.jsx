import React, { useState } from "react";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-headers">
        {props.children.map((tab, index) => (
          <button
            key={index}
            className={`tab-header ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-contents">
        {props.children.map((tab, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? "active" : "hidden"}`}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
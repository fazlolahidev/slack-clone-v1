import React from "react";

const LineBreak = ({sideTop}) => {
  return <div className={`border border-b border-[#49274b] ${sideTop ? 'mb-3' : 'my-3'}`} />;
};

export default LineBreak;

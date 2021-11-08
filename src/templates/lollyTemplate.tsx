import React from "react";

const LollyTemplate = ({ pageContext }) => {
  console.log("Page Context=>>>>>", pageContext);
  return (
    <div className="container">
      <h1>{pageContext.lollyPath}</h1>
    </div>
  );
};

export default LollyTemplate;

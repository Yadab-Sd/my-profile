import Resume from "@common/Resume/Resume";
import React from "react";

const ResumePage = ({ orderDetails, selectedProducts }: any) => {
  return (
    <div
      style={{ width: 595, height: 842, margin: "10px auto" }}
      className="resume-pdf shadow-lg"
    >
     <Resume />
    </div>
  );
};

export default React.memo(ResumePage);

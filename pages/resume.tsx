import Resume from "@common/Resume/Resume";
import { PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

const ResumePage = ({ orderDetails, selectedProducts }: any) => {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    setShowDownload(true);
  }, []);

  return (
    <div>
      {showDownload && ( // @ts-ignore
        <PDFViewer
          // @ts-ignore
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            left: "0",
            top: "0",
            right: 0,
            bottom: 0,
            zIndex: 10000000,
            margin: "0 auto",
          }}
          className="shadow-lg"
        >
          <Resume />
        </PDFViewer>
      )}
    </div>
  );
};

export default React.memo(ResumePage);

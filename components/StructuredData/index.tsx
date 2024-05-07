import Script from "next/script";
import React from "react";

interface Props {
  structuredData: any;
  id: string;
}

const StructuredData = ({ structuredData, id }: Props) => {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;

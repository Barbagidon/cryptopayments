import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import { amlPolicy } from "@/legalText/amlPolicy";
import React from "react";

const AmlPolicy = async () => {
  const pageData = await getLegalPage(3);

  return <Legal data={pageData} />;
};

export default AmlPolicy;

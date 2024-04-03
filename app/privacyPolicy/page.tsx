import Legal from "@/components/Legal";
import { privacyPolicy } from "@/legalText/privacyPolicy";
import { privacyPolicy1 } from "@/legalText/privacyPolicy1";
import React from "react";

const PrivacyPolicy = () => {
  return <Legal data={privacyPolicy1} />;
};

export default PrivacyPolicy;

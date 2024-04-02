import Legal from "@/components/Legal";
import { privacyPolicy } from "@/legalText/privacyPolicy";
import React from "react";

const Faq = () => {
  return <Legal data={privacyPolicy} />;
};

export default Faq;

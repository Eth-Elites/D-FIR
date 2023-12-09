import React from "react";
import AadharVerification from "../dFir/AadharVerification";
import FirRegistration from "../dFir/FirRegistration";
import Stepper, { StepMapTypes } from "~~/components/global/Stepper";

export default function Citizen() {
  const stepMap: StepMapTypes[] = [
    {
      title: "Verify Identity",
      component: <AadharVerification />,
    },
    {
      title: "Register Complaint",
      component: <FirRegistration />,
    },
  ];
  return <Stepper stepMap={stepMap} />;
}

"use client";
import { useState } from "react";
import { PremiumCardModal } from "../PremiumCard";
import { SubscriptionModal } from "../SubscriptionModal";

export const SubscriptionFlow = () => {
  const [step, setStep] = useState<"info" | "purchase">("info");

  const handleNextStep = () => setStep("purchase");
  const handleClose = () => setStep("info");

  return (
    <>
      {step === "info" && (
        <PremiumCardModal
          onClose={() => setStep("info")}
          onProceed={handleNextStep}
        />
      )}
      {step === "purchase" && <SubscriptionModal onClose={handleClose} />}
    </>
  );
};

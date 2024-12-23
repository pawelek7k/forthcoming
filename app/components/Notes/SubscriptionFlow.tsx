"use client";
import { useState } from "react";
import { PremiumCardModal } from "./PremiumCardModal";
import { SubscriptionModal } from "./SubscriptionModal";
import Notiflix from "notiflix";

export const SubscriptionFlow = () => {
  const [step, setStep] = useState<"info" | "purchase">("info");

  const handleNextStep = () => setStep("purchase");

  const handleClose = () => setStep("info");

  const handleSubscribe = () => {
    Notiflix.Notify.success("Thank you for subscribing!");
    handleClose();
  };

  return (
    <>
      {step === "info" && (
        <PremiumCardModal onClose={handleClose} onProceed={handleNextStep} />
      )}
      {step === "purchase" && (
        <SubscriptionModal
          onSubscribe={handleSubscribe}
          onClose={handleClose}
        />
      )}
    </>
  );
};

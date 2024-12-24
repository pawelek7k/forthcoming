"use client";
import { useState } from "react";
import { PremiumCardModal } from "./PremiumCardModal";
import { SubscriptionModal } from "./SubscriptionModal";
import Notiflix from "notiflix";

export const SubscriptionFlow = () => {
  const [step, setStep] = useState<"info" | "purchase">("info");
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleNextStep = () => setStep("purchase");

  const handleClose = () => {
    setStep("info");
    setIsModalVisible(false);
  };

  const handleSubscribe = () => {
    Notiflix.Notify.success("Thank you for subscribing!");
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && step === "info" && (
        <PremiumCardModal onClose={handleClose} onProceed={handleNextStep} />
      )}
      {isModalVisible && step === "purchase" && (
        <SubscriptionModal
          onSubscribe={handleSubscribe}
          onClose={handleClose}
        />
      )}
    </>
  );
};

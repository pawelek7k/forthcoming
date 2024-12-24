"use client";
import { motion } from "framer-motion";
import { FcApproval } from "react-icons/fc";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Overlay } from "../Overlay";
import { Paragraph } from "../Paragraph";
import { CardDetailsForm } from "./CardDetailsForm";

type SubscriptionModalProps = {
  onSubscribe: () => void;
  onClose: () => void;
};

export const SubscriptionModal = ({
  onSubscribe,
  onClose,
}: SubscriptionModalProps) => {
  const features: string[] = ["AI suggestions", "Notes", "Priority support"];

  return (
    <Overlay>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-zinc-100 rounded-lg shadow-lg max-w-md w-full  text-zinc-950 relative h-80"
      >
        <div className="w-full bg-zinc-900 text-zinc-100 rounded-md p-6 h-48">
          <Heading as="h2" namespace="premium.purchaseHeading" />
          <Paragraph namespace="premium.purchaseParagraph" />
          <ul className="flex items-center justify-center gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <FcApproval />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-50 absolute -bottom-28 w-96 left-1/2 -translate-x-1/2">
          <p>You'll pay.</p>
          <div className=" border border-b-zinc-300 m-6">
            <Heading as="h3">
              <span>$9</span>.99 <span> /month </span>
            </Heading>
            <div>Monthly subsciption</div>
          </div>
          <div className="p-6 pt-0">
            <p>Card details</p>
            <CardDetailsForm />
          </div>
          <ul className="flex flex-col md:flex-row-reverse justify-start gap-4 p-6">
            <li>
              <Button onClick={onSubscribe} success={true}>
                Pay now
              </Button>
            </li>
            <li>
              <Button
                danger={true}
                onClick={onClose}
                namespace="premium.cancelBtn"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </Overlay>
  );
};

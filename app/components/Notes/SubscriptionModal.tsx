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
        className="bg-zinc-100 rounded-2xl shadow-lg w-[500px] text-zinc-950 relative h-96"
      >
        <div className=" bg-zinc-900 text-zinc-100 rounded-xl p-6 h-64 w-[500px] flex flex-col gap-2">
          <Heading
            as="h2"
            namespace="premium.purchaseHeading"
            className="text-xl"
          />
          <Paragraph
            namespace="premium.purchaseParagraph"
            className="text-xs text-zinc-400 text-lg"
          />
          <ul className="flex items-center justify-center gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1 text-sm">
                <FcApproval />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-100 absolute -bottom-0 rounded-xl left-1/2 -translate-x-1/2 w-[450px] p-4 flex flex-col gap-4">
          <p>You'll pay.</p>
          <div className="border border-b-zinc-300 flex justify-between">
            <Heading as="h3">
              <span>$9</span>.99 <span> /month </span>
            </Heading>
            <div>Monthly subsciption</div>
          </div>
          <div className="">
            <p>Card details</p>
            <CardDetailsForm />
          </div>
          <ul className="flex flex-col md:flex-row-reverse justify-start gap-4">
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

"use client";
import { motion } from "framer-motion";
import { FcApproval } from "react-icons/fc";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Overlay } from "../Overlay";
import { Paragraph } from "../Paragraph";
import { Tag } from "../Tag";
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
        className="bg-zinc-100 rounded-2xl shadow-lg w-full sm:w-[500px] text-zinc-950 relative h-96"
      >
        <div className="bg-gradient-to-t from-sky-950 to-zinc-950 text-zinc-100 rounded-xl p-6 h-64 w-full sm:w-[500px] flex flex-col gap-2">
          <Heading
            as="h2"
            namespace="premium.purchaseHeading"
            className="text-xl"
          />
          <Paragraph
            namespace="premium.purchaseParagraph"
            className="text-xs text-zinc-400"
          />
          <ul className="flex items-center justify-center gap-2 sm:gap-4 flex-col sm:flex-row tracking-wider">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1 text-sm">
                <FcApproval />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-100 absolute -bottom-12 sm:bottom-0 rounded-xl left-1/2 -translate-x-1/2 sm:w-[450px] p-4 flex flex-col gap-2 md:gap-4 bg-premium-card-gradient w-full">
          <p className="text-xs font-semibold">{"You'll pay,"}</p>
          <div className="border-b border-b-zinc-300 flex justify-between p-2 items-center pt-0">
            <Heading as="h3" className="font-semibold">
              <span className="text-3xl">$9</span>.99{" "}
              <span className="text-zinc-400 text-xs"> /month </span>
            </Heading>
            <Tag>Monthly subsciption</Tag>
          </div>
          <div className="">
            <Paragraph namespace="premium.cardDetails" />
            <CardDetailsForm />
          </div>
          <ul className="flex flex-col md:flex-row-reverse justify-start gap-2 md:gap-4">
            <li>
              <Button
                onClick={onSubscribe}
                success={true}
                className="text-xs"
                namespace="premium.payNow"
              />
            </li>
            <li>
              <Button
                danger={true}
                onClick={onClose}
                namespace="premium.cancelBtn"
                className="text-xs"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </Overlay>
  );
};

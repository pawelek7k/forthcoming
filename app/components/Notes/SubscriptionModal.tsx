"use client";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Overlay } from "../Overlay";

type SubscriptionModalProps = {
  onSubscribe: () => void;
  onClose: () => void;
};

export const SubscriptionModal = ({
  onSubscribe,
  onClose,
}: SubscriptionModalProps) => {
  return (
    <Overlay>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-zinc-100 rounded-lg shadow-lg max-w-md w-full flex gap-4 flex-col text-zinc-950 relative h-80"
      >
        <div className="w-full bg-zinc-900 text-zinc-100 h-1/2 rounded-md p-6">
          <Heading as="h2" namespace="premium.purchaseHeading" />
        </div>
        <div>
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <Button onClick={onSubscribe} success={true}>
                Subskrybuj teraz
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

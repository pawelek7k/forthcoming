"use client";
import React from "react";
import { Overlay } from "../Overlay";
import { Button } from "../Button";
import { motion } from "framer-motion";

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
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-zinc-900"
      >
        <ul className="flex flex-col gap-4">
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
      </motion.div>
    </Overlay>
  );
};

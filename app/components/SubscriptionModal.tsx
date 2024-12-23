import { motion } from "framer-motion";
import { Button } from "./Button";
import { Overlay } from "./Overlay";

type SubscriptionModalTypes = {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
};

export const SubscriptionModal = ({
  isOpen,
  onClose,
  onSubscribe,
}: SubscriptionModalTypes) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Subskrypcja Premium
        </h2>
        <p className="text-gray-600 mb-6">
          Uzyskaj dostęp do dodatkowych funkcji dzięki subskrypcji Premium!
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-800">Cena:</span>
          <span className="text-lg font-bold text-green-600">
            19.99 PLN/mies.
          </span>
        </div>
        <ul className="flex flex-col">
          <li>
            <Button onClick={onSubscribe} primary={true}>
              Subskrybuj teraz
            </Button>
          </li>
          <li>
            <Button danger={true} onClick={onClose}>
              Anuluj
            </Button>
          </li>
        </ul>
      </motion.div>
    </Overlay>
  );
};

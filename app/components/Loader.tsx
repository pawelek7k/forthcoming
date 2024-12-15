import { Overlay } from "./Overlay";

export const Loader = () => (
  <Overlay>
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce z-999"></div>
      <div className="w-4 h-4 rounded-full bg-rose-900 animate-bounce shadow-lg shadow-rose-900 [animation-delay:-.3s] z-999"></div>
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce [animation-delay:-.5s] z-999"></div>
    </div>
  </Overlay>
);

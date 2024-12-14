export const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center z-999 bg-zinc-950/90">
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce z-999"></div>
      <div className="w-4 h-4 rounded-full bg-rose-900 animate-bounce shadow-lg shadow-rose-900 [animation-delay:-.3s] z-999"></div>
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce [animation-delay:-.5s] z-999"></div>
    </div>
  </div>
);

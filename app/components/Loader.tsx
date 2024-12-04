export const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-999 dark:bg-zinc-900/50">
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-rose-950 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  </div>
);

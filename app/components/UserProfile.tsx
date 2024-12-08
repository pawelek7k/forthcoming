import { useSession } from "next-auth/react";

export const UserProfile = () => {
  const { data: session } = useSession();

  const email = session?.user?.email ?? "unknown@example.com";
  const username = session?.user?.name ?? email.split("@")[0];
  return (
    <div className="flex items-center">
      <div className="bg-zinc-100 w-8 h-8 rounded-full"></div>
      <div className="flex flex-col">
        <p>{email} </p>
        <p>{username}</p>
      </div>
    </div>
  );
};

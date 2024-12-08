import { signOut, useSession } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";
import { Button } from "./Button";

export const UserProfile = () => {
  const { data: session } = useSession();

  const logoutHandler = async () => {
    await signOut({ redirect: false });
    window.location.reload();
  };

  const email = session?.user?.email ?? "unknown@example.com";
  const username = session?.user?.name ?? email.split("@")[0];
  return (
    <div className="flex items-center hover:bg-zinc-900 cursor-pointer p-4 rounded-md border border-zinc-900 transition ease-in-out justify-between">
      <div className="bg-zinc-100 w-8 h-8 rounded-full"></div>
      <div className="flex flex-col text-sm">
        <p>{email}</p>
        <p>{username}</p>
      </div>
      <Button onClick={logoutHandler} aria-label="logout" className="p-0">
        <IoLogOutOutline className="sm:w-6 sm:h-6 h-5 w-5" />
      </Button>
    </div>
  );
};

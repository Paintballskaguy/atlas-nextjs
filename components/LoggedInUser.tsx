import { auth } from "@/auth";
import Image from "next/image";

export default async function LoggedInUser() {
  const session = await auth();
  
  if (!session?.user) {
    return null;
  }

  const user = session.user;
  const userName = user.name || user.email || "User";
  const userImage = user.image;

  return (
    <div className="flex h-[48px] w-full items-center gap-3 rounded-md bg-gray-50 p-3 text-sm font-medium md:p-2 md:px-3">
      {userImage ? (
        <Image
          src={userImage}
          alt={userName}
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <span className="text-sm text-white font-semibold">
            {userName.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
      <span className="hidden md:block">{userName}</span>
    </div>
  );
}
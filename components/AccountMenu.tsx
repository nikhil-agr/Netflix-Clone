import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2">
      <div className="flex flex-col gap-3">
        <div className="px-3 flex flex-row group/item gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="/images/default-red.png"
            alt="profile"
            width={100}
            height={100}
          />
          <p className="text-sm group-hover/item:underline">Username</p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
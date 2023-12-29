import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { },
  };
}

export default function Home() {
  const {data: user} = useCurrentUser();
  return (
    <>
      <h1 className="text-4xl text-green-400">Netflix Clone</h1>
      <p>Logged in as: {user?.name}</p>
      <button
        className="text-black font-bold text-2xl h-10 w-full bg-white"
        onClick={() => signOut()}
      >
        Logout!
      </button>
    </>
  );
}

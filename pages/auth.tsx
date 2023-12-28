import Input from "@/components/Input";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src={"/images/logo.png"} alt="Logo" width={200} height={200} />
        </nav>
        <div className="flex justify-center items-center">
          <div className="bg-black/[0.70] px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Log In' : 'Sign Up'}
            </button>
            <p className="text-neutral-500 mt-12 flex justify-center items-center">
              { variant === 'login' ? 'First Time Using Netflix?' : 'Already Have an Account' } 
              <span
                onClick={toggleVariant}
                className="ml-3 text-white hover:underline cursor-pointer"
              >
                { variant === 'login' ? 'Create an Account' : 'LogIn' } 
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

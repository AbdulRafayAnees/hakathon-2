"use client";
import Image from "next/image";
import React, { useState } from "react";
import RadioButton from "./RadioButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Form from "./Form";
import AuthSidepanel from "./AuthSidepanel";
import { usePathname } from "next/navigation";

const LoginOrSignUp = () => {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const [pageDetail, setPageDetail] = useState({
    title: isLogin ? "Sign In" : "Sign Up",
    description: isLogin
      ? "Welcome back! Please enter your details to continue"
      : "Create an account to get started",
    buttonText: isLogin ? "Sign Up" : "Sign In",
  });

  return (
    <div className="h-screen min-w-screen flex overflow-hidden">
      <div className="bg-[#F5F1FD] min-h-screen w-full lg:w-1/2 overflow-hidden ">
        <Image
          src="/logo.png"
          alt="Login or Sign Up"
          width={200}
          height={100}
        />
        <div className="flex flex-col items-center justify-center gap-4 mt-8 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold text-[#121631]">{pageDetail.title}</h1>
            <p className="text-[#8183A2] font-medium">
              {pageDetail.description}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            {isLogin && <RadioButton>Admin</RadioButton>}
            <RadioButton>HR</RadioButton>
            <RadioButton>Employee</RadioButton>
          </div>
          {
            isLogin && (
              <><div className="flex flex-col items-center justify-center gap-4  mt-4 w-100">
            <div className="flex items-center  bg-white p-4 rounded-full w-full  gap-2 mt-2 cursor-pointer">
              <FcGoogle size={20} />
              <button className="text-sm m-auto font-semibold text-[#050626] px-13">
                Sign in with Google
              </button>
            </div>
            <div className="flex items-center  bg-white p-4 rounded-full w-full  gap-2 mt-2 cursor-pointer">
              <FaGithub size={20} />
              <button className="text-sm m-auto font-semibold text-[#050626] px-13">
                Sign in with Github
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-3 items-center gap-3 w-full">
            <div className="w-30 border border-t border-gray-300" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="w-30 border border-t border-gray-300" />
          </div></>
            )
          }
          <Form pageDetail={pageDetail} isLogin={isLogin} />
        </div>
      </div>
      <AuthSidepanel />
    </div>
  );
};

export default LoginOrSignUp;

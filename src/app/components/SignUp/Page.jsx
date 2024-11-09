import React from "react";
import { IoClose } from "react-icons/io5";
import FormItem from "./InputComponent/Page";
import Image from "next/image";
import google from "../../../../public/images/google.png";
const SignUp = ({ fun, dialog }) => {
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0  bg-[#333333] bg-opacity-80 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
          <div className="relativ flex flex-col ">
            <div className="w-[488px] max-w-[99vw]  max-h-[95%] rounded-[24px] bg-white flex flex-col  gap-5 px-4 sm:px-[60px] py-10">
              <div className="flex w-full justify-between items-center">
                <p className="font-bold text-[32px]">
                  {dialog == "signUp" ? "Create Account" : "Login"}
                </p>
                <div onClick={() => fun(null)}>
                  <IoClose
                    size={24}
                    className="text-[#333333] opacity-40 cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-full  flex flex-col justify-between">
                <form className="flex flex-col  gap-5 w-full">
                  <div className="flex flex-col gap-[20px]">
                    {dialog == "signUp" ? (
                      <FormItem
                        title="Name and Surname"
                        dis="Enter your name and surname"
                        Type="text"
                      />
                    ) : null}
                    <FormItem
                      title="Email Address"
                      dis="Enter your email address"
                      Type="email"
                    />
                    <FormItem
                      title="Password"
                      dis="Enter your password"
                      Type="password"
                    />
                  </div>
                  {dialog == "signUp" ? (
                    <div className="flex justify-start gap-[10px] text-[#33333399] text-sm font-normal">
                      <input type="checkbox"></input>
                      <label>
                        I agree with{" "}
                        <span className="text-myPrimary">Terms</span> and{" "}
                        <span className="text-myPrimary">Privacy</span>
                      </label>
                    </div>
                  ) : (
                    <p className="text-[#33333399] text-sm font-normal flex justify-end">
                      Forgot your password?
                    </p>
                  )}
                  <div className="flex flex-col items-center gap-[6px] ">
                    <input
                      type="submit"
                      value={dialog == "signUp" ? `SIGN UP` : `Sign In`}
                      className="bg-myPrimary text-white w-full h-[47px]  text-xl font-semibold  rounded-full active:bg-[#feae00d3]"
                    />
                    <p className="font-normal text-base text-[#333333] opacity-40">
                      or
                    </p>

                    <div className="flex justify-center items-center  w-full relative cursor-pointer h-[45px] rounded-full border brder-solid border-[#33333333]">
                      <Image
                        src={google}
                        className="absolute top-1/2 left-6 -translate-y-1/2"
                        alt="google"
                      />
                      <p className="font-semibold text-lg text-[#333333] opacity-40">
                        {dialog == "signUp"
                          ? "Sign Up with Google"
                          : "Sign In with Google"}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <p className="text-base font-normal text-[#333333]  ">
                {dialog == "signUp"
                  ? "Already have an account?"
                  : "Don’t have an account ?"}
                <span
                  className=" text-myPrimary underline ml-[2px]"
                  onClick={
                    dialog == "signUp"
                      ? () => fun("login")
                      : () => fun("signUp")
                  }
                >
                  {dialog == "signUp" ? " Log In" : "Sign Up"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

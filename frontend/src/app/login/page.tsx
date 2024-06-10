"use client";
import Image from "next/image";
import loginIllustration from "../../../public/images/loginIllustreation.png";
import loginBluryImg from "../../../public/images/loginBluryImg.png";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Option, Select } from "@material-tailwind/react";
import Link from "next/link";
import { loginDataType } from "@/types/basicTypes";
import axios from "axios";
import { backendUrl } from "@/constants";

export default function LogIn() {
  const [pageHeight, setPageHeight] = useState(0);
  const [formData, setFormData] = useState<loginDataType>({});

  const [submitting, setSubmitting] = useState(false);

  const updateFormData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
      setSubmitting(true)
      axios.post(`${backendUrl}/auth/logn`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }).finally(()=> setSubmitting(false));
   
  };

  useEffect(() => {
    const updateHeight = () => {
      const height = document.documentElement.scrollHeight;
      setPageHeight(height);
    };

    // Update height on mount
    updateHeight();

    // Optionally update height on resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <>

    <div className="w-full flex lg:flex-row flex-col h-full z-10">
        <div
          className={`lg:w-[45%] w-full bg-[#EEF1FF] flex items-center  lg:h-[${pageHeight}] p-10`}
        >
          <Image className="w-full" src={loginIllustration} alt="" />
        </div>
        <div className="lg:w-[55%] w-full flex flex-col justify-center py-auto  h-full p-10 pb-0">
            <h1 className="font-semibold md:text-4xl text-center text-2xl my-3">
              Welcome to GroupThynk
            </h1>
            <h3 className="font-normal md:text-2xl text-center text-lg lg:w-3/4 mx-auto w-full">
              Join a Community of Like-Minded Individuals and Reach Your Goals
              Together!
            </h3>
          <div className="my-3 lg:w-[65%] mx-auto">
            <div className="my-8">
              <div className=" w-full my-4">
                <label className="md:text-lg text-md font-medium block">
                  Email
                </label>
                <input
                  type="email"
                  className="my-1 w-full py-4 px-2 rounded-md bg-[#F5F6F7]"
                />
              </div>
              <div className=" w-full my-4">
                <label className="md:text-lg text-md font-medium block">
                  Password
                </label>
                <input
                  type="password"
                  className="my-1 w-full py-4 px-2 rounded-md bg-[#F5F6F7]"
                />
              </div>
              <button className="text-center my-4 w-full text-white rounded-md py-3 font-semibold text-lg bg-[#615EF0]">
                Log in
              </button>
              <p className="my-3 font-medium text-lg">
                Don’t have an account yet? {"  "}{" "}
                <Link className="text-[#615EF0]" href={"/signup"}>
                  Create your account now
                </Link>
              </p>
            </div>
          </div>
          <Image src={loginBluryImg} className="w-[80%] mx-auto" alt="Image" />
          
        </div>
      </div>
      
    </>
  );
}



// "use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const SignupComponent = () => {
  async function loginHandler(formData) {
    "use server";
    const userCredentails = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    console.log(userCredentails);

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(userCredentails),
    })
      .then((res) => res.json())
      .then((json) => console.log(JSON.stringify(json)));

    // mutate data
    // revalidate cache
  }

  return (
    <div className="container flex flex-col justify-center items-center  my-20">
      <div className="shadow-lg p-10 rounded-lg space-y-3  w-10/12  ">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form
          action={loginHandler}
          className="space-y-4 flex flex-col  justify-center items-center mx-auto"
        >
          <div className="flex justify-center items-center   ">
            <label htmlFor="firstname" className=" w-72">
              First Name:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your Firstname"
              required
              className="w-10/12"
              name="firstname"
            />
            <label htmlFor="firstname" className=" w-72 pl-2 ">
              Last Name:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your Firstname"
              required
              name="firstname"
            />
          </div>

          <div className="flex justify-center items-center ">
            <label htmlFor="email" className="  w-72">
              Email:
            </label>
            <Input
              type="email"
              placeholder="Please Enter Your Email"
              required
              className="w-10/12"
              name="email"
            />
            <label htmlFor="password" className=" w-72 pl-2 ">
              Password:
            </label>
            <Input
              type="password"
              placeholder="Please Enter Your Password"
              required
              name="password"
            />
          </div>

          <div className="flex justify-center items-center ">
            <label htmlFor="username" className="  w-72">
              Username
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your username"
              required
              className="w-10/12"
              name="username"
            />
            <label htmlFor="city" className=" w-72 pl-2 ">
              City:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your city"
              required
              name="city"
            />
          </div>

          <div className="flex justify-center items-center ">
            <label htmlFor="street" className="  w-72">
              Street:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your  street"
              required
              className="w-10/12"
              name=" street"
            />
            <label htmlFor=" zipcode" className=" w-72 pl-2 ">
              Zipcode:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your  zipcode"
              required
              name=" zipcode"
            />
          </div>

          <div className="flex justify-center items-center ">
            <label htmlFor="phone" className="  w-72">
              Phone :
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your  phone"
              required
              className="w-10/12"
              name=" phone"
            />
            {/* <label htmlFor="firstname" className=" w-72 pl-2 ">
              Last Name:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your Firstname"
              required
              name="firstname"
            /> */}
          </div>
          <Button className="text-center  w-1/2">Signup</Button>
        </form>
        <p className="text-center">
          If you Have one.{" "}
          <Link href="/login" className="text-blue-700 font-semibold">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;

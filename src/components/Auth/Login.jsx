// "use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginComponent = () => {
  async function loginHandler(formData) {
    "use server";
    const userCredentails = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    console.log(userCredentails);

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ userCredentails }),
    })
      .then((res) => res.json())
      .then((json) => console.log(JSON.stringify(json)));

    // mutate data
    // revalidate cache
  }

  return (
    <div className="container flex flex-col justify-center items-center h-[70vh]">
      <div className="shadow-lg p-10 rounded-lg w-1/4 space-y-3">
        <h1 className="text-3xl font-bold">Login</h1>
        <form action={loginHandler} className="space-y-3">
          <div>
            <label htmlFor="username" className="text-lg  pb-4">
              Username:
            </label>
            <Input
              type="text"
              placeholder="Please Enter Your Username"
              required
              name="username"
            />
          </div>

          <div className="text-lg pt-3 ">
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              placeholder="Please Enter Your Password"
              required
              name="password"
            />
          </div>
          <Button className="text-center">Signin</Button>
        </form>
        <p>
          If you don&apos;t Have one.{" "}
          <Link href="/signup" className="text-blue-700 font-semibold">
            Sign Up
          </Link>{" "}
          first
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;

/**
 * Menggunakan JWT decode, JWT cookies
 */

import Link from "next/link";
import React, { useState } from "react";
import { setLogin } from "../../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const onSubmitSign = async () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    if (!email || !password) {
      toast.error("Email dan Password wajib diisi");
    } else {
      const result = await setLogin(data);
      console.log("result: ", result);
      if(result.error) {
        toast.error(result.message)
      } else {
        toast.success("Login Success")
        console.log(result);
        const {token} = result.data
        const tokenBase64 = btoa(token)  //ngerubah tokennya jadi base64
        console.log("token base64: " , tokenBase64);
        Cookies.set('token', tokenBase64, {expires: 1 })
        router.push('/')
      }
    
    }


  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          name="email"
          value={email}
          aria-describedby="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          name="password"
          value={password}
          aria-describedby="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={onSubmitSign}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">
            Sign Up
          </a>
        </Link>

        <ToastContainer />
      </div>
    </>
  );
}

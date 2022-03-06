import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const className = {
    label: classNames("form-label text-lg fw-medium color-palette-1 mb-10"),
    input: classNames("form-control rounded-pill text-lg"),
  };

  const router = useRouter()
const onSubmit = () => {
  const userForm = {
    email,
    name,
    password
  }
  localStorage.setItem('user-form', JSON.stringify(userForm))
  router.push('/sign-up-photo')
}
  return (
    <div>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label className={className.label}>Full Name</label>
        <input
          type="text"
          className={className.input}
          value={name}
          aria-describedby="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className={className.label}>Email Address</label>
        <input
          type="email"
          className={className.input}
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className={className.label}>Password</label>
        <input
          type="password"
          className={className.input}
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            type="button"
            className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
            onClick={onSubmit}
          >
            Continue
          </button>
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </div>
  );
}

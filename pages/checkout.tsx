import React from "react";
import CheckoutConfirmation from "../components/organism/CheckoutConfirmation";
import CheckoutDetail from "../components/organism/CheckoutDetail";
import CheckoutItem from "../components/organism/CheckoutItem";
import Image from "next/image";
import { JWTPayloadTypes, UserTypes } from "../services/data-types";
import jwtDecode from "jwt-decode";

interface CheckoutProps{
  user: UserTypes
}
export default function checkout(props: CheckoutProps) {
  const {user} = props;
  console.log("user ", user);
  
  return (
    <div>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </div>
  );
}
//context berisi request dan response dari server
export async function getServerSideProps({ req }) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in", //path 
        permanent: false,
      },
    };
  }
  //di sisi client menggunakan atob
  const jwtToken = Buffer.from(token, 'base64').toString('ascii')  //encode menjadi jwtToken
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  // const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `https://api-bwa-storegg.herokuapp.com/uploads/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload ,
    },
  };
}

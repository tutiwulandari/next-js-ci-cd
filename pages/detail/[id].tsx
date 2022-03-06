import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";
import TopUpForm from "../../components/organism/TopUpForm";
import TopUpItem from "../../components/organism/TopUpItem";
import { getDetailVoucher } from "../../services/player";

export default function Detail() {
  const {query, isReady} = useRouter()
  const [dataItem, setDataItem] = useState({
    name:'',
    thumbnail :'',
    category :{
      name : ''
    },
  })
  const [nominals, setNominal] = useState([])
  const [payments, setPayment] = useState([])
  const getVoucherDetailAPI = useCallback( async(id) => {
      const data = await getDetailVoucher(id)
      console.log("nominal : " , data.detail.nominals);
      console.log("payment : " , data.payment);
      setDataItem(data.detail) 
      setNominal(data.detail.nominals)
      setPayment(data.payment)
  },[])

  useEffect(() => {
    if(isReady) {
      console.log("router is ready to use", query.id);
      getVoucherDetailAPI(query.id)
    } 
  },[isReady])


  return (
    <>
    <Navbar />
    <section className="detail pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="detail-header pb-50">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
            Top Up
          </h2>
          <p className="text-lg color-palette-1 mb-0">
            Perkuat akun dan jadilah pemenang
          </p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
          <TopUpItem type="mobile" data={dataItem}/>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
           <TopUpItem type="desktop" data={dataItem}/>
            <hr />
           <TopUpForm  payments ={payments} nominals={nominals}/>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
    
  );
}

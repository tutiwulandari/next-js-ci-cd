import React from "react";
import Image from "next/image";
import FooterItem from "../../molecules/FooterItem";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/footer.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>

            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  desc1="About Us"
                  desc2="Press Release"
                  desc3="Terms of Use"
                  desc4="Privacy & Policy"
                />
                <FooterItem
                  title="Support"
                  desc1="About Us"
                  desc2="Refund Policy"
                  desc3=" Unlock Rewards"
                  desc4=" Live Chatting"
                />
                <FooterItem
                  title="Connect"
                  desc1=" hi@store.gg"
                  desc2="Refund Policy"
                  desc3=" team@store.gg"
                  desc4="   Pasific 12, Jakarta Selatan"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

import React from "react";
import SideBar from "../../../components/organism/SideBar";
import TransactionsContent from "../../../components/organism/TransactionsContent";

export default function Transactions() {
  return (
      <section className="transactions overflow-auto">
          <SideBar activeMenu="transactions" />
        <TransactionsContent />
      </section>
  );
}

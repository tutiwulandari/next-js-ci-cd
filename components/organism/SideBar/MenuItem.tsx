import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-messages"
    | "ic-menu-reward"
    | "ic-menu-settings";
  active?: boolean;
  href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
  const classItem = classNames({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="ic-menu" />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}

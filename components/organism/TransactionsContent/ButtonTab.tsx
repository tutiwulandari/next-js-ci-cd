import classNames from "classnames";
import React from "react";

interface ButtonTabProps {
    title : string,
    active? : boolean
}
export default function ButtonTab(props: Partial <ButtonTabProps>) {
    const {title, active} = props
    const classButton = classNames({
       "btn btn-status rounded-pill text-sm me-3" : true,
       "btn-active" : active

    })

  return (
    <a
      data-filter="*"
      href="#"
      className={classButton}
    >
     {title}
    </a>
  );
}

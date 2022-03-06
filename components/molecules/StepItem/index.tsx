import React from "react";

interface ItemProps {
    title : string,
    subTitle1 : string,
    subTitle2:string

    icon : 'step1' | 'step2' | 'step3'
}
export default function StepItem(props : ItemProps) {
    const {icon, title, subTitle1, subTitle2} = props
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
      <img src={`/icon/${icon}.svg`} width={80} height={80} className="mb-30"/>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
         {subTitle1}
          <br />
         {subTitle2}
        </p>
      </div>
    </div>
  );
}

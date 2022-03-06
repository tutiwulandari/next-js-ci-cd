import React from "react";

interface FooterItemProps {
    title : string,
    desc1 : string,
    desc2: string,
    desc3: string,
    desc4: string
}

export default function FooterItem(props: FooterItemProps) {
    const {title, desc1 , desc2, desc3, desc4} = props
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
           {desc1}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
          {desc2}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
           {desc3}
          </a>
        </li>
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {desc4}
          </a>
        </li>
      </ul>
    </div>
  );
}

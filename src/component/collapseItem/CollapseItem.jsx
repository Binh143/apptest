import React, { useState } from "react";
import { Link } from "react-router-dom";

const CollapseItem = ({ data }) => {
  const [toggleColl, setToggleColl] = useState(false);
  return (
    <li key={data.id} className={`${toggleColl ? "showMenu" : ""}`}>
      <div className="icon-link">
        <Link to={data.url}>
          <i className={`bx ${data.classIcon}`} />
          <span className="link_name">{data.title}</span>
        </Link>
        {data.subMenu.length > 0 && (
          <i
            className="bx bxs-chevron-down arrow"
            onClick={() => setToggleColl(!toggleColl)}
          />
        )}
      </div>
      <ul className="sub-menu">
        <li>
          <Link className="link_name" to={data.url}>
            {data.title}
          </Link>
        </li>
        {data.subMenu.length > 0 &&
          data.subMenu.map((itemSub, index) => (
            <li key={index}>
              <Link to={itemSub.url}>{itemSub.title}</Link>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default CollapseItem;

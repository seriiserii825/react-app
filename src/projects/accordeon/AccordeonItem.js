import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const AccordeonItem = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="accordeon__question">
      <header>
        <h4>{title}</h4>
        <button className="accordeon__btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default AccordeonItem;

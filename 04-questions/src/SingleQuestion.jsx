import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
      </header>

      {isActive && <p>{info}</p>}

      <button className="question-btn" onClick={() => toggleQuestion(id)}>
        {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </article>
  );
};
export default SingleQuestion;

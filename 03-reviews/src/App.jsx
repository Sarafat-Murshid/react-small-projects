import { useEffect, useState } from "react";
import data from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const nextPerson = () => {
    if (index < data.length - 1) setIndex(index + 1);
    else setIndex(0);
  };
  const prevPerson = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(data.length - 1);
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);

    if (randomNumber === index)
      randomNumber = Math.floor(Math.random() * data.length);
    setIndex(randomNumber);
  };

  return (
    <>
      <main>
        <article className="review">
          <div className="img-container">
            <img
              src={image}
              className="person-img"
              alt="Picture of the person"
              loading="lazy"
            />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronCircleLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronCircleRight />
            </button>
          </div>
          <button className="btn btn-hipster" onClick={randomPerson}>
            Surprise Me
          </button>
        </article>
      </main>
    </>
  );
};
export default App;

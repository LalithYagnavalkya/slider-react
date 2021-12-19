import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(1);

  const checkNumber = (num) => {
    if (num < 0) {
      return people.length - 1;
    } else if (num > people.length - 1) {
      return 0;
    } else {
      return num;
    }
  };
  useEffect(() => {
    const slider = setInterval(() => [setIndex(checkNumber(index + 1))], 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            //more functionality
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </div>
        <button
          className="prev"
          onClick={() => setIndex(checkNumber(index - 1))}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setIndex(checkNumber(index + 1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

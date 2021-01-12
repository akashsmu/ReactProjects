import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  const Number = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setindex((index) => Number(index + 1));
  };

  const prevPerson = () => {
    setindex((index) => Number(index - 1));
  };

  const RnadomPerson = () => {
    let number = Math.floor(Math.random() * people.length);
    if (number === index) {
      number += 1;
    }

    setindex(number);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info"> {text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={RnadomPerson}>
          Suprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;

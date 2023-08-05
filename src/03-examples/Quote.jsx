import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const [paragraphSize, setParagraphSize] = useState({ width: 0, height: 0 });
  const paragraphRef = useRef();

  useLayoutEffect(() => {
    const { width, height } = paragraphRef.current.getBoundingClientRect();
    setParagraphSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={paragraphRef}>{quote}</p>
        <footer className="blockquote-footer align-self-end">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(paragraphSize)}</code>
    </>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Quote.defaultProps = {
  quote: "",
  author: "",
};

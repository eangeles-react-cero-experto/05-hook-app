import React from "react";
import PropTypes from "prop-types";

export const Child = React.memo(({ num, increment }) => {
  console.log("Child initialized! 😕");

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(num)}>
      {num}
    </button>
  );
});

Child.displayName = "Child";

Child.propTypes = {
  num: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

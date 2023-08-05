import PropTypes from "prop-types";
import React from "react";

export const StrongText = React.memo(({ text }) => {
  console.log("Strong Text init!");

  return (
    <>
      <strong>{text}</strong>
    </>
  );
});

StrongText.displayName = "StrongText";

StrongText.propTypes = {
  text: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import React from "react";

export const StrongText = React.memo(({ text }) => {
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

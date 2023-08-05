import PropTypes from "prop-types";
import React, { useState } from "react";

export const IncrementButton = React.memo(({ onClick }) => {
  const [amount] = useState(5);

  return (
    <>
      <button onClick={() => onClick(amount)} className="btn btn-primary">
        +{amount}
      </button>
    </>
  );
});

IncrementButton.displayName = "IncrementButton";

IncrementButton.defaultProps = {
  onClick: () => null,
};

IncrementButton.propTypes = {
  onClick: PropTypes.func,
};

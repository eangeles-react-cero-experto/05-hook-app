import { useRef } from "react";

export const FocusScreenApp = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log("inputRef: ", inputRef);
  };

  return (
    <>
      <h1>FocusScreenApp</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Your name"
        className="form-control"
      />

      <button onClick={() => onClick()} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};

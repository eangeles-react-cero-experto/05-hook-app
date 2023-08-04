import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      const { x, y } = event;
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("Message component unmounted");
    };
  }, []);

  return (
    <>
      <span>User already exits</span>
      <br />
      <span>{JSON.stringify(coords)}</span>
    </>
  );
};

import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    // console.log(window.scrollY);
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    () => window.removeEventListener("scroll", onScroll); //같은 이름으로 지우기
  }, []);
  return state;
};

export default useScroll;
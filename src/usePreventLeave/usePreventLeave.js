const usePreventLeave = () => {
  const listener = (evnet) => {
    event.preventDefault();
    event.returnValue = ""; // 없으면 작동X
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener); // beforeunload는 window닫히기전에 function실행 
  };
  const disablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};


export default usePreventLeave;
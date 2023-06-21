const useConfirm = (message = "", onConfirm, onCancel) => {
  //message default선언
  if (!onConfirm || typeof onConfirm !== "function") { // 존재하지 않거나 function이 아니면 리턴
    return;
  }
  if (onCancel && typeof onCancel !== "function") { // 존재하는데 function이 아니면 리턴
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default useConfirm;
import { useEffect } from "react";

const Toast = ({ message, closeAlert }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      closeAlert();
    }, 3000);
    return () => clearTimeout(timerId);
  }, [message, closeAlert]);

  return (
    <div id="toast-container">
      <div style={{fontSize: '1.8rem', background: `green`}} class="toast panning">{message}</div>
    </div>
  );
};

export default Toast;

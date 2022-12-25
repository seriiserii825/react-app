import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/Context";

const Toast = ({ message }) => {
  const { closeAlert } = useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(() => {
      closeAlert();
    }, 1000);
    return () => clearTimeout(timerId);
  }, [message, closeAlert]);

  return (
    <div id="toast-container">
      <div
        style={{ fontSize: "1.8rem", background: `green` }}
        className="toast panning"
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;

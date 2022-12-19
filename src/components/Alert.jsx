import { useEffect } from "react";

function Alert(props) {

  const {name = '', closeAlert} = props;

  useEffect(() => {
    const timer = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timer);
  }, [name]) // eslint-disable-line

  return (<div id="toast-container"><div className="toast alert">{name} добавлен в корзину</div></div>)
}

export {Alert};
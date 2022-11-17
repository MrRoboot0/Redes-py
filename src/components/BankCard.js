import React, { useEffect, useState } from "react";

export const BankCard = ({ icon, url }) => {
  const [datos, setData] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => fun(data))
        .catch((err) => console.error(err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fun = (data) => {
    setData(data);
    if (datos !== 0) {
      setState("Ayudaaaa");
    } else {
      setState("Por el momento estamos bien");
    }
  };

  return (
    <div className="card ">
      <div>
        <h3>¿Necesitas Ayuda?</h3>
        {icon}
      </div>

      <div className="bank-card">
        <h4>Ayuda</h4>
        <p>{state}</p>
      </div>
    </div>
  );
};

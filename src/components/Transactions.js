import React, { useEffect, useState } from "react";

export const Transactions = ({ icon, url }) => {
  const [datos, setData] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => fun(res))
        .catch((err) => console.error(err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fun = (res) => {
    setData(res);
    if (res != "0") {
      setState("Ocupada");
    } else {
      setState("Disponible");
    }
  };

  return (
    <div className="card">
      <div>
        <h3>Sala disponibilidad</h3>
        {icon}
      </div>

      <div className="bank-card">
        <h4>Decibelios</h4>
        <p>{state}</p>
      </div>
    </div>
  );
};

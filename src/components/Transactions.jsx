import React, { useEffect, useState } from "react";

export const Transactions = ({ icon, url }) => {
  const [datos, setData] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res), fun();
      })
      .catch((err) => console.error(err));
  }, []);

  const fun = () => {
    if (datos != 0) {
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

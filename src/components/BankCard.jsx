import React, { useEffect, useState } from "react";

export const BankCard = ({ icon, url }) => {
  const [datos, setData] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
		fun();		
      })
      .catch((err) => console.error(err));
  }, []);

  const fun = () => {
    if (datos != 0) {
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

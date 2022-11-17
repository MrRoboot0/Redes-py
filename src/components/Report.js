import React, { useEffect, useState } from "react";

export const Report = ({ icon, url }) => {
  const [datos, setData] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => color(res))
        .catch((err) => console.error(err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const color = (res) => {
    setData(res);
    if (res < 40) {
      setState("#5FC020");
    } else {
      setState("#C02020");
    }
  };

  return (
    <div className="card ">
      <div>
        <h3>Sonido emitido</h3>
        {icon}
      </div>

      <div className="bank-card" style={{ background: state }}>
        <p>{datos}</p>
      </div>
    </div>
  );
};

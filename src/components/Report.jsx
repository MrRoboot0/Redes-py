import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
export const Report = ({ icon, url }) => {
  const [datos, setData] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res), color();
      })
      .catch((err) => console.error(err));
  }, []);

  const color = () => {
    if (datos < 40) {
      setState("#5FC020");
    } else {
      setState("#C02020");
      Swal.fire({
        title: "El ruido es muy alto tienes un strike",
        text: "Modula tu nivel de ruido",
        icon: "warning",

        confirmButtonColor: "#3085d6",
      });
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

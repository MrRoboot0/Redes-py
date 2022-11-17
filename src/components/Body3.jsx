import { BankCard } from "./BankCard";
import { Header } from "./Header";
import { Report } from "./Report";
import { Transactions } from "./Transactions";

export const Body3 = () => {
  return (
    <div className="body">
      <Header />

      <div className="grid">
      <BankCard
          icon={"Sala 2"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/devicept/alerta/lv?token=BBFF-mlnUWGKA5Dsoz4xv8ep8unAbW2k6da"
          }
        />
        <Transactions
          icon={"Sala 2"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/devicept/disponibilidad/lv?token=BBFF-mlnUWGKA5Dsoz4xv8ep8unAbW2k6da"
          }
        />
        <Report
          icon={"Sala 2"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/devicept/sonido/lv?token=BBFF-mlnUWGKA5Dsoz4xv8ep8unAbW2k6da"
          }
        />

        
      </div>
    </div>
  );
};

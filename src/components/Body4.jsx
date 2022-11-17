import { BankCard } from "./BankCard";
import { Header } from "./Header";
import { Report } from "./Report";
import { Transactions } from "./Transactions";

export const Body4 = () => {
  return (
    <div className="body">
      <Header />

      <div className="grid">
      <BankCard
          icon={"Sala 3"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala3/alerta/lv?token=BBFF-ymp7NWxck8P1KcHw5qgNBFLIUosXRy"
          }
        />
        <Transactions
          icon={"Sala 3"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala3/disponibilidad/lv?token=BBFF-ymp7NWxck8P1KcHw5qgNBFLIUosXRy"
          }
        />
        <Report
          icon={"Sala 3"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala3/sonido/lv?token=BBFF-ymp7NWxck8P1KcHw5qgNBFLIUosXRy"
          }
        />
        
      </div>
    </div>
  );
};

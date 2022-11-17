import { BankCard } from "./BankCard";
import { Header } from "./Header";
import { Report } from "./Report";
import { Transactions } from "./Transactions";

export const Body2 = () => {
  return (
    <div className="body">
      <Header />

      <div className="grid">
        <BankCard
          icon={"Sala 1"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala1/alerta/lv?token=BBFF-lODY2yfB3haniOcTNk1QsfrTuitzDK"
          }
        />
        <Transactions
          icon={"Sala 1"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala1/disponibilidad/lv?token=BBFF-lODY2yfB3haniOcTNk1QsfrTuitzDK"
          }
        />
        <Report
          icon={"Sala 1"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala1/sonido/lv?token=BBFF-lODY2yfB3haniOcTNk1QsfrTuitzDK"
          }
        />

        
      </div>
    </div>
  );
};

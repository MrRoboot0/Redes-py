import { BankCard } from "./BankCard";
import { Header } from "./Header";
import { Report } from "./Report";
import { Transactions } from "./Transactions";

export const Body = () => {
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

        <BankCard
          icon={"Sala 2"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala2/alerta/lv?token=BBFF-4LytmHz2zW6YSBVl1uhfELgSK1k4Nl"
          }
        />
        <Transactions
          icon={"Sala 2"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala2/disponibilidad/lv?token=BBFF-4LytmHz2zW6YSBVl1uhfELgSK1k4Nl"
          }
        />
        <Report
          icon={"Sala 2"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala2/sonido/lv?token=BBFF-4LytmHz2zW6YSBVl1uhfELgSK1k4Nl"
          }
        />

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

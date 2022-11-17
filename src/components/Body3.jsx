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

        
      </div>
    </div>
  );
};

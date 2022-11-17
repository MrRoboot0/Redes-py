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
            "http://industrial.api.ubidots.com/api/v1.6/devices/device1/alerta/lv?token=BBFF-s1kQJynQrk1ju4yhNRhznSiYTCizQV"
          }
        />
        <Transactions
          icon={"Sala 1"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/device1/disponibilidad/lv?token=BBFF-s1kQJynQrk1ju4yhNRhznSiYTCizQV"
          }
        />
        <Report
          icon={"Sala 1"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/device1/sonido/lv?token=BBFF-s1kQJynQrk1ju4yhNRhznSiYTCizQV"
          }
        />
        
      </div>
    </div>
  );
};

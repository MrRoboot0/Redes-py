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

        <BankCard
          icon={"Sala 3"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala3/alerta/lv?token=BBFF-hfb5pFOkOjX845xHlObQxtQGLnIHTx"
          }
        />
        <Transactions
          icon={"Sala 3"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala3/disponibilidad/lv?token=BBFF-hfb5pFOkOjX845xHlObQxtQGLnIHTx"
          }
        />
        <Report
          icon={"Sala 3"}
          url={
            "http://industrial.api.ubidots.com/api/v1.6/devices/sala3/sonido/lv?token=BBFF-hfb5pFOkOjX845xHlObQxtQGLnIHTx"
          }
        />
      </div>
    </div>
  );
};

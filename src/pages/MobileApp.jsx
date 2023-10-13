import sideBar from "../assets/images/bg-sidebar-mobile.svg";
import Image from "mui-image";
import StepController from "../components/StepController";
import Step1 from "../components/Step/Step1";
import { Card } from "@mui/material";

import "./MobileApp.scss";
import { Stepper } from "../components/Stepper";
import { useForm } from "../contexts/FormContext";
import Step2 from "../components/Step/Step2";
import Step3 from "../components/Step/Step3";
import Step4 from "../components/Step/Step4";

export default function MobileApp() {
  const RenderStep = () => {
    const { stage } = useForm();

    switch (stage) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
    }
  };

  return (
    <>
      <div id="app">
        <Stepper />

        <Card
          style={{
            backgroundColor: "white",
            width: "calc(100vw - 20px)",

            position: "absolute",
            zIndex: 2,
            top: "20%",
            left: "10px",
          }}
        >
          {RenderStep()}
        </Card>

        <div className="sidebar" style={{ position: "absolute", top: 0 }}>
          <Image src={sideBar} duration={0} width="100vw" height="30vh" />
        </div>

        <StepController isMobile={true} className="controller" />
      </div>
    </>
  );
}

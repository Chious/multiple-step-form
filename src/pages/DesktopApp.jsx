import sideBar from "../assets/images/bg-sidebar-desktop.svg";
import Image from "mui-image";
import StepController from "../components/StepController";
import Step1 from "../components/Step/Step1";
import { Card, Grid, Stack } from "@mui/material";

import "./DesktopApp.scss";
import { DesktopStepper } from "../components/Stepper";
import { useForm } from "../contexts/FormContext";
import Step2 from "../components/Step/Step2";
import Step3 from "../components/Step/Step3";
import Step4 from "../components/Step/Step4";

export default function DesktopApp() {
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
      <div
        id="app"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "80vw", height: "78vh", borderRadius: 4 }}>
          <Grid container direction="row">
            <Grid item sx={4} sm={4} md={4}>
              <div className="sidebar" style={{ height: "100%" }}>
                <DesktopStepper />
                <Image src={sideBar} duration={0} height="100%" fit="cover" />
              </div>
            </Grid>

            <Grid item sx={8} sm={8} md={8}>
              <Stack
                style={{
                  backgroundColor: "white",
                  width: "100%",
                }}
              >
                {RenderStep()}

                <StepController
                  isMobile={false}
                  className="controller-desktop"
                />
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
}

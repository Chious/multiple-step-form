import { Button, Grid, Stack, Switch, Typography } from "@mui/material";

import Image from "mui-image";
import { useForm, planList } from "../../contexts/FormContext";
import { useEffect, useState } from "react";

export default function Step2() {
  return (
    <div className="form-container">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div
        className="select"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 30,
          gap: "10px",
        }}
      >
        <RenderBtn />
      </div>

      <RenderSwitch />
    </div>
  );
}

function RenderBtn() {
  const { cartInfo, setCartInfo } = useForm();

  const handleRadioChange = (value) => {
    setCartInfo({ ...cartInfo, plan: value });
  };

  const yearly = cartInfo.yearly;

  return (
    <>
      {Object.keys(planList).map((planKey) => {
        const plan = planList[planKey];

        const planDesc =
          yearly === "month" ? `${plan.month}/mo` : `${plan.year}/yr`;

        const planFreeStyle = yearly === "month" && "none";

        return (
          <>
            <Button
              sx={{
                boxShadow: "none",
                ":hover": {
                  background: "white",
                },
                background:
                  cartInfo.plan === plan.plan_id ? "#D6D9E6" : "white",
                borderColor:
                  cartInfo.plan === plan.plan_id ? "#483EFF" : "#F8F9FF",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: 85,
              }}
              key={plan.plan_id}
              variant={
                cartInfo.plan === plan.plan_id ? "contained" : "outlined"
              }
              onClick={() => handleRadioChange(plan.plan_id)}
            >
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <Image
                    src={plan.src}
                    duration={0}
                    height="60px"
                    fit="scale-down"
                  />
                </Grid>

                <Grid item>
                  <div
                    className="btn-description"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p style={{ color: "#022959" }}>{plan.plan}</p>
                    <p style={{ color: "#9699AA" }}>{planDesc}</p>
                    <p style={{ display: planFreeStyle, color: "#022959" }}>
                      2 months free
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Button>
          </>
        );
      })}
    </>
  );
}

function RenderSwitch() {
  const [isYearly, setIsYearly] = useState(false);
  const { setCartInfo, cartInfo } = useForm();

  useEffect(() => {
    if (isYearly) {
      setCartInfo({ ...cartInfo, yearly: "year" });
    }

    if (isYearly === false) {
      setCartInfo({ ...cartInfo, yearly: "month" });
    }
  }, [isYearly]);

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ background: "hsl(229, 24%, 87%)" }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Typography style={{ color: "#9699AA" }}>Monthly</Typography>
        <Switch
          checked={isYearly}
          onChange={(e) => {
            setIsYearly(e.target.checked);
          }}
          inputProps={{ "aria-label": "toggle yearly" }}
        />
        <Typography style={{ color: "#9699AA" }}>Yearly</Typography>
      </Stack>
    </>
  );
}

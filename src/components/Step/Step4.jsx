import { Card, Divider, Stack } from "@mui/material";
import "./Step4.scss";
import { useForm, addonList, planList } from "../../contexts/FormContext";

export default function Step4() {
  return (
    <div className="form-container">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirmings.</p>

      <Card className="result" sx={{ boxShadow: 0 }}>
        <Stack spacing={2} sx={{ padding: 3, background: "#D6D9E6" }}>
          {RenderPlan()}
          <Divider />
          {RenderAddon()}
        </Stack>
      </Card>

      {RenderTotal()}
    </div>
  );
}

const RenderPlan = () => {
  const { cartInfo, setStage } = useForm();
  const yearly = cartInfo.yearly;

  const handleChange = () => {
    setStage(2);
  };

  const planDesc =
    yearly === "month"
      ? `${planList[cartInfo.plan]["plan"]}(Monthly)`
      : `${planList[cartInfo.plan]["plan"]}(Yearly)`;
  const feeDesc =
    yearly === "month"
      ? `$${planList[cartInfo.plan]["month"]}/mo`
      : `$${planList[cartInfo.plan]["year"]}/yr`;

  return (
    <div className="plan-group">
      <div className="plan-desc">
        <p className="plan-title">{planDesc}</p>
        <p className="plan-change" onClick={handleChange}>
          Change
        </p>
      </div>
      <p className="plan-fee">{feeDesc}</p>
    </div>
  );
};

const RenderAddon = () => {
  const { cartInfo } = useForm();
  const addons = cartInfo.addon;

  const selectedAddon = [];
  for (const key in addons) {
    if (addons[key] === true) {
      selectedAddon.push(addonList[key]);
    }
  }

  const addonComponent = selectedAddon.map((item, index) => {
    const yearly = cartInfo.yearly;
    const addonDesc =
      yearly === "month" ? `+${item.month}/mo` : `+${item.year}/yr`;

    return (
      <>
        <div
          className="add-on"
          style={{ display: "flex", justifyContent: "space-between" }}
          key={index}
        >
          <p className="addon-title">{item.plan}</p>
          <p className="addon-desc">{addonDesc}</p>
        </div>
      </>
    );
  });

  return addonComponent;
};

const RenderTotal = () => {
  const { cartInfo } = useForm();
  const yearly = cartInfo.yearly;

  const totalTitle =
    yearly === "month" ? `Total(per month)` : `Total(per year)`;

  const planFee =
    yearly === "month"
      ? planList[cartInfo.plan]["month"]
      : planList[cartInfo.plan]["year"];

  const addons = cartInfo.addon;
  let addonFee = 0;
  for (const key in addons) {
    if (addons[key] === true) {
      const fee =
        yearly === "month" ? addonList[key]["month"] : addonList[key]["year"];
      addonFee += fee;
    }
  }

  const totalFee = planFee + addonFee;
  const totalFeeTitle =
    yearly === "month" ? `$${totalFee}/mo` : `$${totalFee}/yr`;

  return (
    <div
      className="total"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <p>{totalTitle}</p>
      <p>{totalFeeTitle}</p>
    </div>
  );
};

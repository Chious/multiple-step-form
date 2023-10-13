import { useEffect, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { useForm, addonList } from "../../contexts/FormContext";

export default function Step3() {
  return (
    <div className="form-container">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enchance your gaming experience.</p>
      {BtuuonCollection()}
    </div>
  );
}

function MyButton({ fee, desc, plan, plan_id }) {
  const { cartInfo, setCartInfo } = useForm();

  const checked = cartInfo.addon[plan_id];
  const handleCheckboxChange = () => {
    if (!checked) {
      setCartInfo({
        ...cartInfo,
        addon: { ...cartInfo.addon, [plan_id]: true },
      });
    } else {
      setCartInfo({
        ...cartInfo,
        addon: { ...cartInfo.addon, [plan_id]: false },
      });
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleCheckboxChange}
      startIcon={
        <Checkbox
          checked={checked}
          sx={{ background: checked ? "#D6D9E6" : "white" }}
        />
      }
      sx={{
        boxShadow: 0,
        background: checked ? "#D6D9E6" : "white",
        borderColor: checked ? "#483EFF" : "#F8F9FF",
        "&:hover": {
          backgroundColor: "inherit", // Remove hover background color
        },
      }}
    >
      <div
        className="btn-container"
        style={{ display: "flex", gap: 20, alignItems: "center" }}
      >
        <div className="add-description" style={{ width: 260 }}>
          <p style={{ color: "black", textAlign: "start" }}>{plan}</p>
          <p style={{ color: "gray", textAlign: "start" }}>{desc}</p>
        </div>

        <p style={{ color: "purple" }}>{fee}</p>
      </div>
    </Button>
  );
}

const BtuuonCollection = () => {
  const { cartInfo } = useForm();
  const yearly = cartInfo.yearly;

  const btns = Object.keys(addonList).map((planKey) => {
    const plans = addonList[planKey];
    const { plan, plan_id, desc, year, month } = plans;
    const fee = yearly === "month" ? `+$${month}/mo` : `+$${year}/yr`;

    return (
      <MyButton
        fee={fee}
        plan={plan}
        desc={desc}
        key={planKey}
        plan_id={plan_id}
      />
    );
  });

  return btns;
};

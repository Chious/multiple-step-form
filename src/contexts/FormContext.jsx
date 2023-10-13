import { createContext, useContext, useState } from "react";

import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [stage, setStage] = useState(1);
  const [stageVaild, setStageVaild] = useState(false);
  const [cartInfo, setCartInfo] = useState({
    info: {
      name: "",
      email: null,
      phone: "",
    },
    plan: 1,
    yearly: "month",
    addon: {
      1: false,
      2: false,
      3: false,
    },
  });

  return (
    <FormContext.Provider
      value={{
        stage,
        setStage,
        stageVaild,
        setStageVaild,
        cartInfo,
        setCartInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const planList = {
  1: {
    plan_id: 1,
    plan: "Arcade",
    src: arcade,
    month: 9,
    year: 90,
  },
  2: {
    plan_id: 2,
    plan: "Advanced",
    src: advanced,
    month: 12,
    year: 120,
  },
  3: {
    plan_id: 3,
    plan: "Pro",
    src: pro,
    month: 15,
    year: 150,
  },
};

export const addonList = {
  1: {
    plan_id: 1,
    plan: "Online Service",
    desc: "Access to multiplayer games",
    year: 10,
    month: 1,
  },
  2: {
    plan_id: 2,
    plan: "Large Storage",
    desc: "Extra 1TB of cloud save",
    year: 20,
    month: 2,
  },
  3: {
    plan_id: 3,
    plan: "Customizable profile",
    desc: "Custom theme on your profolie",
    year: 20,
    month: 2,
  },
};

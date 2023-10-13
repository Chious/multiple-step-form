import { useForm } from "../contexts/FormContext";

export const Stepper = () => {
  const { stage } = useForm();

  const setStyle = (targetStage) => {
    const Trigger = {
      background: "#BEE2FD",
      textColor: "none",
      borderColor: "#BEE2FD",
    };

    if (stage >= targetStage) {
      return Trigger;
    }
  };

  return (
    <div className="stepper">
      <div className="step" style={setStyle(1)}>
        1
      </div>
      <div className="step" style={setStyle(2)}>
        2
      </div>
      <div className="step" style={setStyle(3)}>
        3
      </div>
      <div className="step" style={setStyle(4)}>
        4
      </div>
    </div>
  );
};

export const DesktopStepper = ({ className }) => {
  const { stage } = useForm();

  const setStyle = (targetStage) => {
    const notTrigger = {
      background: "none",
      color: "white",
      borderColor: "white",
    };

    const Trigger = {
      background: "#BEE2FD",
      color: "none",
      borderColor: "#BEE2FD",
    };

    if (stage >= targetStage) {
      return Trigger;
    } else {
      return notTrigger;
    }
  };

  return (
    <div className="stepper-desktop">
      <div className="step-group">
        <div className="step" style={setStyle(1)}>
          1
        </div>

        <div className="desc">
          <p className="desc-step">STEP1</p>
          <p className="desc-title">YOUR INFO</p>
        </div>
      </div>

      <div className="step-group">
        <div className="step" style={setStyle(2)}>
          2
        </div>

        <div className="desc">
          <p className="desc-step">STEP1</p>
          <p className="desc-title">YOUR INFO</p>
        </div>
      </div>
      <div className="step-group">
        <div className="step" style={setStyle(3)}>
          3
        </div>

        <div className="desc">
          <p className="desc-step">STEP3</p>
          <p className="desc-title">ADD-ONS</p>
        </div>
      </div>
      <div className="step-group">
        <div className="step" style={setStyle(4)}>
          4
        </div>

        <div className="desc">
          <p className="desc-step">STEP4</p>
          <p className="desc-title">SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

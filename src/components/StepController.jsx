import { useForm } from "../contexts/FormContext";
import "./StepController.scss";

export default function StepController({ isMobile, className }) {
  const { stage, setStage, stageVaild } = useForm();

  const MobileStyle = isMobile && { position: "absolute", bottom: "0px" };

  const handleNext = () => {
    if (stage < 4 && stageVaild) {
      setStage(stage + 1);
    }
  };

  const handlePrev = () => {
    if (stage > 1 && stageVaild) {
      setStage(stage - 1);
    }
  };

  const setBtnStyle = (target) => {
    if (target === "prev") {
      const notTrigger = { visibility: "hidden" };

      const Trigger = {
        background: "white",
        color: "#022959",
      };

      if (stage === 1) {
        return notTrigger;
      } else {
        return Trigger;
      }
    }

    if (target === "next") {
      const notTrigger = {
        background: "#022959",
        color: "white",
      };
      const Trigger = {
        background: "#928CFF",
        color: "white",
      };

      if (stage == 4) {
        return Trigger;
      } else {
        return notTrigger;
      }
    }
  };

  return (
    <div className={className} style={{ MobileStyle }}>
      <div className="btn-container">
        <button onClick={handlePrev} style={setBtnStyle("prev")}>
          Go Back
        </button>
        <button onClick={handleNext} style={setBtnStyle("next")}>
          {stage !== 4 ? `Next Step` : `Confirm`}
        </button>
      </div>
    </div>
  );
}

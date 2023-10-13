import { useEffect } from "react";
import { useForm } from "../../contexts/FormContext";

export default function Step1() {
  const { cartInfo, setCartInfo, setStageVaild } = useForm();

  const handleNameChange = (e) => {
    setCartInfo({
      ...cartInfo,
      info: { ...cartInfo.info, name: e.target.value },
    });
  };
  const handleEmailChange = (e) => {
    setCartInfo({
      ...cartInfo,
      info: { ...cartInfo.info, email: e.target.value },
    });
  };
  const handlePhoneChange = (e) => {
    setCartInfo({
      ...cartInfo,
      info: { ...cartInfo.info, phone: e.target.value },
    });
  };

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const isValid = {
    name: cartInfo.info.name === "" ? false : true,
    email: emailPattern.test(cartInfo.info.email),
    phone: cartInfo.info.phone === "" ? false : true,
  };

  useEffect(() => {
    const { name, email, phone } = isValid;
    if (name && email && phone) {
      setStageVaild(true);
    } else {
      setStageVaild(false);
    }
  }, [isValid]);

  return (
    <div className="form-container">
      <h1>Personal info</h1>
      <p>Please provide your name, email, address, and phone number</p>

      <div className="input-group">
        <label htmlFor="fname">Name</label>
        <input
          type="text"
          id="fname"
          placeholder="e.g. Stephen King"
          value={cartInfo.info.name}
          onChange={handleNameChange}
        />
        {!isValid.name && (
          <p style={{ color: "#EE374A", textAlign: "right" }}>
            Name cannot be empty.
          </p>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="femail">Email</label>
        <input
          type="text"
          id="femail"
          placeholder="e.g. stephenking@lorem.com"
          value={cartInfo.info.email}
          onChange={handleEmailChange}
        />
        {!isValid.email && (
          <p style={{ color: "#EE374A", textAlign: "right" }}>
            Email cannot be empty.
          </p>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="fname">Phone Number</label>
        <input
          type="text"
          id="fname"
          placeholder="e.g. +1 234 567 890"
          value={cartInfo.info.phone}
          onChange={handlePhoneChange}
        />
        {!isValid.phone && (
          <p style={{ color: "#EE374A", textAlign: "right" }}>
            Phone cannot be empty.
          </p>
        )}
      </div>
    </div>
  );
}

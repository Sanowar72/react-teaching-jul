import React, { useEffect, useRef, useState } from "react";

const OTP_LENGTH = 5;

const OtpInputBox = () => {
  const [otpValue, setOtpValue] = useState(new Array(OTP_LENGTH).fill(""));
  useEffect(() => {
    refArray.current[0]?.focus();
  }, []);
  const refArray = useRef([]);

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;

    const newArray = [...otpValue];
    newArray[index] = value.slice(-1);
    setOtpValue(newArray);

    if (value.trim() && index < OTP_LENGTH - 1) {
      refArray.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      refArray.current[index - 1]?.focus();
      return;
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      refArray.current[index + 1]?.focus();
      return;
    }

    if (e.key === "Backspace" && !e.target.value) {
      refArray.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      <div>otp input box</div>
      {otpValue.map((otp, index) => {
        return (
          <input
            ref={(value) => (refArray.current[index] = value)}
            className="opt-box"
            value={otp}
            key={index}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInputBox;

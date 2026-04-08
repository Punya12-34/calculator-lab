import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleEqual = () => {
    try {
      // eval handles normal + scientific notation like 5E3
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "E", "C", "+",
    "="
  ];

  return (
    <div style={{ maxWidth: "200px", margin: "50px auto" }}>
      <input
        value={display}
        readOnly
        data-cy="display"
        style={{ width: "100%", marginBottom: "10px", fontSize: "20px" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") handleClear();
              else if (btn === "=") handleEqual();
              else handleClick(btn);
            }}
            data-cy={`btn-${btn}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
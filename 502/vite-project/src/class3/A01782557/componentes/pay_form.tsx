import { useReducer, useState } from "react";

interface State {
  name: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const initialState: State = {
  name: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

interface Action {
  type: string;
  field: string;
  value: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const PaymentForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const validateForm = () => {
    const cardRegex = /^\d{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3,4}$/;

    if (!state.name.trim()) return "Cardholder name is required.";
    if (!cardRegex.test(state.cardNumber)) return "Card number must be 16 digits.";
    if (!expiryRegex.test(state.expiry)) return "Expiry must be in MM/YY format.";
    if (!cvvRegex.test(state.cvv)) return "CVV must be 3 or 4 digits.";

    return "";
  };

  const handleSubmit = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    console.log("Payment Submitted:", state);
    alert("✅ Payment successful!");
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        color: "#000",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2.5rem 3rem",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(195, 181, 181, 0.1)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Payment Form</h2>
        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

        <input
          type="text"
          placeholder="Cardholder Name"
          value={state.name}
          onChange={(e) => handleChange("name", e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Card Number (16 digits)"
          maxLength={16}
          value={state.cardNumber}
          onChange={(e) => handleChange("cardNumber", e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Expiry (MM/YY)"
          value={state.expiry}
          onChange={(e) => handleChange("expiry", e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="CVV"
          maxLength={4}
          value={state.cvv}
          onChange={(e) => handleChange("cvv", e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "0.9rem",
            fontSize: "1rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "1rem",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007BFF")
          }
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box" as const,
};

export default PaymentForm;

import React, { useState } from "react";
import TravelForm from "../components/TravelForm";
import ReactDOM from "react-dom/client";

// Interface for form data
interface FormState {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

// Interface for the TravelFormPage props
interface TravelFormPageProps {
  onSubmit?: (formData: FormState) => void;
}

// Notification component
interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  const notificationStyle = {
    padding: "10px 15px",
    borderRadius: "4px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: type === "success" ? "#d4edda" : "#f8d7da",
    color: type === "success" ? "#155724" : "#721c24",
    border: `1px solid ${type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: type === "success" ? "#155724" : "#721c24",
  };

  return (
    <div style={notificationStyle} data-testid={`notification-${type}`}>
      <span>{message}</span>
      <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
        ×
      </button>
    </div>
  );
};

// TravelFormPage component
const TravelFormPage: React.FC<TravelFormPageProps> = ({ onSubmit }) => {
  // State for notifications
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  // Wrapper function for form submission
  const handleFormSubmit = (formData: FormState) => {
    // Show success notification
    setNotification({
      show: true,
      message: "Travel request submitted successfully!",
      type: "success",
    });

    // Call the provided onSubmit function if it exists
    if (onSubmit) {
      onSubmit(formData);
    }

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // Handle form validation errors
  const handleValidationError = () => {
    setNotification({
      show: true,
      message: "Please fix the errors in the form before submitting.",
      type: "error",
    });

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // Close notification manually
  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  // Container style
  const containerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  // Header style
  const headerStyle = {
    textAlign: "center" as const,
    marginBottom: "20px",
    color: "#333",
  };

  return (
    <div style={containerStyle} data-testid="travel-form-page">
      <div style={headerStyle}>
        <h1>Travel Request Form</h1>
        <p>Please fill out the form below to submit a travel request.</p>
      </div>

      {/* Notification component */}
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}

      {/* Travel Form component */}
      <TravelForm
        title="New Travel Request"
        description=""
        onSubmit={(formData) => {
          // We need to check if the form was actually submitted successfully
          // If any required field is empty, we'll show an error notification
          const { destination, startDate, endDate, purpose } = formData;

          if (
            !destination ||
            !startDate ||
            !endDate ||
            !purpose ||
            new Date(endDate) < new Date(startDate)
          ) {
            handleValidationError();
          } else {
            handleFormSubmit(formData);
          }
        }}
      />
    </div>
  );
};

export default TravelFormPage;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TravelFormPage />
  </React.StrictMode>
);

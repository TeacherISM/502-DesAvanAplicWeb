import React from "react";
import Button from "../components/Button";
import TravelForm from "../components/TravelForm";

const JestPage: React.FC = () => {
  return (
    <div>
      <h1>Jest Testing</h1>
      <p>This page only shows the componets as an example</p>
      <p>
        To run the tests, use the command: <code>npm run test</code>
      </p>
      <Button label="Click Me!" onClick={() => alert("Button clicked!")} />
      <TravelForm />
    </div>
  );
};

export default JestPage;

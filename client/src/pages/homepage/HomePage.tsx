import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          console.log("Shadcn UI Working");
          navigate("/signup"); // Navigates to the login route
        }}
      >
        Click Me to Sign up!
      </Button>
    </div>
  );
};

export default HomePage;

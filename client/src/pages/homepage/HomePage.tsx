import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate, Outlet } from "react-router-dom";
import { doSignOut } from "@/firebase/auth";
import { useAuth } from "@/contexts/authContext";

const HomePage = () => {
  let navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleSignOut = () => {
    doSignOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      {userLoggedIn ? (
        <Button onClick={handleSignOut}> Sign Out</Button>
      ) : (
        <>
          <Button
            onClick={() => {
              console.log("Shadcn UI Working");
              navigate("/signup"); // Navigates to the login route
            }}
          >
            Click Me to Sign up!
          </Button>
          <Button
            onClick={() => {
              console.log("Shadcn UI Working");
              navigate("/login"); // Navigates to the login route
            }}
          >
            Click Me to Login!
          </Button>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default HomePage;

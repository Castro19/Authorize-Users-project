import React from "react";
import { useAuth } from "@/contexts/authContext";
import { User } from "firebase/auth"; // This import assumes you're using Firebase. Adjust if using a different auth system.

// Define the structure of the Auth Context if not already defined
interface AuthContextType {
  currentUser: User | null;
}

// Update the useAuth hook return type if necessary
// function useAuth(): AuthContextType {
//   // Implementation or import here
//   // This is just a placeholder to show where the type would be used.
// }

const Home: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="text-2xl font-bold pt-14">
      Hello {currentUser?.displayName || currentUser?.email}, you are now logged
      in.
    </div>
  );
};

export default Home;

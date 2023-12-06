import React, { createContext, useState } from "react";

export const UserContext = createContext();

// Component UseContext Provider that wraps other components with context
export const UserContextProvider = ({ children }) => {
  // States that will be shared across context
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isProducer, setIsProducer] = useState(false);

  // Returns the context provider, wrapping child components with states
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userEmail,
        setUserEmail,
        isProducer,
        setIsProducer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

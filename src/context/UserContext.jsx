import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isProducer, setIsProducer] = useState(false);

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

import React, { createContext, useState } from "react";

export const UserContext = createContext();

// Componente UserContextProvider que envolve outros componentes com o contexto
export const UserContextProvider = ({ children }) => {
   // Estados que serão compartilhados através do contexto
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isProducer, setIsProducer] = useState(false);

  // Retorna o provedor de contexto, envolvendo os componentes filhos com os estados
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

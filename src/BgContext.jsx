// src/RefContext.js
import React, { createContext, useRef } from "react";

const RefContext = createContext(null);

const RefProvider = ({ children }) => {
  const sharedRef = useRef(null);

  return (
    <RefContext.Provider value={sharedRef}>{children}</RefContext.Provider>
  );
};

export { RefContext, RefProvider };

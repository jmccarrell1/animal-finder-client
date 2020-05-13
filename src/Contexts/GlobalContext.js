import React, { Component, useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = props => {
  return (
    <GlobalContext.Provider value={"Heremy"}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

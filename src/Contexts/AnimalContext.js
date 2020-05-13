import React, { useState, useReducer } from "react";

export const AnimalContext = React.createContext(null);

export const AnimalContextProvider = props => {
  const defaultValue = {
    hasResults: false,
    animals: [],
    pagination: {}
  };

  const [state, dispatch] = useReducer(reducer, defaultValue);

  const contextValue = {
    state,
    dispatch
  };

  return (
    <AnimalContext.Provider value={contextValue}>
      {props.children}
    </AnimalContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update_search":
      return {
        ...state,
        animals: action.payload.animals,
        pagination: action.payload.pagination,
        hasResults: true
      };
    case "update_animal":
      return {
        ...state,
        animals: [
          {
            id: "444",
            organization_id: "444"
          }
        ]
      };
    // case "update_pagination":
    //   return {
    //     ...state,
    //     pagination: {
    //       count_per_page: 2,
    //       total_count: "",
    //       current_page: "",
    //       total_pages: "",
    //       _links: {
    //         next: {
    //           href: ""
    //         }
    //       }
    //     }
    //   };
    default:
      return state;
  }
};

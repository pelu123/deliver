import { createContext, useContext, useReducer } from "react";

const initialState = {
    categoryFilter: ""
}

type ACTION = 
    | { type: "SET_CATEGORY_FILTER", payload: string }
    | { type: "SET_CATEGORY_FILTER", payload: string }

function filterReducer(state: typeof initialState, action: ACTION) {
    switch (action.type) {
        case "SET_CATEGORY_FILTER":
            return { ...state, categoryFilter: action.payload }
        
        default:
            return state
    }
}

const FilterContext = createContext<{
    state: typeof initialState,
    dispatch: React.Dispatch<ACTION>
} | null>(null) 

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({  children}: {  children: React.ReactNode;}) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

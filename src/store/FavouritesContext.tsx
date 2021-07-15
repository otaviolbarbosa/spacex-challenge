import React,{ createContext, useContext, useReducer } from "react";
import _ from 'lodash';

type Action = {
  type: 'toggleImage',
  payload: {id: string, page: number }
}

type Dispatch = (action: Action) => void

type State = {
  favourites: {}
}

type FavouritesProviderProps = {
  children: React.ReactNode
}

const FavouritesContext = createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

const favouritesReducer = (
  { favourites }: State,
  {type, payload: { id, page }}: Action
) => {
  switch (type) {
    case 'toggleImage': {
      if(Object.keys(favourites).includes(id)) {
        let currCtx = _.get(favourites, [id]);
  
        if(_.includes(currCtx, page))
          currCtx = currCtx.filter((idx: number) => page !== idx);
        else
          currCtx.push(page);
  
        return { favourites: { ...favourites, [id]: currCtx } };
      } 
      
      return { favourites: { ...favourites, [id]: [page] }};
      
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

const FavouritesProvider = ({ children }: FavouritesProviderProps) => {
  const [state, dispatch] = useReducer(favouritesReducer, { favourites: {}})

  const value = { state, dispatch };
  return (
      <FavouritesContext.Provider value={value}>
          {children}
      </FavouritesContext.Provider>
  );
}

function useFavourites() {
  const context = useContext(FavouritesContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export { FavouritesProvider, useFavourites }

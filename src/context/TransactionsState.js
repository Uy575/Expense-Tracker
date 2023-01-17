import React , {createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
// Initial state 
const initialState = {
    transactions : []
}

// Create context 
export const GlobalTransaction = createContext(initialState);

// creating provider 
export const GlobalProvider = ({children})=>{
   const [state,dispatch] = useReducer(AppReducer,initialState);

   function DeleteTransaction(id){

       dispatch({
           type:'Delete',
           payload: id
        });
    }

    function AddTransaction(transaction){

        dispatch({
            type:'AddExpense',
            payload: transaction
         });
     }

  return(

      <GlobalTransaction.Provider value ={{
        transactions:state.transactions,
        DeleteTransaction,
        AddTransaction
      }}>

       {children}
  </GlobalTransaction.Provider>
      ) 
}
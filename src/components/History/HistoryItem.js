import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Item = ({data , dlt}) => {
  const stateTransaction = useSelector(state => state.dummyTransactions);
  const [st, setST] = useState(stateTransaction);
  useEffect(() => {
    var TotalExpense=0;
    var TotalIncome =0;

/*    return () => {
  */
      //Implement sum of income / revenue
      TotalIncome = stateTransaction.reduce((prev, current) => {
        if (parseInt(current.amount) > 0) 
          prev += parseInt(current.amount);
        
          return prev;
      }, 0);
      
      //Implement sum of expenses
      TotalExpense = stateTransaction.reduce((prev, current) => {
        if (parseInt(current.amount) < 0) 
          prev += parseInt(current.amount);
        
          return prev;
      }, 0);

/*
      stateTransaction.map((a) => {
          if(parseInt(a.amount) >0){
            TotalIncome += parseInt(a.amount);
          }
          else
          {TotalExpense += -1*parseInt(a.amount);}
        });
        */

        //console.log(TotalIncome);
        //console.log(TotalExpense);
        //console.log(TotalIncome + TotalExpense);
        setST(stateTransaction);
        disp({type: "INCOME", payload: TotalIncome });
        disp({type: "EXPENSE", payload: TotalExpense });
        disp({type: "BALANCE", payload: TotalIncome + TotalExpense });
     
      
      //}
  }, [stateTransaction])
    
    const disp = useDispatch();    
  
    console.log(stateTransaction);
    const deleteTransaction = (P) =>{
      console.log(P);
      const arr = stateTransaction.filter(
        (a, index) => {
          return index !== P
        })
        
      disp({type: "REMOVE", payload:arr });

     

    };

    return (
      
        <>
            {
              //stateTransaction.map((p) =>)
              stateTransaction.map(
                    (val , index) => {
                        return (
                          <li className={val.amount > 0 ? "plus" : "minus"} key = {index} >
                            {val.text} <span>Rs. {val.amount}</span>
                            <button
                              className="delete-btn"
                              onClick={() => deleteTransaction(index)}
                            >
                              X
                            </button>
                          </li>
                        );
                    }
                )
            }
            </>
     );
}
 
export default Item;
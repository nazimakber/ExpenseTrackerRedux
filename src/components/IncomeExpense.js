import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const Income = () => {
  
  const transactionArray = useSelector(state =>  state.dummyTransactions);
  const [inc, setInc] = useState(0);
  const income = useRef();
  const expense = useRef();

  useEffect(() => {
    return () => {
      var TotalExpense=0;
      var TotalIncome =0;
      setInc(0);
      TotalIncome = transactionArray.reduce((prev, current) => {
        if (parseInt(current.amount) > 0) 
          prev += parseInt(current.amount);
        
          return prev;
      }, 0);

      TotalExpense = transactionArray.reduce((prev, current) => {
        if (parseInt(current.amount) < 0) 
          prev += parseInt(current.amount);
        
          return prev;
      }, 0);


        //console.log(TotalIncome);
        //console.log(TotalExpense);
        //console.log(TotalIncome + TotalExpense);

      //disp({type: "BALANCE", payload: TotalIncome - TotalExpense });
      //const ti = useSelector(state =>  state.TotalIncome);
          setInc(TotalIncome);
          income.current.value = TotalIncome;
          expense.current.value = TotalExpense;
    }
  },);



  return (
      <>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <input id="money-plus" className="money plus" type="text" readOnly="true" ref={income}></input>
            <p id="money-plus" className="money plus">{inc}</p>
          </div>
          <div>
            <h4>Expense</h4>
            {/* <label ref={expense}></label> */}
            <input id="money-minus" className="money minus" type="text" readOnly="true" ref={expense}></input>
          </div>
        </div>
      </>
    );
}
 
export default Income;
import { useSelector } from "react-redux";

const Balance = ({balance}) => {

    const totalBalance = useSelector(abc => abc.balance);

    return (
        <>
            <h4>Your Balacnce</h4>
            {/* <h1 id= "balance">Rs. {balance}  </h1> */}
            <h1 id= "balance">Rs. {totalBalance}  </h1>
            </>

     );
}
 
export default Balance;
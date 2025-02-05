import axios from "axios";

const Payment = ({ email }) => {
  const handlePayment = async () => {
    try {
      const res = await axios.post("https://yogaaapp-1.onrender.com/api/users/payment", { email });
      alert(res.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
//http://localhost:5000/api/users/payment
//https://yogaaapp-1.onrender.com
  return (
    <div>
      <h2>Proceed to Payment</h2>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
};

export default Payment;

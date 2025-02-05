import { useState } from "react";
import Form from "./components/Form";
import Payment from "./components/Payment";
import "./index.css";

function App() {
  const [paymentEmail, setPaymentEmail] = useState(null);

  return (
    <div>
      {!paymentEmail ? <Form setPaymentEmail={setPaymentEmail} /> : <Payment email={paymentEmail} />}
    </div>
    // <div>
    //   <Payment/>
    // </div>
  );
}

export default App;

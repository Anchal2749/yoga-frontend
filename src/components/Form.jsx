import { useState } from "react";
import axios from "axios";

const Form = ({ setPaymentEmail }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  
    batch: "6-7AM",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Age validation
    if (formData.age < 18 || formData.age > 65) {
      setError("Age must be between 18 and 65.");
      return;
    } else {
      setError(""); // Clear error if age is valid
    }

    try {
      const res = await axios.post("https://yogaaapp-1.onrender.com/api/users/register", formData);
      //alert(res.data.message);
      setPaymentEmail(formData.email);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  //http://localhost:5000/api/users/register
 //https://yogaaapp-1.onrender.com
  return (
    <div className="container">
      <h2>Yoga Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
        />
        
        <input type="number" placeholder="Age" required 
          onChange={(e) => setFormData({ ...formData, age: e.target.value })} 
        />
        
        {error && <p className="error">{error}</p>} {/* Show error message if age is invalid */}
        
        <input type="email" placeholder="Email" required 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        
        <input type="text" placeholder="Phone" required 
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
        />
   <select required value={formData.batch} onChange={(e) => setFormData({ ...formData, batch: e.target.value })}>
          <option value="" disabled>Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;



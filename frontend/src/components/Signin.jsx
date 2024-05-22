import { useState } from "react";
import axios from "axios";
import { Button } from "./reuse/Button";
import { InputField } from "./reuse/InputField";
import "./css/register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

  axios.defaults.withCredentials = true;
  const signin = async () => {
    try {
       await axios.post(
        "https://employee-dashboard-backend-iota.vercel.app/api/v1/admin/login",
        {email, password}
      );
      navigate("/dashboard")
      // console.log(response);
    } catch (error) {
      const errorMessage = error.response.data.message
      setError(errorMessage)
    }
  };
  // console.log(error)
  return (
    <>
      <div className="mainContainer">
        <div className="signup">
          <h1 className="register">Sign in</h1>
          {error && <p style={{color :"red", padding: "0px", margin: "0px"}}>{error}</p>}
          <div className="inputField">
            <InputField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              type={"text"}
              label={"Email"}
            />
            <InputField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              label={"Password"}
              type={"password"}
            />
        
          </div>
          <div className="buttonBox">
            <Button onClick={signin} label={"Sign in"} />
            <p className="label">Don't have an account? <Link to={"/signup"} className="sign"> Sign up</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;

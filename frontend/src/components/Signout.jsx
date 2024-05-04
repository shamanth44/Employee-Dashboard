import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "./reuse/Button";

function Signout() {
    const navigate = useNavigate();
  const signout = async () => {
    axios.post("http://localhost:8000/api/v1/admin/logout");
    navigate("/signin")
  };
  return (
    <>
      <Button onClick={signout} label={"Sign out"} />
    </>
  );
}

export default Signout;
import { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("protected/")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Access Denied!"));
  }, []);

  return <h1>{message}</h1>;
};

export default Dashboard;

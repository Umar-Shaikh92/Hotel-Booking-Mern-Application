import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
 console.log(user);
 

  return (
    <div className='login'>
        <div className="loginContainer">
        <h1>Welcome 😉</h1>
            <input type="text" className='loginInput' id='username' placeholder='Username' onChange={handleChange} />
            <input type="password" className='loginInput' id='password' placeholder='********' onChange={handleChange} />
        <button className='login-Btn' onClick={handleClick}>Login</button>
        {error && <span>{error.message}</span>}
        </div>
    </div>
  );
};

export default Login;

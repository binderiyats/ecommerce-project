import "../../styles/components/login.css";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiUnlock } from "react-icons/fi";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export const LogIn = ({ show, setShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const login = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/users/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data);

      const userResponse = await axios.get(
        `http://localhost:8000/users/currentUser`,
        { headers: { Authorization: response.data } }
      );

      localStorage.setItem("user", JSON.stringify(userResponse.data));
      setUser(userResponse.data);

      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className={`login ${show ? "show" : ""}`}>
        <div className="header">
          <div className="logo">
            <img src="/images/logo-dark.svg" alt="Logo Dark" />
          </div>

          <div onClick={() => setShow(false)} className="close-btn">
            <AiOutlineClose />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <div className="email input">
            <BiUser />
            <input
              type="email"
              placeholder="И-мэйл"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password input">
            <FiUnlock />
            <input
              type="password"
              placeholder="Нууц үг"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AiOutlineEye className="password-show" />
          </div>

          <a href="/" className="password-forget">
            Нууц үгээ мартсан уу?
          </a>

          <button type="submit" className="primary-btn">
            Нэвтрэх
          </button>

          <div className="divider">эсвэл</div>

          <div className="outline-primary-btn">Бүртгүүлэх</div>
        </form>
      </div>

      <div onClick={() => setShow(false)} className="overlay"></div>
    </div>
  );
};

import "../style/signIn.css";
import logo from "../img/logo2.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SignIn(prop) {
  const { closeModal, login, data } = prop;
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => {
      setUserData(res.data);
    });
  }, []);

  function checker(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let password = e.target.password.value;

    userData.map((user) => {
      if (user.name === name && user.password === password) {
        if (user.role === "admin") {
          navigate("/dashboard");
        }
        login(true);
        closeModal(false);
      }
    });
  }

  return (
    <div className="signInModal">
      <div className="modalcontent">
        <div className="modalHeater">
          <img src={logo} alt="" />
          <button onClick={() => closeModal(false)}>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.43164 2.05652L12.5686 13.1935L1.43164 2.05652ZM11.7731 1.26102C12.2124 0.821684 12.9247 0.821684 13.3641 1.26102C13.8034 1.70036 13.8034 2.41267 13.3641 2.85201L8.59064 7.62452L13.3641 12.398C13.8034 12.8373 13.8034 13.5496 13.3641 13.9889C12.9247 14.4283 12.2124 14.4283 11.7731 13.9889L6.99964 9.21552L2.22714 13.9889C1.81918 14.3969 1.17585 14.426 0.734269 14.0764L0.636145 13.9889C0.196806 13.5496 0.196806 12.8373 0.636145 12.398L5.40864 7.62452L0.636145 2.85201C0.196806 2.41267 0.196806 1.70036 0.636145 1.26102C1.07549 0.821684 1.7878 0.821684 2.22714 1.26102L6.99964 6.03352L11.7731 1.26102Z"
                fill="#AFADB5"
              />
            </svg>
          </button>
        </div>
        <form className="signInForm" onSubmit={checker}>
          <input
            name="name"
            type="text"
            placeholder="И-мэйл эсвэл Утасны дугаар"
            className="formInput"
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="formInput"
            name="password"
          />
          <a href="#">Нууц үгээ мартсан уу?</a>
          <button className="formButton" id="Signin" type="submit">
            Нэвтрэх
          </button>
          <p className="or">
            <span class="lineText">эсвэл</span>
            <p className="line"></p>
          </p>
          <input
            className="formButton"
            id="register"
            type="button"
            value="Бүртгүүлэх"
          />
        </form>
      </div>
    </div>
  );
}

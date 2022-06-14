import { Login, Main, Wallpaper } from "./styles";
import Logo from "../../assets/Logo.png";
import { FaArrowRight, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isFocusUsername, setIsFocusUsername] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleFocusUsername({ target }: any) {
    const span = target.previousElementSibling;
    setIsFocusUsername(span);
  }

  function handleFocusOutUsername({ target }: any) {
    if (target.value === "") {
      const span = target.previousElementSibling;
      setIsFocusUsername(!span);
    }
  }

  function handleFocusPassword({ target }: any) {
    const span = target.previousElementSibling;
    setIsFocusPassword(span);
  }

  function handleFocusOutPassword({ target }: any) {
    if (target.value === "") {
      const span = target.previousElementSibling;
      setIsFocusPassword(!span);
    }
  }

  function handleChangeUsername(e: any){
    setUser(e.target.value)
  }

  function handleChangePassword(e: any){
    setPassword(e.target.value)
  }

  return (
    <Main>
      <Login>
        <img src={Logo} alt="Logo" className="riot-logo" />

        <h1 className="title">Fazer login</h1>

        <label
          className="input-username"
          onFocus={handleFocusUsername}
          onBlur={handleFocusOutUsername}
        >
          <span className={isFocusUsername ? "span-active" : ""}>
            Nome de usuário
          </span>
          <input onChange={handleChangeUsername} type="text" name="username" />
        </label>

        <label
          className="input-password"
          onFocus={handleFocusPassword}
          onBlur={handleFocusOutPassword}
        >
          <span className={isFocusPassword ? "span-active" : ""}>Senha</span>
          <input onChange={handleChangePassword} type="password" name="password" />
        </label>

        <div className="input-items">
          <button type="button">
            <FaFacebook size={20} color={"#fff"} />
          </button>
          <button type="button">
            <FaGoogle size={20} />
          </button>
          <button type="button">
            <FaApple size={20} color={"#fff"} />
          </button>
        </div>

        <label className="input-checkbox">
          <input type="checkbox" name="checkbox" />
          Manter login
        </label>

        <Link to="/agents">
          <button className="login-button" type="button" disabled={(user && password).length === 0}>
            <FaArrowRight size={20} color={"#fff"} />
          </button>
        </Link>

        <button className="create-account-button">Não possui conta? Clique para criar uma</button>
      </Login>
      <Wallpaper>
      </Wallpaper>
    </Main>
  );
}

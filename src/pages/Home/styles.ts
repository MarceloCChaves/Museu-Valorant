import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  background: var(--shape);
`;

export const Login = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  padding: clamp(35px, 8%, 70px);
  margin-bottom: 30px;

  .riot-logo {
    width: 130px;
    margin-bottom: 20px;
  }

  .title {
    color: var(--deep-grey);
    font-size: 24px;
  }

  .input-username,
  .input-password {
    width: 100%;
    display: block;
    margin: 20px;

    input {
      width: 100%;
      background: var(--text-title);
      border: 2px solid transparent;
      border-radius: 5px;
      outline: none;
      font-size: 15px;
      padding: 25px 10px 10px;
      font-weight: 600;
      color: var(--deep-grey);

      :focus {
        background: var(--whitesmoke);
        border: 2px solid var(--deep-grey);
      }
    }

    span {
      position: absolute;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--medium-grey);
      margin: 20px;
      cursor: text;
      transition: all 200ms ease;
    }

    .span-active {
      font-size: 11px;
      margin: 8px 10px;
    }
  }

  .input-items {
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 20px;

    button {
      width: 33.33%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      border-radius: 5px;
      cursor: pointer;
      border: none;

      :nth-child(1) {
        background: var(--blue);
      }

      :nth-child(2) {
        background: var(--whitesmoke);
      }

      :nth-child(3) {
        background: var(--black);
      }
    }
  }
  .input-checkbox {
    width: 100%;
    margin: 15px 0 50px;
    font-size: 0.9em;
    font-weight: 500;
    display: flex;
    align-items: center;

    input {
      appearance: none;
      width: 20px;
      height: 20px;
      background: var(--text-title);
      color: var(--shape);
      margin-right: 8px;
      border-radius: 3px;
      text-align: center;

      :checked::after {
        content: "✔";
        background: var(--red);
        padding: 1px 5px 2px;
        border-radius: 3px;
      }
    }
  }
  .login-button {
    width: 60px;
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red);
    border-radius: 20px;
    border: none;
    margin-bottom: 60px;

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  .create-account-button{
    color: var(--medium-grey);
    border: none;
    background: transparent;
  }
`;

export const Wallpaper = styled.section`
  width: 100%;
  background: url('https://images2.alphacoders.com/120/1204924.jpg');
  background-size: cover;
  background-position: center;

  @media(max-width: 1080px) {
    display: none;
  }
`;

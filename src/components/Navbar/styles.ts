import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0 20px;

  .logo {
    text-align: center;
    color: var(--shape);

    strong {
      font-size: 32px;
      font-weight: 800;
      filter: drop-shadow(1px 1px 1px var(--text));
    }

    a {
      color: var(--shape);
      text-decoration: none;
    }
  }

  .navbar-items {
    display: flex;

    li {
      margin-left: 100px;
      list-style-type: none;
      a {
        color: var(--shape);
        text-decoration: none;
        padding: 20px 30px;
        transition: 0.5s linear;
        
        :hover{
          background: var(--card);
        }
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .logo {
      margin-bottom: 20px;
    }

    .navbar-items {
      display: inline-block;

      li {
        margin-left: 0;

        :not(:nth-child(1)) {
          margin-top: 20px;
        }
        a {
          padding: 0;
        }
      }
    }
  }
`;

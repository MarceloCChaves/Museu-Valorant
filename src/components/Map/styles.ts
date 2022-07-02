import styled from "styled-components";

export const MapContainer = styled.main`
  background: var(--shape);
  margin: 20px 0 40px;
  padding: 20px 0;
  border-radius: 8px;


  .maps {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    .map-details {
      display: flex;
      align-items: center;
      flex-direction: column;
      
      a {
        margin-top: 50px;
        text-decoration: none;
        background: var(--red);
        color: var(--shape);
        padding: 15px 40px;
        border-radius: 8px;
        transition: .5s linear;

        :hover {
          filter: brightness(90%);
        }
      }
    }

    img {
      width: 500px;
      max-width: 100%;
    }
  }

  .info {
    text-align: center;

    strong{
      font-size: 32px;
    }
  }
`;

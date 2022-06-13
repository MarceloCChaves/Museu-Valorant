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

    .nullImage{
      display: none;
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

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  height: 100vh;
`;

export const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: var(--text-title);
  width: 1180px;
  max-width: 100%;
  border-radius: 8px;
  padding: 70px 0;

  div{
    width: 600px;
    max-width: 100%;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    div, p{
      display: flex;
      align-items: center;
      margin: 20px 0 20px 30px;

      .abilities{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin: 0;
      }
    }
  }

  img {
    height: 300px;
  }
`;

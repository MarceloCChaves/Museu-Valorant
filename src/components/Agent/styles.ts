import styled from 'styled-components'

export const AgentCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--card);
    margin: 20px 30px;
    width: 25%;
    height: 600px;
    max-width: 100%;
    border-radius: 30px;

    :nth-child(7){
        display: none;
    }

    img{
        width: 70%;
        height: 300px;
        border-radius: 30px;
        margin: 20px 0;
    }

    strong{
        font-size: 24px;
        font-weight: 800;
        color: var(--text-title);
    }

    p{
        width: 70%;
        margin: 20px 0;
        font-size: 18px;
        color: var(--text-title);
    }

    @media(max-width: 767px){
        width: 100%;
        margin: 0 0 30px;
    }
`
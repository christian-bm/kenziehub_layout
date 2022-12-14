import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    figure {
        img {
            width: 130px;
        }
    }
`;

export const Content = styled.div`
    background: var(--grey-3);
    max-width: 337px;
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin-top: 30px;

    h1,
    span {
        align-self: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex: 1;
        height: 100%;
        width: 90%;
    }

    span {
        color: var(--grey-1);
        font-weight: 500;
    }

    button {
        height: 40px;
    }
`;

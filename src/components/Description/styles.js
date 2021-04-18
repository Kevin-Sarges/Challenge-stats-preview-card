import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 550px) {
    max-width: 71%;
    align-items: center;
  }

  h1 {
    margin-bottom: 25px;
    max-width: 82%;
    font-size: 29px;
    font-weight: 700;
    color: var(--White);

    > span {
      color: var(--Soft-violet);
    }

    @media(max-width: 550px) {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 18px;
    }
  }

  > p {
    max-width: 73%;
    margin-bottom: 35px;
    margin-right: 32px;
    font-size: 12px;

    @media(max-width: 550px) {
      max-width: 85%;
      font-size: 10px;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }

  footer {
    width: 73%;
    margin-right: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-size: 17px;
      font-weight: 600;
      color: var(--White);

      span {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 10px;
        font-weight: 400;
        color: var(--Slightly-transparent-white-start);
      }
    }

    @media(max-width: 550px) {
      flex-direction: column;
      margin-right: 0;

      > p {
        font-size: 15px;
        margin-bottom: 25px;

        span {
          font-size: 8px;
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  h1 {
    margin-bottom: 25px;
    max-width: 100%;
    font-size: 29px;
    font-weight: 700;
    color: var(--White);

    > span {
      color: var(--Soft-violet);
    }
  }

  > p {
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 12px;
  }

  footer {
    width: 90%;
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

    
  }
`;

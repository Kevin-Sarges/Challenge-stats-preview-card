import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  background: var(--Dark-desaturated-blue);
  border-radius: 8px;

  @media(max-width: 375px) {
    width: 59%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const DivDescription = styled.div`
  width: 50%;
  margin: 53px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 375px) {
    width: 140%;
    margin: 0;
    display: flex;
  }
`;

export const Image = styled.div`
  width: 50%;
  border-radius: 0px 8px 8px 0px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0px 8px 8px 0px;
    filter: invert(35%) sepia(100%) saturate(120%) hue-rotate(234deg) brightness(57%) contrast(148%);
  }

  @media(max-width: 375px) {
    width: 100%;

    img {
      border-radius: 4px 4px 0px 0px;
    }
  }
`;

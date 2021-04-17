import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  background: var(--Dark-desaturated-blue);
  border-radius: 8px;
`;

export const DivDescription = styled.div`
  width: 50%;
  margin: 53px 0px;
  display: flex;
  align-items: center;
  justify-content: center
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
`;

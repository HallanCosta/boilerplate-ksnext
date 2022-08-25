import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

  @media (max-width: 600) {
    width: 100%;
    flex-direction: column;
  }
`;
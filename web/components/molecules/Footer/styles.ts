import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Name = styled.span`
  margin-left: 0.5rem;
  color: #0070f3;
  cursor: pointer;
  font-weight: 700;
  transition: .2s text-decoration;

  &:hover {
    text-decoration: underline;
  }
`;
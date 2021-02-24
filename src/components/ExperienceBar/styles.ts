import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
  
  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    margin: 0 1.5rem;
    background: var(--gray-line);
    position: relative;
  }

  & > div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green)
  }

  span.current-experience {
    position: absolute;
    top: 12px;
    transform: translateX(-50%)
  }
`;
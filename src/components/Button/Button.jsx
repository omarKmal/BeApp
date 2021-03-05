import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  outline: none;
  background-color: ${({ background }) =>
    background ? background : "transpernet"};
  padding: ${({ size }) => (size ? `${size}` : "10px 10px 10px")};
  border-radius: 60px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 700;
  color: ${({ color }) => (color ? color : "#fff")};
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: contrast(80%);
  }
`;

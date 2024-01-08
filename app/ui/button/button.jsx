"use client";

const { default: styled, css } = require("styled-components");

const variations = {
  standard: css`
    background: #c6dbbd;
    border: 1px solid #000;
    &:hover {
      background: #aac0a1;
    }
  `,
  main: css`
    background: #9bc588;
    border: 2px solid #000;
    box-shadow: 4px 4px 0px 0px #000;
    font-weight: 700;

    &:hover {
      box-shadow: 0px 0px 0px 0px #000;
    }
  `,
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  border-radius: 3px;
  gap: 10px;
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "standard",
};

export default Button;

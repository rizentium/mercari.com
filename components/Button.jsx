import variables from "@styles/variables.module.scss";
import styled from "styled-components";
import Link from "next/link";

const size = (payload) => {
  switch (payload) {
    case "lg":
      return {
        font: "18px",
        padding: "12px 16px",
      };
    case "md":
      return {
        font: "14px",
        padding: "8px 12px",
      };
    case "sm":
      return {
        font: "12px",
        padding: "6px 10px",
      };
  }
};

const background = (payload) => {
  switch (payload) {
    case "primary":
      return variables.colorPrimary;
    default:
      return variables.colorLight;
  }
};

const Button = styled.button`
  font-weight: 500;
  padding: ${(props) => size(props.size).padding};
  border: none;
  border-radius: 4px;
  color: ${variables.colorLight} !important;
  font-size: ${(props) => size(props.size).font};
  background: ${(props) => background(props.color)};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

Button.defaultProps = {
  color: "primary",
  size: "md",
};

export default function StyledButton(props) {
  return (
    <Link href={props.href ?? ""}>
      <Button
        color={props.color}
        size={props.size}
        onClick={props.onClick}
        data-cy={props.dataCy ?? ""}
      >
        {props.label}
      </Button>
    </Link>
  );
}

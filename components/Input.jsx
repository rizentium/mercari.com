import styled from "styled-components";
import variables from "@styles/variables.module.scss";

const StyledInput = styled.input`
  padding: 6px;
  background: ${variables.colorDark};
  border: ${variables.colorLight} 1px solid;
  border-radius: 4px;
  &:hover {
    border: ${variables.colorPrimary} 1px solid;
  }
`;

export default StyledInput;

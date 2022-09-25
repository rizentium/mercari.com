import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export default function Loading(props) {
  return <Container>{props.label ?? "Loading..."}</Container>;
}

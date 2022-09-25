import styled from "styled-components";

const Container = styled.div`
  margin: 12px 0;
  p {
    margin: 0;
  }
`;

const Label = styled.div`
  font-weight: 700;
`;
const Value = styled.div``;

export default function ItemTile(props) {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Container>
  );
}

import styled from "styled-components";
import ItemTile from "./ItemTile";
import PeopleCard from "./PeopleCard";

const PeopleListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  column-gap: 12px;
  row-gap: 12px;
`;

export default function PeopleList(props) {
  return (
    <div>
      <ItemTile label="Characters" />
      <PeopleListContainer>
        {props.items.map((p) => (
          <PeopleCard url={p} key={p} />
        ))}
      </PeopleListContainer>
    </div>
  );
}

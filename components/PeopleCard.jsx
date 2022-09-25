import styled from "styled-components";
import usePeople from "../hooks/People";

const PeopleContainer = styled.div`
  p {
    margin: 0;
  }
`;
const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 1.4em;
  line-height: 1.4em;
  font-weight: ${(props) => props.fontWeight ?? ""};
`;

const TextSkeleton = styled.div`
  background: #2c2c2c;
  border-radius: 4px;
  height: 1.2em;
  margin: 0.1em 0;
  width: ${(props) => props.width ?? "100%"};
`;

const PeopleData = (props) => {
  const [people, isLoading] = usePeople(props.url);

  if (isLoading)
    return (
      <div>
        <TextSkeleton />
        <TextSkeleton width="60%" />
      </div>
    );

  if (people == null) return null;
  const age = people.age == "" ? "" : `(${people.age})`;

  return (
    <div>
      <Text fontWeight="600">{people.name}</Text>
      <Text>{`${people.gender} ${age}`}</Text>
    </div>
  );
};

export default function PeopleCard(props) {
  return (
    <PeopleContainer>
      <PeopleData url={props.url} />
    </PeopleContainer>
  );
}

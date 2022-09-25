import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import variables from "../styles/variables.module.scss";

const Container = styled.div`
  display: flex;
  column-gap: 12px;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid ${variables.colorLight};

  &:hover {
    background: rgb(104, 104, 104);
    cursor: pointer;
  }
`;
const Prefix = styled.div``;
const Content = styled.div`
   {
    p {
      margin: 0 !important;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

export default function FilmCard(props) {
  const data = props.data;
  return (
    <Link href={`/films/${data.id}`}>
      <Container>
        <Prefix>
          <Image src={data.image} width={64} height={96} loading="lazy" alt={data.title} layout="fixed" />
        </Prefix>
        <Content>
          <Title>
            {data.title} ({data.release_date})
          </Title>
          <p>
            {data.original_title} ({data.original_title_romanised})
          </p>
          <p>{data.director}</p>
          <p>Rating: {data.rt_score}</p>
        </Content>
      </Container>
    </Link>
  );
}

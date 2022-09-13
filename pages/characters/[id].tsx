import { Character } from "../../types";
import Image from 'next/image'
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function CharacterPage({ character }: { character: Character }) {
    const router = useRouter();
    console.log(router.query);
    
  return (
      <div>
          <h1>{character.name}</h1>
          <Image src={character.image}
            loader={imageLoader}
            unoptimized
            width='200'
              height='200'
          />
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Type: {character.type}</p>
          <p>Origin: {character.origin.name}</p>
      </div>
  )
}

CharacterPage.getLayout = function getLayout(page:any) {
    return <Layout>{page}</Layout>;
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    
    const character = await res.json();
    return {
        props: {
            character
        }
    }
}

export default CharacterPage
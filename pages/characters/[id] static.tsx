import { Character, GetCharacterResults } from "../../types";
import Image from 'next/image'
import imageLoader from "../../imageLoader";

function CharacterPage({character}:{character:Character}) {
  return (
      <div>
          <h1>{character.name}</h1>
          <Image src={character.image}
            loader={imageLoader}
            unoptimized
            width='200'
              height='200'
          />
      </div>
  )
}

export const getStaticPaths = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results }:GetCharacterResults = await res.json();
    
    return {
        paths: results.map(char => {
           return { params: { id: String(char.id) } }
        }),
        fallback:false
    }
}
export const getStaticProps = async ({ params }: { params: { id: string } }) => {
    console.log(params);
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    
    const character = await res.json();
    return {
        props: {
            character
        }
    }
}

export default CharacterPage
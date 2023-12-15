import { CharacterAPI } from "../types.ts";

export const Query = {
  character: async (
    _: unknown,
    args: { id: string }
  ): Promise<CharacterAPI> => {
    const { id } = args;
    const character = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return character.json();
  },
  charactersByIds: async (
    _: unknown,
    args: { ids: string[] }
  ): Promise<Array<CharacterAPI>> => {
    const { ids } = args;
    const characters = await fetch(`https://rickandmortyapi.com/api/character/${ids.toString()}`);
    return characters.json();
  },
};
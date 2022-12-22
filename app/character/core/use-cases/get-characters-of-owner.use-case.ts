import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { setMyCharacters } from "../../store/city.store";

interface IArgs {
  address: string;
}

export const getCharactersOfOwner = createAsyncThunk(
  "character/getCharactersOfOwner",
  async ({ address }: IArgs, { extra, dispatch }) => {
    const charactersId = await (extra as ExtraArgument).api.character.charactersOfOwner(address);
    const characters = await (extra as ExtraArgument).api.character.characters(charactersId);
    dispatch(setMyCharacters(characters));
  },
);

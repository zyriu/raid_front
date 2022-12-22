import { createAsyncThunk } from "@reduxjs/toolkit";
import { UnsplicedMintRepository } from "../../adapters/unspliced-mint.repository";
import { JsonRpcProvider } from "@ethersproject/providers";

interface IArgs {
  provider: JsonRpcProvider;
}

export const mintUnsplicedCharacter = createAsyncThunk(
  "character/mintUnsplicedCharacter",
  async ({ provider }: IArgs) => {
    const unsplicedMintRepository = new UnsplicedMintRepository(provider);

    let transaction;
    try {
      transaction = await unsplicedMintRepository.unsplicedMint();
      await transaction.wait();
    } catch (err: any) {
      // return metamaskErrorWrap(err, dispatch);
    } finally {
      if (transaction) {
        // dispatch(clearPendingTransaction(transaction.hash));
      }
    }
  },
);

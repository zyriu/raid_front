import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPendingTransactionStoreState } from "../core/port/pending-transaction.port";

const initialState: Array<IPendingTransactionStoreState> = [];

const pendingTransactionsSlice = createSlice({
  name: "pendingTransactions",
  initialState,
  reducers: {
    fetchPendingTransactions(state, action: PayloadAction<IPendingTransactionStoreState>) {
      state.push(action.payload);
    },
    clearPendingTransaction(state, action: PayloadAction<string>) {
      const target = state.find(x => x.hash === action.payload);
      if (target) {
        state.splice(state.indexOf(target), 1);
      }
    },
  },
});

export const isPendingTransaction = (pendingTransactions: IPendingTransactionStoreState[], type: string) => {
  return pendingTransactions.map(x => x.type).includes(type);
};

export const transactionButtonText = (
  pendingTransactions: IPendingTransactionStoreState[],
  type: string,
  defaultText: string,
) => {
  return isPendingTransaction(pendingTransactions, type) ? "Pending..." : defaultText;
};

export const { fetchPendingTransactions, clearPendingTransaction } = pendingTransactionsSlice.actions;

export default pendingTransactionsSlice.reducer;

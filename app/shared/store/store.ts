import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "../../messages/store/messages.store";
import pendingTransactionsReducer from "../../app/store/pending-transactions.store";
import web3Reducer from "../../app/store/web3.store";
import marketplaceReducer from "../../marketplace/store/marketplace.store";
import cityReducer from "../../character/store/city.store";
import { CharacterRepository } from "../../character/adapters/character.repository";
import { ICharacterRepository } from "../../character/core/port/character.repository.port";
import { IPoolsRepository } from "../../pools/core/port/pools.repository.port";
import { PoolsRepository } from "../../pools/adapters/pools.repository";
import { IRouterRepository } from "../../router/core/port/router.repository.port";
import { RouterRepository } from "../../router/adapters/router.repository";

const store = configureStore({
  reducer: {
    web3Store: web3Reducer,
    messages: messagesReducer,
    pendingTransactions: pendingTransactionsReducer,
    marketplace: marketplaceReducer,
    city: cityReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: {
          api: {
            character: new CharacterRepository(),
            pools: new PoolsRepository(),
            router: new RouterRepository(),
          },
        },
      },
    }),
});

export interface ExtraArgument {
  api: {
    character: ICharacterRepository;
    pools: IPoolsRepository;
    router: IRouterRepository;
  };
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

export type ThunkWithExtraArguments = {
  extra: ExtraArgument;
  dispatch: AppDispatch;
  state: RootState;
};

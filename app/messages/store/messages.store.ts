import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage, MessagesStoreState } from "../core/port/messages.port";
import { createMessage } from "../core/use-cases/create-message.use-case";

const initialState: MessagesStoreState = {
  message: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    error(state, action: PayloadAction<IMessage>) {
      createMessage(state, "error", action.payload);
    },
    info(state, action: PayloadAction<IMessage>) {
      createMessage(state, "info", action.payload);
    },
    warning(state, action: PayloadAction<IMessage>) {
      createMessage(state, "warning", action.payload);
    },
    success(state, action: PayloadAction<IMessage>) {
      createMessage(state, "success", action.payload);
    },
    close(state) {
      state.message = null;
    },
  },
});

export const { error, info, close, warning, success } = messagesSlice.actions;

export default messagesSlice.reducer;

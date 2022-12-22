import { Color } from "@material-ui/lab/Alert";
import { IMessage, MessagesStoreState } from "../port/messages.port";

// Adds a message to the store
export const createMessage = function (state: MessagesStoreState, severity: Color, text: IMessage) {
  state.message = {
    severity,
    ...text,
  };
};

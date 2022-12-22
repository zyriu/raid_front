import { Color } from "@material-ui/lab/Alert";

export type Message = IMessage & {
  severity: Color;
};

export interface MessagesStoreState {
  message: Message | null;
}

export interface IMessage {
  text: string;
  error?: any;
}

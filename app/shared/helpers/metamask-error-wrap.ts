import { Dispatch } from "redux";
import { error } from "../../messages/store/messages.store";

export const metamaskErrorWrap = (err: any, dispatch: Dispatch) => {
  let text = "Error";

  if (err.code && err.code === -32603) {
    if (err.data && err.data.message) {
      text = err.data.message.includes(":") ? err.data.message.split(":")[1].trim() : err.data.data || err.data.message;
    }
  }

  if (err.code && err.code === 4001) {
    if (err.message.includes("User denied transaction signature")) {
      text = "User denied transaction signature";
    }
  }

  return dispatch(error({ text, error: err }));
};

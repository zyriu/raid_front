export interface IWeb3Context {
  address: string;
  connect: () => void;
  disconnect: () => void;
  connected: Boolean;
}

export interface IWeb3StoreState {
  context: IWeb3Context | null;
}

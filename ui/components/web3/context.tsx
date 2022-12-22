import React, { ReactElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { getRpcURI } from "../../../app/shared/helpers/static-provider";
import { useDispatch } from "react-redux";
import { JsonRpcProvider, StaticJsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { NETWORK } from "../../../app/shared/constants";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { getCharactersOfOwner } from "../../../app/character/core/use-cases/get-characters-of-owner.use-case";
import { switchNetwork } from "../../../app/shared/helpers/switch-network";

type onChainProvider = {
  address: string;
  chainID: number;
  checkCorrectNetwork: () => Promise<boolean>;
  connect: () => void;
  connected: Boolean;
  disconnect: () => void;
  loadAccountInformation: (x: string) => void;
  provider: React.MutableRefObject<JsonRpcProvider>;
  web3Modal?: Web3Modal;
  web3?: any;
};

export type Web3ContextData = {
  onChainProvider: onChainProvider;
} | null;

const Web3Context = React.createContext<Web3ContextData>(null);

export const useWeb3Context = () => {
  const web3Context = useContext(Web3Context);
  if (!web3Context) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " + "please declare it at a higher level.",
    );
  }

  const { onChainProvider } = web3Context;
  return useMemo(() => {
    return { ...onChainProvider };
  }, [onChainProvider]);
};

export const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const dispatch = useDispatch();

  const [connected, setConnected] = useState(false);
  const [chainID, setChainID] = useState<number>(NETWORK);
  const [address, setAddress] = useState("");
  const [instance, setInstance] = useState<any>();
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | undefined>();

  useEffect(() => {
    setWeb3Modal(
      new Web3Modal({
        cacheProvider: true,
        theme: {
          background: "black",
          main: "rgb(199, 199, 199)",
          secondary: "rgb(136, 136, 136)",
          border: "rgba(195, 195, 195, 0.14)",
          hover: "rgb(16, 26, 32)",
        },
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                [NETWORK]: getRpcURI(),
              },
            },
          },
        },
      }),
    );
  }, []);

  useEffect(() => {
    (async () => {
      setInstance(await web3Modal?.connect());
    })();
  }, [instance, web3Modal]);

  const provider = useRef<JsonRpcProvider>(new StaticJsonRpcProvider(getRpcURI(), "any"));

  const disconnect = useCallback(async () => {
    if (web3Modal) {
      web3Modal.clearCachedProvider();
      setConnected(false);
      setAddress("");
    }
  }, [web3Modal]);

  const loadAccountInformation = useCallback(
    (address: string) => {
      if (address) {
        dispatch(getCharactersOfOwner({ address }));
      }
    },
    [dispatch],
  );

  const changeChain = useCallback(async () => {
    setChainID(NETWORK);
    provider.current = new Web3Provider(instance, "any");
  }, [instance]);

  const connect = useCallback(async () => {
    if (!instance) {
      return;
    }

    if (instance.on) {
      instance.on("disconnect", () => {
        dispatch(getCharactersOfOwner({ address }));
      });

      instance.on("accountsChanged", ([address]: [string]) => {
        setAddress(address);
        loadAccountInformation(address);
      });

      instance.on("chainChanged", changeChain);
    }

    const currentProvider = new Web3Provider(instance, "any");

    const address = await currentProvider.getSigner().getAddress();
    setAddress(address);

    const chainId = Number((await currentProvider.getNetwork()).chainId);
    setChainID(chainId);

    if (NETWORK === chainId) {
      provider.current = currentProvider;
    }

    setConnected(true);
  }, [changeChain, dispatch, instance, loadAccountInformation]);

  const checkCorrectNetwork = useCallback(async () => {
    if (chainID !== NETWORK) {
      try {
        await switchNetwork();
        await changeChain();
      } catch (e: any) {
        return false;
      }
    }

    return true;
  }, [chainID, changeChain]);

  const hasCachedProvider = useMemo((): boolean => !!web3Modal?.cachedProvider, [web3Modal?.cachedProvider]);

  useEffect(() => {
    if (hasCachedProvider) {
      connect();
    }
  }, [connect, hasCachedProvider]);

  const onChainProvider = useMemo(
    () => ({
      address,
      chainID,
      checkCorrectNetwork,
      connect,
      connected,
      disconnect,
      loadAccountInformation,
      provider,
      web3Modal,
    }),
    [
      address,
      chainID,
      checkCorrectNetwork,
      connect,
      connected,
      disconnect,
      loadAccountInformation,
      provider,
      web3Modal,
    ],
  );

  return <Web3Context.Provider value={{ onChainProvider }}>{children}</Web3Context.Provider>;
};

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWeb3ContextUseCase } from "../../../app/app/core/port/use-cases/set-web3-context.use-case";
import { useWeb3Context } from "./context";

export default function ConnectWallet() {
  const { address, connect, disconnect, connected } = useWeb3Context();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWeb3ContextUseCase({ address, connected, connect, disconnect }));
  }, [address, connect, connected, disconnect, dispatch]);

  if (!connected) {
    return (
      <div
        onClick={connect}
        className="z-20 relative font-bold border-4 my-auto border-solid border-white px-6 text-white rounded-3xl h-fit cursor-pointer text-2xl bg-white bg-opacity-5 hover:bg-opacity-100 hover:text-black py-2 mr-6 whitespace-nowrap"
      >
        Connect Wallet
      </div>
    );
  }

  return (
    <div className="flex flex-nowrap justify-end z-20 relative mr-6 ">
      <div className="mr-10 w-min max-w-md overflow-hidden text-ellipsis my-auto border-solid px-4 text-white h-fit font-bold text-2xl py-2 whitespace-nowrap">
        Connected with {address}
      </div>
      <div className="font-bold border-4 my-auto border-solid border-white px-6 text-white rounded-3xl h-fit cursor-pointer text-2xl bg-white bg-opacity-5 hover:bg-opacity-100 hover:text-black py-2 whitespace-nowrap">
        <span onClick={disconnect}>Disconnect</span>
      </div>
    </div>
  );
}

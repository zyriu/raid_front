import { useState } from "react";
import { DexModal } from "./modal";
import ConnectWallet from "../../ui/components/web3/connector";


export const Router = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    return  <div className="w-full flex justify-center items-center my-5 pb-5 text-2xl text-white z-2">
        <DexModal open={modalOpen} setOpen={setModalOpen} />
        <div
        className="w-full md:w-3/4 lg:w-1/2 rounded-2xl p-4 flex flex-col shadow-2xl z-2"
        style={{background: "rgb(25, 27, 31)"}}
        >
        <div className="w-full flex justify-between p-4 items-center rounded-2xl shadow-md" style={{ backgroundColor: "rgb(33, 36, 41)" }}>
            <input type="number" className="bg-transparent text-white outline-none font-bold w-2/3" />
            <div
            onClick={openModal}
            style={{background: "rgb(44, 47, 54)"}}
            className="px-4 py-2 text-white cursor-pointer shadow-md font-bold text-base rounded-2xl uppercase"
            >
            ETH
            </div>
        </div>
        <div className="w-full flex justify-between p-4  items-center rounded-2xl mt-4 shadow-md" style={{ backgroundColor: "rgb(33, 36, 41)" }}>
            <input type="number" className="bg-transparent text-white outline-none font-bold w-1/2" />
            <div
            onClick={openModal}
            style={{background: "rgb(44, 47, 54)"}}
            className="px-4 py-2 text-white cursor-pointer shadow-md font-bold text-base rounded-2xl"
            >
            Select a token
            </div>
        </div>
        <div className="my-4">
            <ConnectWallet />
        </div>
        </div>
    </div>
}
interface Props {
  setOpen: (open: boolean) => void;
  open: boolean;
}

export const DexModal = ({ open, setOpen }: Props) => {
  if (!open) return <></>;

  return (
    <div className="absolute w-full h-full ">
      <div className="flex w-full justify-center items-center flex-col">
        <div className="bg-white w-1/4 p-4 rounded-2xl">
          <div className="w-full flex justify-between">
            <div>Select a token</div>
            <div className="cursor-pointer" onClick={() => setOpen(false)}>
              x
            </div>
          </div>
          <input placeholder="Search or paste address" />
          <div className="flex flex-wrap">
            <div className="p-2 bg-slate-600 text-white font-bold text-sm m-1 rounded-xl">ETH</div>
            <div className="p-2 bg-slate-600 text-white font-bold text-sm m-1 rounded-xl">DAI</div>
            <div className="p-2 bg-slate-600 text-white font-bold text-sm m-1 rounded-xl">USDC</div>
            <div className="p-2 bg-slate-600 text-white font-bold text-sm m-1 rounded-xl">USDT</div>
            <div className="p-2 bg-slate-600 text-white font-bold text-sm m-1 rounded-xl">WBTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

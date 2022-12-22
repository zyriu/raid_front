import Discord from "../../assets/images/discord.png";
import Twitter from "../../assets/images/twitter.png";
import Logo from "../../assets/images/logo.png";
import ConnectWallet from "../web3/connector";

const Header = () => {
  return (
    <div className="w-10/12 flex justify-between items-center">
      <div className="flex flex-nowrap">
        <a href="/">
          <img src={Logo.src} className="m-4 ml-6 hue-rotate-90" style={{ width: 120 }} />
        </a>
      </div>
      <div className="justify-evenly flex flex-row">
        <img
          src={Discord.src}
          className="mx-4 cursor-pointer hover:-translate-y-2 transition-all transform-gpu"
          width="30px"
        />
        <img
          src={Twitter.src}
          className="mx-4 cursor-pointer hover:-translate-y-2 transition-all transform-gpu"
          width="30px"
        />
      </div>
      <div className="justify-evenly flex flex-row w-fit">
        <span
          className="mx-5 text-white transform transition-all cursor-pointer hover:-translate-y-2 font-extralight text-xl uppercase"
          style={{ fontWeight: 900 }}
        >
          Team
        </span>
        <span
          className="mx-5 text-white transform transition-all cursor-pointer hover:-translate-y-2 font-extralight text-xl uppercase"
          style={{ fontWeight: 900 }}
        >
          Docs
        </span>
        <span
          className="mx-5 text-white transform transition-all cursor-pointer hover:-translate-y-2 font-extralight text-xl uppercase"
          style={{ fontWeight: 900 }}
        >
          Chart
        </span>
        <span
          className="mx-5 text-white transform transition-all cursor-pointer hover:-translate-y-2 font-extralight text-xl uppercase"
          style={{ fontWeight: 900 }}
        >
          Audit
        </span>
      </div>
    </div>
  );
};

export default Header;

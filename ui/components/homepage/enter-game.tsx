import Link from "next/link";
import { useRouter } from "next/router";

function EnterGame() {
  const router = useRouter();

  const enter = () => {
    router.push("/city");
  };

  return (
    <div className="flex flex-nowrap relative z-20 mx-auto justify-center mt-16">
      <Link href="/marketplace">
        <button className="cybr-btn mx-2">
          Marketplace
          <span aria-hidden className="cybr-btn__glitch">
            Marketplace
          </span>
          <span aria-hidden className="cybr-btn__tag">
            Go
          </span>
        </button>
      </Link>
      <button className="cybr-btn mx-2" onClick={enter}>
        Play now
        <span aria-hidden className="cybr-btn__glitch">
          Play now
        </span>
        <span aria-hidden className="cybr-btn__tag">
          Gas
        </span>
      </button>
    </div>
  );
}

export default EnterGame;

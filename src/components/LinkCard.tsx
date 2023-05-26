import { ILink } from "@/types";
import { useState } from "react";

const LinkCard = (onelink : ILink) => {
  const [copy, setCopy] = useState<boolean>();
  return (
    <div className="mx-7 bg-white my-3 rounded-lg flex flex-col gap-3">
      <h3 className="border-b-2 p-4 border-user-neutral-gray">{onelink.FullLink}</h3>
      <p className="py-1 px-4 text-primary-cyan">{onelink.ShortLink}</p> 
      <button onClick={() => {
          navigator.clipboard.writeText(onelink.ShortLink);
          setCopy(!copy);
        }
      } className={copy ? "bg-primary-dark-violet mx-4 mb-5 p-2 rounded-lg text-white" : "bg-primary-cyan mx-4 mb-5 p-2 rounded-lg text-white"}>
        {
          copy ? 'Copied!' : 'Copy'
        }
        </button>
    </div>
  )
}

export default LinkCard
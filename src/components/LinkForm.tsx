import { ILink } from "@/types";
import { useState } from "react";

const LinkForm = () => {
  const [copy, setCopy] = useState<boolean>(false);
  const [links, setLinks] = useState<ILink[]>([]);
  const API_BASE = 'https://api.shrtco.de/v2/shorten?url=';
  const [link, setLink] = useState<string>('');
  const addData = (userLink: string, shortLink: string) => {
    const newLink = {
      "FullLink": userLink,
      "ShortLink": shortLink
    };
    setLinks([newLink, ...links]);
  };
  const shortenLink = async (link:string) => {
    try {
      const res = await fetch(API_BASE + link);
      const data = await res.json();
      if (data.ok) {
        addData(link, data.result.short_link);
        setLink('');
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl bg-cover bg-no-repeat mx-auto bg-primary-dark-violet w-[87%] -mt-[5.5rem] mb-8" style={{
        backgroundImage: "url('/bg-shorten-mobile.svg')",
        backgroundSize: "70% 80%",
        backgroundPosition: "right top",
      }}>
        <div className="p-7 flex flex-col items-center gap-5">
          <input type="url" name="url" id="" placeholder="Shorten a link here..." className="w-full py-3 px-4 rounded-lg" value={link} onChange={e => setLink(e.target.value)}/>
          <button className="mx-1 bg-primary-cyan font-bold text-white w-full p-3 rounded-lg" onClick={() => shortenLink(link)}>Shorten It!</button>
        </div>
      </div>
      {
        links.map((onelink, index) => {
          return (
          <div className="mx-7 bg-white my-3 rounded-lg flex flex-col gap-3" key={index}>
             <h3 className="border-b-2 p-4 border-user-neutral-gray">{onelink.FullLink}</h3>
             <p className="py-1 px-4 text-primary-cyan">{onelink.ShortLink}</p> 
             <button onClick={() => {
                navigator.clipboard.writeText(onelink.ShortLink);
                
                }
              } className=" bg-primary-cyan mx-4 mb-5 p-2 rounded-lg text-white">{copy ? 'Copied!' : 'Copy'}</button>
          </div>
          )
        })
      }
    </>
  )
}

export default LinkForm
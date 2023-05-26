import { ILink } from "@/types";
import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

const LinkForm = () => {
  const API_BASE = 'https://api.shrtco.de/v2/shorten?url=';
  const [links, setLinks] = useState<ILink[]>([]);
  const [link, setLink] = useState<string>('');
  const [empty, setEmpty] = useState<boolean>();
  const [imageURL, setImageURL] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [windowWidth, setWindowWidth] = useState<number | undefined>();
  
  
  const addData = (userLink: string, shortLink: string) => {
    const newLink = {
      "FullLink": userLink,
      "ShortLink": shortLink
    };
    setLinks([newLink, ...links]);
  };

  const shortenLink = async (link:string) => {
    if (!link.trim().length) {
      setEmpty(true);
    }else {

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
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth! < 768) {
      setImageURL('/bg-shorten-mobile.svg')
      setSize('70% 80%')
    } else {
      setImageURL('/bg-shorten-desktop.svg')
      setSize('100% 100%')
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      <div className="overflow-hidden rounded-xl bg-cover bg-no-repeat mx-auto bg-primary-dark-violet w-[87%] -mt-[5.5rem] md:-mt-[4.8rem] mb-8 md:w-[80%]" style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: `${size}`,
        backgroundPosition: "right top",
      }}>
        <div className="p-7 flex flex-col gap-5 items-center md:p-12 md:flex-row">
          <input type="url" name="url" id="" placeholder="Shorten a link here..." className={"w-full py-3 px-4 rounded-lg " + (empty && "border-secondary-red border-4")} value={link} onChange={e => setLink(e.target.value)}/>
          {
            empty && <span className="text-secondary-red text-sm -my-3 ml-1">
              Please add a link
            </span>
          }
          <button className={"mx-1 bg-primary-cyan font-bold text-white w-full p-3 rounded-lg md:w-60"} onClick={() => shortenLink(link)}>Shorten It!</button>
        </div>
      </div>
      {
        links.map((onelink, index) => <LinkCard {...onelink} key={index}/>)
      }
    </>
  )
}

export default LinkForm
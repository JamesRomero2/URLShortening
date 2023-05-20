import Image from "next/image";

interface cardData {
  id: number,
  cardImage: string,
  cardTitle: string,
  cardText: string
}

const Card = () => {
  const names: cardData[] = [
    {
      "id": 1,
      "cardImage": "/icon-brand-recognition.svg",
      "cardTitle": "Brand Recognition",
      "cardText": "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },
    {
      "id": 2,
      "cardImage": "/icon-detailed-records.svg",
      "cardTitle": "Detailed Records",
      "cardText": "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
      "id": 3,
      "cardImage": "/icon-fully-customizable.svg",
      "cardTitle": "Fully Customizable",
      "cardText": "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
  },
];

  return (
    <div className="flex flex-col items-center">
      {
        names.map(name => 
          {
           if (name.id === 2)
           return <div key={name.id} className="relative">
            <div className="border-l-[10px] h-[500px] absolute left-[50%] -ml-[5px] top-0 border-primary-cyan -mt-[48px]"></div>
              <div className="bg-white flex flex-col items-center my-12 relative rounded-lg text-center gap-y-3 px-11 pb-10">
                <div className="p-5 rounded-full bg-primary-dark-violet -mt-11">
                  <Image src={name.cardImage} alt="Card images" width={50} height={50}/>
                </div>
                  <h2 className="text-primary-dark-violet font-bold text-2xl my-3">{name.cardTitle}</h2>
                  <p className="text-neutral-gray-violet text-sm leading-6">{name.cardText}</p>
              </div>
            </div>
            return <div key={name.id}>
              <div className="bg-white flex flex-col items-center my-12 relative rounded-lg text-center gap-y-3 px-11 pb-10">
                <div className="p-5 rounded-full bg-primary-dark-violet -mt-11">
                  <Image src={name.cardImage} alt="Card images" width={50} height={50}/>
                </div>
                  <h2 className="text-primary-dark-violet font-bold text-2xl my-3">{name.cardTitle}</h2>
                  <p className="text-neutral-gray-violet text-sm leading-6">{name.cardText}</p>
              </div>
            </div>
          }
        )
      }
      
    </div>
  )
}

export default Card
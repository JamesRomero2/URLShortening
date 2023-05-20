const LinkForm = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-cover bg-no-repeat mx-auto bg-primary-dark-violet w-[87%] -mt-[5.5rem] mb-8" style={{
      backgroundImage: "url('/bg-shorten-mobile.svg')",
      backgroundSize: "70% 80%",
      backgroundPosition: "right top",
      }}>
      <div className="p-7 flex flex-col items-center gap-5">
        <input type="url" name="url" id="" placeholder="Shorten a link here..." className="w-full py-3 px-4 rounded-lg"/>
        <button className="mx-1 bg-primary-cyan font-bold text-white w-full p-3 rounded-lg">Shorten It!</button>
      </div>
    </div>
  )
}

export default LinkForm
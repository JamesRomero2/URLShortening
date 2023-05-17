import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortening App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content="Web app for URL Shortening, Designed by FrontendMentor"/>
        <meta name="author" content="James Romero"/>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="keywords" content="URL Shortening App, URL Shortening, Short link"/>
        <meta name="robots" content="follow"/>
        <meta property="og:title" content="URL Shortening App" />
        <meta property="og:description" content="URL Shortening App" />
        <meta property="og:url" content="https://url-shortening-app.vercel.app/" />
        <meta property="og:image" content="https://url-shortening-app.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="URL Shortening App" />
        <meta name="twitter:description" content="URL Shortening App" />
        <meta name="twitter:url" content="https://url-shortening-app.vercel.app/" />
        <meta name="twitter:image" content="https://url-shortening-app.vercel.app/og-image.png" />
      </Head>
      <header className="flex flex-row justify-between items-center w-auto my-10 mx-7 h-fit">
        <Image src={'/logo.svg'} width={120} height={50} alt="Website's logo named Shortly" />
        <Image src={'/hamburger.svg'} width={40} height={40} alt="Hamburger Icon, Open Menu"/>
      </header>
      <main className="overflow-x-hidden relative">
        <section className="hero mb-40 h-fit">
          <div className="h-96 w-[550px]">
            <Image src={'/illustration-working.svg'} height={0} width={0} alt="Hero Section Illustration" className="h-auto w-[550px] ml-7"/>
          </div>
          <div className="mx-7 flex flex-col items-center text-center gap-5">
            <h1 className="font-bold text-[2.7rem] text-primary-dark-violet leading-[1.2em]">More than just shorter links</h1>
            <p className="text-lg text-neutral-gray-violet">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button className="text-white font-bold bg-primary-cyan px-12 py-4 rounded-full my-5">Get Started</button>
          </div>
        </section>
        <section className="mt-16 bg-user-neutral-gray flex flex-col">
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
            <div className="mx-7 text-center my-10">
              <h2 className="text-3xl font-bold text-primary-dark-violet mb-7">Advanced Statistics</h2>
              <p className="text-neutral-gray-violet">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="card">
              
            </div>

        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

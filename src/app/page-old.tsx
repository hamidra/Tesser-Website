import Image from 'next/image'
import tesser from '../../public/tesseract.gif'
export default function Home() {
  return (
    <section className="flex w-full flex-col gap-10 p-4 md:flex-row md:justify-between md:p-20">
      <div className="flex flex-col items-start gap-8 text-center md:w-7/12 md:text-start">
        <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
          Open Collaboration Layer for Humans and AI to Thrive Together.
        </h1>
        <h2 className="text-lg">
          Declare your desired outcome as intents and let our network of agents
          seamlessly execute cross-chain activities to fulfill them for you,
          reducing complexities and increasing efficiency. <br /> From asset
          transfers to inter-blockchain communications, leverage our highly
          secure intent fulfillment network powered by zero-knowledge proofs for
          efficient cross-chain protocols and applications.
        </h2>
      </div>
      <div className="flex items-start justify-center md:w-5/12">
        <Image src={tesser} alt="Hypercube tesseract" />
      </div>
    </section>
  )
}

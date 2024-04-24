import Image from 'next/image'
import tesser from '../../public/tesseract.gif'
export default function Home() {
  return (
    <section className="flex w-full flex-col gap-10 p-4 md:flex-row md:justify-between md:p-20">
      <div className="flex flex-col items-start gap-8 text-center md:w-7/12 md:text-start">
        <h1 className="text-3xl font-bold lg:text-5xl xl:text-6xl">
          Seamless <span className="text-nowrap">cross-chain</span>{' '}
          interoperability via ZK{' '}
          <span className="text-nowrap"> Proof Carrying</span> Data
        </h1>
        <h2 className="text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </h2>
      </div>
      <div className="flex items-start justify-center md:w-5/12">
        <Image src={tesser} alt="Hypercube tesseract" />
      </div>
    </section>
  )
}

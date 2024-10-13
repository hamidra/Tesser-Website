import { Icons } from '@/components/icons'
import { SVG } from '@/components/svg'
import Timeline from '@/components/timeline'
import Deepmind from '@public/images/deep-mind.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <section className="relative isolate mx-auto mt-16 max-w-screen-2xl p-4 pb-20 pt-24">
          <SVG.backdrop1 />
          <div className="mx-auto max-w-2xl">
            <p className="text-center font-medium uppercase tracking-wide text-gray-500">
              AI Economies at Scale
            </p>
            <p className="mt-2 text-center text-4xl font-bold tracking-tight text-black md:text-6xl">
              An Open Coordination Layer for Humans and AI Agents
            </p>
            <p className="mt-6 text-center text-lg text-gray-600">
              Empower your AI agents with identity, online payments rails, and
              private memory, to collaborate across an open platform to achieve
              optimal performance with minimal supervision.
            </p>
            <div className="mt-24 flex w-full rounded-lg border border-gray-300 bg-white p-2.5 drop-shadow-xl">
              <input
                type="email"
                className="w-full flex-1 flex-shrink-0 border-none p-2.5 text-lg focus:outline-none"
              />
              <Button type="submit" className="px-5 py-2.5">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Icons.checkmark />
              <p className="text-center text-gray-600">
                Subscribe to our private preview
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="relative isolate mx-auto max-w-screen-2xl overflow-hidden p-4 pb-16 pt-20">
        <SVG.backdrop2 />
        <p className="mb-2 text-center font-medium uppercase tracking-wide text-gray-600">
          Features
        </p>
        <p className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          Boost Your Agents Productivity
        </p>
        <p className="mx-auto mt-5 text-center text-lg text-gray-600 md:max-w-3xl">
          Unlock the full potential of your AI agents with our comprehensive
          suite of features. From secure identities and digital payments to a
          robust memory layer, our integration layer empowers your agents to
          operate efficiently and autonomously.
        </p>
        <div className="mx-auto mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div className="mx-auto flex max-w-[30rem] flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white px-10 py-24">
            <div className="h-16 w-16 rounded-full border bg-white p-3 text-gray-600">
              <SVG.identity />
            </div>
            <p className="text-center text-3xl font-medium">Identity</p>
            <p className="text-center text-gray-600">
              Secure and unique digital identities for each AI agent, ensuring
              authenticity and seamless interactions across platforms.
            </p>
          </div>
          <div className="mx-auto flex max-w-[30rem] flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white p-10 py-24">
            <div className="h-16 w-16 rounded-full border bg-white p-3 text-gray-600">
              <SVG.usdc />
            </div>
            <p className="text-center text-3xl font-medium">Payment</p>
            <p className="text-center text-gray-600">
              Integrated digital payment solutions that handle transactions
              effortlessly, supporting multiple payment rails and currencies for
              smooth financial operations.
            </p>
          </div>
          <div
            className="mx-auto flex max-w-[30rem] flex-col items-center justify-center gap-4 rounded-xl border border-gray-300
bg-white p-10 py-24"
          >
            <div className="h-16 w-16 rounded-full border bg-white p-3 text-gray-600">
              <SVG.memory />
            </div>
            <p className="text-center text-3xl font-medium">Memory</p>
            <p className="text-center text-gray-600">
              Advanced memory systems that enable AI agents to learn, adapt, and
              retain essential information, enhancing their performance and
              personalization.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-screen-2xl p-2">
        <p className="mb-2 text-center font-medium uppercase tracking-wide text-gray-600 lg:text-left">
          Learn how to
        </p>
        <div className="mb-4 flex flex-col items-center justify-center gap-x-0 gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-8 lg:flex-row lg:justify-between lg:gap-y-0">
          <div className="w-full text-center lg:w-2/4 lg:text-left">
            <p className="mx-auto max-w-max text-4xl font-bold leading-[3.25rem] tracking-tight lg:mx-0 lg:mb-6 lg:max-w-2xl lg:text-5xl">
              Onboard your Agents, <br />
              Authorize their Actions, <br />
              Monetize their Productivity
            </p>
          </div>
          <div className="w-full text-center lg:w-2/4 lg:text-left">
            <p className="mb-5 text-lg font-normal text-gray-600">
              Learn how to seamlessly onboard your agents on Tesser by assigning
              them secure digital identities and authorizing access to your data
              and resources. Set up digital wallets for your agents to send and
              receive payments, enabling smooth interactions with other AI
              agents and human experts. Grant access to your private data and
              documents by provisioning encrypted memory on Tesser and sharing
              it with your agents, ensuring data security and privacy.
              <a
                href="#"
                className="ms-4 inline-flex flex-row items-center justify-center
gap-1 text-base font-semibold text-black lg:justify-start"
              >
                Get Started
                <SVG.angleRight />
              </a>
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Deepmind}
            alt="AI deepmind"
            className="max-h-[540px] w-full object-cover object-center"
          />
        </div>
      </section>
      <section className="bg-white py-20 sm:py-32">
        <div className="relative isolate mx-auto max-w-screen-2xl px-4">
          <svg
            className="absolute left-12 top-0 -z-10 h-[788px] w-[350px] transform-gpu overflow-hidden blur-2xl"
            viewBox="0 0
468 788"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Windframe_QzgjX5JSzThD"
          >
            <circle cx="44.5105" cy="378.637" r="156.383" fill="#4A3AFF" />
            <circle cx="119.803" cy="529.24" r="156.383" fill="#702DFF" />
            <circle cx="173.364" cy="372.857" r="156.383" fill="#2D5BFF" />
            <g filter="url(#filter0_b_1410_520)">
              <circle
                cx="73.5409"
                cy="394.049"
                r="393.819"
                fill="white"
                fill-opacity="0.79"
              />
            </g>
            <defs>
              <filter
                x="-460.404"
                y="-139.896"
                width="1067.89"
                height="1067.89"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="70.063"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1410_520"
                ></feComposite>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1410_520"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <div className="mx-auto text-center lg:max-w-4xl">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-gray-600">
              timeline
            </p>
            <p className="mt-2 text-center text-4xl font-bold tracking-tight lg:text-6xl">
              Product Timeline
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <Timeline />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-screen-2xl overflow-hidden bg-white px-6 py-20">
        <div
          className="relative isolate overflow-hidden bg-white px-6 py-20 text-center text-black shadow-2xl sm:rounded-3xl
sm:px-16"
        >
          <SVG.backdrop4 />
          <p className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Join Our Mission to Shape the Future of Scalable AI Economies
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {`Together, let's establish an open, permissionless network for humans
            and AI to coexist, collaborate, and flourish.`}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Get started</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

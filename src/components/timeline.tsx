function TimelineStep({ number, deadline, title, description }) {
  return (
    <div className="relative flex flex-col items-center gap-6 sm:flex-row">
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-500 bg-white text-4xl
font-bold"
      >
        {number}
      </div>
      <div className="w-full flex-1 flex-shrink-0">
        <p className="mb-1.5 text-center text-xs font-semibold text-black sm:text-left">
          {deadline}
        </p>
        <dt className="text-center text-xl font-semibold leading-7 text-black sm:text-left">
          {title}
        </dt>
        <dd className="mt-2 text-center text-base leading-7 text-gray-500 sm:text-left">
          {description}
        </dd>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-y-16 lg:max-w-none">
      <TimelineStep
        number={1}
        deadline="Q1 2024"
        title="Payment & Identity SDKs & App"
        description=""
      />
      <TimelineStep
        number={2}
        deadline="Q2 2025"
        title="Identity and Authorization layer"
        description=""
      />
      <TimelineStep
        number={3}
        deadline="Q3 2025"
        title="Development Network & Onboarding"
        description=""
      />
      <TimelineStep
        number={4}
        deadline="Q4 2025"
        title="Testnet Launch"
        description=""
      />
    </dl>
  )
}

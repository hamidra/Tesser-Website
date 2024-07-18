'use client'
import { Button } from '@/components/ui/button'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center p-48">
      <div className="prose m-auto flex flex-col justify-center lg:prose-lg">
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  )
}

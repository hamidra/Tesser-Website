import Link from 'next/link'
import { Card, CardHeader, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/posts'

export default function PostCard({ meta }) {
  let { author, slug, title, description, hero_image } = meta
  hero_image = resolveImage(hero_image)
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <div className="flex w-[300px] flex-col gap-6 md:w-[400px] ">
          <div className="relative aspect-[4/3]">
            <Image
              src={hero_image}
              fill
              alt={`${title} hero image`}
              className="rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="gap-2">
            <div className="text-xl font-semibold">{title}</div>
            <div className="text-l font-light text-muted-foreground">
              {description}
            </div>
            <div className="flex flex-row justify-between text-sm">{`by ${author}`}</div>
          </div>
        </div>
      </Link>
    </>
  )
}

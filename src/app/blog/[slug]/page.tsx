// pages/blog/[slug].js

import Image from 'next/image'
import { siteConfig } from '@/config/site'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import imgLink from '@pondorasti/remark-img-links'
import { getPostBySlug, getPostsMeta, resolveImage } from '@/lib/posts'
import 'katex/dist/katex.min.css'
import { formatDate } from '@/lib/utils'

export default async function BlogTemplate({ params }) {
  let imageBase = siteConfig.links.post_images
  let { slug } = params

  let post = await getPostBySlug(slug)
  if (!post) throw new Error('No post was found!')

  let { frontmatter, markdownBody } = post
  let { hero_image, title, author, date } = frontmatter
  let resolved_hero_image = await resolveImage(hero_image)
  return (
    <div className="p-4">
      <article className="prose m-auto lg:prose-lg">
        <div>
          <div className="my-4 text-4xl font-semibold lg:my-8 lg:text-6xl">
            {title}
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold lg:text-base">
              By: {author}
            </div>
            <div className="text-xs font-thin text-muted-foreground lg:text-sm">
              {formatDate(date)}
            </div>
          </div>
        </div>
        <div className="relative my-5 h-96 w-full">
          <Image
            src={resolved_hero_image}
            fill
            alt={`${title} hero image`}
            className="!m-0 rounded-lg object-cover shadow-md"
          />
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[
              remarkGFM,
              remarkMath,
              [imgLink, { absolutePath: imageBase }],
            ]}
            rehypePlugins={[rehypeKatex]}
          >
            {markdownBody}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  let meta = await getPostsMeta()
  return meta.map((m) => {
    slug: m.slug
  })
}

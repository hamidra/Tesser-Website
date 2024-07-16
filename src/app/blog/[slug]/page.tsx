// pages/blog/[slug].js

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { getPostBySlug, getPostsMeta } from '@/lib/posts'
import 'katex/dist/katex.min.css'

export default async function BlogTemplate({ params }) {
  let { slug } = params
  let { frontmatter, markdownBody } = await getPostBySlug(slug)
  return (
    <div>
      <article className="prose m-auto lg:prose-xl">
        <div>
          <h1>{frontmatter.title}</h1>
        </div>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGFM, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {markdownBody}
          </ReactMarkdown>
        </div>
        <h2>Written By: {frontmatter.author}</h2>
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

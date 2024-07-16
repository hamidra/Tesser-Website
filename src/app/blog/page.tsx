import { getPostsMeta } from '@/lib/posts'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
function PostCard({ meta }) {
  let { slug, title } = meta
  return (
    <div>
      <Link href={`/blog/${slug}`}>{title}</Link>
    </div>
  )
}

export default async function PostsList() {
  let postsMeta = await getPostsMeta()
  return (
    <div>
      {postsMeta.map((meta, id) => (
        <PostCard key={id} meta={meta} />
      ))}
    </div>
  )
}

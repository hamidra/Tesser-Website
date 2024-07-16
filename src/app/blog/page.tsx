import { getPostsMeta } from '@/lib/posts'
import PostCard from '@/components/post-card'
export default async function PostsList() {
  let postsMeta = await getPostsMeta()
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-2 md:p-16">
      {postsMeta.map((meta, id) => (
        <>
          <PostCard key={id} meta={meta} />
          <PostCard key={id} meta={meta} />
          <PostCard key={id} meta={meta} />
          <PostCard key={id} meta={meta} />
          <PostCard key={id} meta={meta} />
          <PostCard key={id} meta={meta} />
        </>
      ))}
    </div>
  )
}

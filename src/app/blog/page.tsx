import { getPostsMeta } from '@/lib/posts'
import PostCard from '@/components/post-card'
export default async function PostsList() {
  let postsMeta = await getPostsMeta().catch((err) => console.error(err))
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 p-2 md:p-16">
      {postsMeta
        ?.filter((meta) => meta.published)
        ?.sort((a, b) => {
          try {
            let dateA = new Date(a.date).getTime()
            let dateB = new Date(b.date).getTime()
            return dateB - dateA
          } catch (err) {
            console.error('Error sorting posts:', err)
            // Fallback to original order if sorting fails
            return 0
          }
        })
        ?.map((meta, id) => (
          <>
            <PostCard key={id} meta={meta} />
          </>
        ))}
    </div>
  )
}

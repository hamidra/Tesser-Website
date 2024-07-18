import matter from 'gray-matter'
import { siteConfig } from '@/config/site'

export async function getPost(path: string) {
  const post = await fetch(path).then((res) => res.text())
  const data = matter(post)

  return {
    frontmatter: data?.data,
    markdownBody: data?.content,
    excerpt: data?.excerpt,
  }
}

export async function getPostBySlug(slug: string) {
  let base = siteConfig.links.posts
  let url = base && slug && new URL(`${slug}.md`, base).href
  let res = url && (await fetch(url).then((res) => res.json()))
  let downloadUrl = res?.download_url
  return downloadUrl && getPost(downloadUrl)
}

export async function resolveImage(path: string) {
  let base = siteConfig.links.post_images
  try {
    // check of path is absolute or empty
    let url = path && new URL(`${path}`).href
    return url
  } catch {
    // if path is relatice resolve it against the base url
    let url = path && new URL(`${path}`, base).href
    return url
  }
}

export async function getPostsUrls(path: string = siteConfig.links.posts) {
  const posts = await fetch(path).then((res) => res.json())
  const postUrls =
    posts?.map((post) => post.download_url)?.filter((post_url) => post_url) ||
    []
  return postUrls
}

export async function getPostsMeta(path: string = siteConfig.links.posts) {
  let urls = await getPostsUrls(path)
  const pendingMeta = urls?.map((url) => getPost(url)) || []
  const meta = (await Promise.all(pendingMeta)).map((data) => data.frontmatter)
  return meta
}

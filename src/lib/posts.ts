import matter from 'gray-matter'
import { siteConfig } from '@/config/site'

export async function getPost(path: string) {
  console.log('getPost' + path)
  const res = await fetch(path)
  const post = await res.text()
  const data = matter(post)

  return {
    frontmatter: data.data,
    markdownBody: data.content,
  }
}

export async function getPostBySlug(slug: string) {
  let base = siteConfig.links.posts
  console.log('base: ' + base)
  let url = base && slug && new URL(`${slug}.md`, base).href
  let res = await (await fetch(url)).json()
  console.log('getPostBySlug' + url)
  let downloadUrl = res.download_url
  return getPost(downloadUrl)
}

export async function getPostsUrls(path: string = siteConfig.links.posts) {
  const res = await fetch(path)
  const posts: Array<{ download_url: string }> = await res.json()
  const postUrls = posts
    .map((post) => post.download_url)
    .filter((post_url) => post_url)
  return postUrls
}

export async function getPostsMeta(path: string = siteConfig.links.posts) {
  let urls = await getPostsUrls(path)
  console.log(urls)
  const pendingMeta = urls.map((url) => getPost(url))
  const meta = (await Promise.all(pendingMeta)).map((data) => data.frontmatter)
  return meta
}

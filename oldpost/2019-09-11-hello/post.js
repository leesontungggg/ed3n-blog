export default {
  title: `This is my first blog!`,
  tags: ['first blog', 'life'],
  spoiler: "This is my first blog on ed3n.life",
  getContent: () => import('./document.mdx'),
}
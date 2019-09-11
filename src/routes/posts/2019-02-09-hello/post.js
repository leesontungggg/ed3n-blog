export default {
  title: `Hello New Blog!`,
  tags: ['react', 'navi'],
  spoiler: "This is the testing of my new book",
  getContent: () => import('./document.mdx'),
}
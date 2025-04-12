export default {
  name: 'board',
  type: 'document',
  title: 'Board of Trustees',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}

export default {
  name: 'stories',
  type: 'document',
  title: 'Stories',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of story article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your story article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Short Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'showOnHomepage',
      type: 'boolean',
      title: 'Show on main page?',
      description: 'Toggle this to display this story on the home page.',
    },
    {
      name: 'upcoming',
      type: 'boolean',
      title: 'Upcoming Story?',
      description: 'Toggle this to display tag this story as an upcoming story.',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
      description: 'The date of the story.',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      description: 'Add tags to categorize your story',
    },
  ],
}

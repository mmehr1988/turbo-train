export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'external',
      title: 'External',
      type: 'array',
      of: [{ type: 'externalLink' }],
      options: {
        // IMPORTANT: this is added so that when React.memo is added
        // to cardFront for rerendering purposes, the icons don't reorder as it sometimes happens
        sortable: false,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};

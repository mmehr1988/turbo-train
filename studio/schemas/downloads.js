export default {
  type: 'document',
  name: 'downloads',
  title: 'Downloads',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'document',
      title: 'Document',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};

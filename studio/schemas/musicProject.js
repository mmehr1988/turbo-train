export default {
  name: 'musicProject',
  title: 'Music Project',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'releaseType',
      title: 'Release Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'musicLink',
      title: 'Music Link',
      type: 'array',
      of: [{ type: 'externalLink' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'labelLink',
      title: 'Label Link',
      type: 'array',
      of: [{ type: 'externalLink' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'blockContent',
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
  ],
};

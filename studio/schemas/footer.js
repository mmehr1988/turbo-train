export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'externalLink' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'footerDownloads',
      title: 'Footer Downloads',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'downloads' } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default {
  name: 'musicCategory',
  title: 'Music Category',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'musicProject' } }],
    },
  ],
};

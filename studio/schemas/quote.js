export default {
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Source on the web',
    },
  ],
};

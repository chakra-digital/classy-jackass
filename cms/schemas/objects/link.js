export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Select the type of link',
      description:
        'External links go to other websites using the format `https://www.google.com`. Internal links should be relative URLs to pages that exist on thedonut.co',
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          { title: 'External', value: 'external' },
          { title: 'Internal', value: 'internal' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'URL',
      name: 'href',
      description: 'Use only a qualified URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Open in new tab?',
      name: 'blank',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent?.linkType !== 'external', // hidden if link type is not external
    },
    {
      title: 'Relative URL',
      name: 'internalLink',
      description: 'Enter a relative url (e.g. /about-us)',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'internal', // hidden if link type is not external
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: true,
        }),
    },
  ],
};

export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Navigation Item Text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'navItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    },
    {
      title: 'Has Subnav?',
      name: 'hasSubnav',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Sub Navigation',
      name: 'subLinks',
      type: 'array',
      of: [{ type: 'subNavItem' }],
      hidden: ({ parent }) => !parent?.hasSubnav,
    },
  ],
};

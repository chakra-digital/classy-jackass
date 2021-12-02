import React from 'react';

export default {
  name: 'subNavItem',
  title: 'Sub Navigation Item',
  type: 'object',
  fields: [
    {
      title: 'Item Text',
      name: 'text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Emoji Icon',
      name: 'emoji',
      type: 'string',
      hidden: ({ document }) => document.navId !== 'primaryNav',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, options) => options.parent.text,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
      emoji: 'emoji',
      slug: 'slug',
    },
    prepare(selection) {
      const { title, emoji, slug } = selection;
      return {
        title: title,
        subtitle: `/${slug.current}`,
        media: () => <span>{emoji}</span>,
      };
    },
  },
};

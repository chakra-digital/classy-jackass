import React from 'react';
import { RiMenuLine as icon } from 'react-icons/ri';
import { iconStyle } from '../../deskStructure';

export default {
  icon: () => <span style={iconStyle}>🧭</span>,
  title: 'Navigation',
  name: 'navigation',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Navigation ID',
      name: 'navId',
      type: 'string',
    },
    {
      title: 'Navigation Item',
      name: 'items',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
  ],
};

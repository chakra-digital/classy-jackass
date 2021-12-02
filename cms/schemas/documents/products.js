import React from 'react';
import { RiGiftFill as icon } from 'react-icons/ri';
import { iconStyle } from '../../deskStructure';

export default {
  icon: () => <span style={iconStyle}>🎁</span>,
  title: 'Products',
  name: 'products',
  type: 'document',
  fields: [
    {
      title: 'Product Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'SMS', value: 'sms' },
          { title: 'Email', value: 'email' },
        ],
      },
    },
    {
      title: 'Product Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Product Description',
      name: 'description',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Delivery Schedule',
      name: 'deliverySchedule',
      type: 'string',
    },
    {
      title: 'Days Delivered',
      name: 'daysDelivered',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'M', value: 'm' },
          { title: 'T', value: 't' },
          { title: 'W', value: 'w' },
          { title: 'Th', value: 'th' },
          { title: 'F', value: 'f' },
        ],
        layout: 'tags',
      },
    },
    {
      title: 'Time To Read (In Minutes)',
      description:
        'The number of minutes it should take the user to read this product front to back.',
      name: 'timeToRead',
      type: 'number',
      validation: Rule => Rule.precision(2),
    },
    {
      title: 'Product ID',
      description:
        'DO NOT MODIFY: These values are used in subscription logic and changing them could result in users not being subscribed to certain products.',
      name: 'productId',
      type: 'string',
    },
    {
      title: 'Subscribe ID',
      description:
        'DO NOT MODIFY: These values are used in subscription logic and changing them could result in users not being subscribed to certain products.',
      name: 'subscribeId',
      type: 'string',
    },
  ],

  // preview: {
  //   prepare: () => {
  //     return {
  //       title: 'Homepage',
  //     };
  //   },
  // },
};

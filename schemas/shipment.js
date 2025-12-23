export default {
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    {
      name: 'trackingId',
      title: 'Tracking ID',
      type: 'string',
      validation: (Rule) => Rule.required().uppercase().error('Tracking ID is required and must be uppercase'),
      description: 'The unique ID used for tracking (e.g., SHIP-12345). Forces uppercase.',
      options: {
        isUnique: true,
      },
    },
    {
      name: 'status',
      title: 'Current Status',
      type: 'string',
      description: 'A short status summary (e.g., "In Transit", "Customs Cleared").',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'clientMobile',
      title: 'Client Mobile Number',
      type: 'string',
      description: 'The mobile number of the client responsible for this shipment. Used for verification.',
      validation: (Rule) => Rule.required().min(10).error('A valid mobile number is required.'),
    },
    {
      name: 'timeline',
      title: 'Timeline Events',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Event',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
              validation: (Rule) => Rule.required(),
              initialValue: () => new Date().toISOString(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
            },
            prepare(selection) {
              const { title, date } = selection;
              return {
                title: title,
                subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
              };
            },
          },
        },
      ],
      description: 'Add events to the shipment timeline. Most recent event should be logically last, but the UI will handle sorting or display order.',
    },
  ],
  preview: {
    select: {
      title: 'trackingId',
      subtitle: 'status',
    },
  },
};

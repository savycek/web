import { defineType, defineField } from 'sanity'

export const skillType = defineType({
    name: 'skill',
    title: 'Dovednosti',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'iconSlug',
            title: 'SimpleIcons Slug',
            description: 'Název ikony ze simpleicons.org.',
            type: 'string',
        }),

        defineField({
            name: 'customIcon',
            title: 'Vlastní ikona',
            type: 'image',
            hidden: ({document}) => !!document?.iconSlug,
        }),

        defineField({
            name: 'category',
            title: 'Kategorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Nástroje', value: 'tools' },
                    { title: 'Kódování', value: 'coding' }
                ],
                layout: 'radio',
            },
            validation: (rule) => rule.required(),
        }),
    ],
})
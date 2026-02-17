import { defineType, defineField } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Projekty',
    type: 'document',
    fields: [
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'title',
            title: 'Project name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Project image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
        }),
    ],
})
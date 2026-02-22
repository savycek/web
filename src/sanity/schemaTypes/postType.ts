import {defineField, defineType} from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Příspěvky',
    type: 'document',
    fields: [
        {
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'title',
            title: 'Nadpis',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'URL adresa (Slug)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: async (value, context) => {
                    const { document, getClient } = context;
                    const client = getClient({ apiVersion: '2024-02-22' });
                    const id = document._id.replace(/^drafts\./, '');

                    const params = {
                        draft: `drafts.${id}`,
                        published: id,
                        slug: value,
                        language: document.language,
                    };

                    const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && language == $language][0]._id)`;
                    return await client.fetch(query, params);
                }
            },
        },
        {
            name: 'publishedAt',
            title: 'Datum vydání',
            type: 'datetime',
        },
        {
            name: 'mainImage',
            title: 'Hlavní náhledový obrázek',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'showInFeed',
            title: 'Zobrazit na feedu',
            type: 'boolean',
            initialValue: true,
        },
        {
            name: 'excerpt',
            title: 'Perex',
            description: 'Tento text se zobrazí na hlavní stránce v seznamu článků.',
            type: 'text',
            rows: 4,
        },
        {
            name: 'body',
            title: 'Obsah příspěvku',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternativní text',
                            options: { isHighlighted: true }
                        }
                    ]
                }
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `od: ${author}` }
        },
    },
})
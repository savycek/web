import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { House, Compass } from "lucide-react";
import AnimatedPostHeader from "@/components/feed/AnimatedPostHeader";
import PortableTextContent from "@/components/feed/PortableTextContent";

const builder = imageUrlBuilder(client)
function urlFor(source) {
    return builder.image(source)
}

export default async function FeedPostPage({ params }) {
    const { slug, locale } = await params;

    const query = `*[_type == "post" && slug.current == $slug && language == $locale][0]`
    const post = await client.fetch(query, { slug, locale })

    if (!post) {
        notFound()
    }

    const translations = {
        cs: {
            home: 'Domů',
            noContent: 'Tento článek zatím nemá žádný obsah.',
            imageFallback: 'Obrázek',
            dateLocale: 'cs-CZ'
        },
        en: {
            home: 'Home',
            noContent: 'This article has no content yet.',
            imageFallback: 'Image',
            dateLocale: 'en-US'
        }
    };

    const t = translations[locale] || translations.cs;
    const myPortableTextComponents = {
        types: {
            image: ({ value }) => {
                if (!value?.asset) return null;
                return (
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || t.imageFallback}
                        className="w-full rounded-xl border border-white/10 my-8"
                    />
                )
            }
        }
    }

    let formattedDate = '';
    if (post.publishedAt) {
        const rawDate = new Date(post.publishedAt).toLocaleDateString(t.dateLocale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        formattedDate = rawDate.charAt(0).toUpperCase() + rawDate.slice(1);
    }

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-white/20 relative">
            <div className="max-w-200 mx-auto flex flex-col gap-10 pt-10 pb-5 px-4 md:px-0">

                <AnimatedPostHeader
                    title={post.title}
                    formattedDate={formattedDate}
                    locale={locale}
                    homeTranslation={t.home}
                />

                {post.body ? (
                    <PortableTextContent value={post.body} />
                ) : (
                    <p className="text-[#8E8E93]">{t.noContent}</p>
                )}

            </div>
        </div>
    )
}
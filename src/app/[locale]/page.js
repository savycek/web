import { client } from "@/sanity/lib/client";
import HomeClient from "@/components/clients/HomeClient.jsx";
import { getLocale } from 'next-intl/server';

const DATA_QUERY = `{
  "projects": *[_type == "project" && language == $language] | order(_createdAt desc) {
    _id,
    title,
    description,
    "img": mainImage.asset->url
  },
  "tools": *[_type == "skill" && category == "tools"] | order(title asc) {
    _id, title, iconSlug, "customIcon": customIcon.asset->url
  },
  "coding": *[_type == "skill" && category == "coding"] | order(title asc) {
    _id, title, iconSlug, "customIcon": customIcon.asset->url
  }
}`;

export const revalidate = 60;

export default async function Home() {

  const locale = await getLocale();
  const data = await client.fetch(DATA_QUERY, { language: locale });

  return <HomeClient
      projects={data.projects}
      tools={data.tools}
      coding={data.coding}
  />;
}
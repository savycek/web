import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import "@/app/globals.css";
import Footer from "@/components/Footer.jsx";
import LanguageSwitch from "@/components/LanguageSwitch";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
    variable: "--font-jakarta-sans",
    subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savycek.eu";

export const metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: "Dominik",
    },

    description: "Jsem 17letý student programování z ČR. Věnuji se vývoji webových aplikací (Next.js), aplikací ve Swift & SwiftUI, hernímu vývoji a grafice.",
    keywords: ["Dominik", "Roušavý", "Dominik Roušavý", "Programátor", "Web Developer", "Swift", "SwiftUI", "Next.js", "React", "Czech Republic", "Portfolio"],

    authors: [{ name: "Dominik" }],
    creator: "Dominik",
    publisher: "Dominik",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    openGraph: {
        title: "Dominik",
        description: "Jsem 17letý student programování. Jsem z České republiky, věnuji se vývoji webových aplikací, aplikací ve Swift & SwiftUI, hernímu vývoji a vektorové grafice.",
        url: SITE_URL,
        siteName: "Dominik Portfolio",
        locale: "cs_CZ",
        type: "website",
        images: [
            {
                url: "/Thumbnails/thumbnail.png",
                width: 1200,
                height: 675,
                alt: "Thumbnail",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Dominik",
        description: "Jsem 17letý student programování. Jsem z České republiky, věnuji se vývoji webových aplikací, aplikací ve Swift & SwiftUI, hernímu vývoji a vektorové grafice.",
        images: ["/Thumbnails/thumbnail.png"],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    const messages = await getMessages();
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dominik',
        url: SITE_URL,
        jobTitle: 'Student & Developer',
        worksFor: {
            '@type': 'Organization',
            name: 'Freelance'
        },
        description: metadata.description,
        image: `${SITE_URL}/Thumbnails/thumbnail.png`,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'CZ'
        }
    };

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} antialiased`}
        >
        <NextIntlClientProvider messages={messages}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <LanguageSwitch/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
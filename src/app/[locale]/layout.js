import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// Upravené cesty o úroveň výš, protože jsme nyní v [locale]
import "@/app/globals.css";
import Footer from "@/components/Footer.jsx";

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

export const metadata = {
    title: "Dominik",
    description: "Jsem 17letý student programování. Jsem z České republiky, věnuji se vývoji webových aplikací, aplikací ve Swift & SwiftUI, hernímu vývoji a vektorové grafice.",
};

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} antialiased`}
        >
        <NextIntlClientProvider messages={messages}>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
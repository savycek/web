import ICAL from 'ical.js';
import { NextResponse } from 'next/server';

export async function GET() {
    const ICLOUD_URL = 'https://p153-caldav.icloud.com/published/2/MTgwODk1NzE2MDExODA4OZGktsbzr123ReecDig57Sx6Ak6gB5b4wBiaimYPXM8GyaVcj9iDOlK0SfJIHIGdr0LRcj10s5iUQP-HjNEXARg';

    try {
        const response = await fetch(ICLOUD_URL, { next: { revalidate: 60 } }); // Cache na 1 minutu
        const text = await response.text();

        const jcalData = ICAL.parse(text);
        const vcalendar = new ICAL.Component(jcalData);
        const vevents = vcalendar.getAllSubcomponents('vevent');

        const processedEvents = vevents.map(vevent => {
            const event = new ICAL.Event(vevent);
            return {
                id: event.uid,
                title: event.summary,
                start: event.startDate.toJSDate(),
                end: event.endDate.toJSDate(),
            };
        });

        return NextResponse.json(processedEvents);
    } catch (error) {
        console.error("iCloud Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
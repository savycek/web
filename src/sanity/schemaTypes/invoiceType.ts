import { defineField, defineType } from 'sanity'
import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react'

export const invoiceType = defineType({
    name: 'invoice',
    title: 'Vyúčtování',
    type: 'document',
    icon: FileText,
    fields: [
        defineField({
            name: 'title',
            title: 'Datové rozpětí (např. 1.1. - 1.3.2026)',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'status',
            title: 'Stav úhrady',
            type: 'string',
            options: {
                list: [
                    { title: 'Zaplaceno', value: 'paid' },
                    { title: 'Připraveno', value: 'pending' },
                    { title: 'Zrušeno', value: 'cancelled' },
                ],
                layout: 'radio'
            },
            initialValue: 'pending',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'amount',
            title: 'Částka (Kč)',
            type: 'number',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'issuedAt',
            title: 'Datum vystavení',
            type: 'date',
            initialValue: () => new Date().toISOString().split('T')[0]
        }),
        defineField({
            name: 'dueAt',
            title: 'Datum splatnosti',
            type: 'date',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'invoicePdf',
            title: 'Vyúčtování (PDF)',
            type: 'file',
            options: { accept: '.pdf' }
        })
    ],
    preview: {
        select: {
            title: 'title',
            status: 'status',
            amount: 'amount',
            dueAt: 'dueAt'
        },
        prepare({ title, status, amount, dueAt }) {
            const isPaid = status === 'paid'

            return {
                title: title,
                subtitle: `${amount} Kč | ${isPaid ? 'ZAPLACENO' : 'Splatnost: ' + dueAt}`,
                media: isPaid ? CheckCircle : AlertCircle
            }
        }
    }
})
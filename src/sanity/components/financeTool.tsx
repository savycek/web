import { useEffect, useState } from 'react'
import { useClient } from 'sanity'
import { Card, Container, Flex, Heading, Stack, Text, Badge, Button, Box, Spinner } from '@sanity/ui'
import { DownloadIcon, DocumentTextIcon } from '@sanity/icons'

type Invoice = {
    _id: string
    title: string
    amount: number
    status: 'paid' | 'pending' | 'cancelled'
    issuedAt: string
    dueAt: string
    invoiceUrl?: string
}

export function FinanceTool() {
    const client = useClient({ apiVersion: '2024-01-01' })
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const query = `*[_type == "invoice"] | order(issuedAt desc) {
            _id, title, amount, status, issuedAt, dueAt,
            "invoiceUrl": invoicePdf.asset->url
        }`

        client.fetch(query).then((data) => {
            setInvoices(data)
            setLoading(false)
        })
    }, [client])

    if (loading) {
        return (
            <Flex align="center" justify="center" height="fill" style={{ minHeight: '100vh' }}>
                <Spinner size={3} />
            </Flex>
        )
    }

    return (
        <Container width={2} padding={4} style={{ minHeight: '100vh', boxSizing: 'border-box' }}>
            <Stack space={5} marginTop={5}>

                <Box marginBottom={4}>
                    <Heading size={4} as="h1">Vaše vyúčtování</Heading>
                    <Text size={2} muted style={{ marginTop: '10px' }}>
                        Přehled plateb a vyúčtování za správu webu.
                    </Text>
                </Box>

                <Stack space={3}>
                    {invoices.map((invoice) => {
                        const isPaid = invoice.status === 'paid'
                        const isPending = invoice.status === 'pending'
                        const isCancelled = invoice.status === 'cancelled'

                        const today = new Date()
                        today.setHours(0, 0, 0, 0)

                        const dueDate = new Date(invoice.dueAt)
                        dueDate.setHours(0, 0, 0, 0)

                        const isOverdue = isPending && dueDate < today

                        return (
                            <Card
                                key={invoice._id}
                                padding={4}
                                radius={3}
                                border
                                style={{
                                    backgroundColor: '#161616',
                                    borderColor: isOverdue ? 'rgba(244, 63, 94, 0.6)' : (isPending ? 'rgba(245, 158, 11, 0.3)' : '#222')
                                }}
                            >
                                <Flex align="center" gap={4}>

                                    <Box>
                                        <Card
                                            padding={3}
                                            radius={2}
                                            tone={isPaid ? 'positive' : isOverdue ? 'critical' : isPending ? 'caution' : 'default'}
                                            style={{
                                                background: isPaid ? 'rgba(52, 211, 153, 0.1)' :
                                                    isOverdue ? 'rgba(244, 63, 94, 0.1)' :
                                                        'rgba(251, 191, 36, 0.1)'
                                            }}
                                        >
                                            <DocumentTextIcon style={{ fontSize: '32px' }} />
                                        </Card>
                                    </Box>

                                    <Box flex={1}>
                                        <Text size={3} weight="bold" style={{ color: isOverdue ? '#fca5a5' : 'inherit' }}>
                                            {invoice.title}
                                        </Text>
                                        <Flex gap={2} marginTop={2} align="center">
                                            <Text size={1} muted>
                                                {isPaid ? `Uhrazeno ${invoice.amount} Kč` : `K úhradě: ${invoice.amount} Kč`}
                                            </Text>
                                            <Text size={1} muted>•</Text>

                                            <Text size={1} style={{ color: isOverdue ? '#f43f5e' : (isPending ? '#fbbf24' : '#888') }}>
                                                {isPaid ? 'Uzavřeno' : `Splatnost: ${new Date(invoice.dueAt).toLocaleDateString('cs-CZ')}`}
                                            </Text>
                                        </Flex>
                                    </Box>

                                    <Flex direction="column" align="flex-end" gap={3}>
                                        <Badge
                                            mode="outline"
                                            tone={isPaid ? 'positive' : isOverdue ? 'critical' : isPending ? 'caution' : 'default'}
                                            padding={2}
                                            radius={2}
                                        >
                                            {isPaid ? 'ZAPLACENO' : isOverdue ? 'PO SPLATNOSTI' : isPending ? 'PŘIPRAVENO' : 'ZRUŠENO'}
                                        </Badge>

                                        {invoice.invoiceUrl && (
                                            <Button
                                                as="a"
                                                href={`${invoice.invoiceUrl}?dl=`}
                                                target="_blank"
                                                mode="ghost"
                                                text="Vyúčtování"
                                                icon={DownloadIcon}
                                                fontSize={1}
                                                padding={2}
                                                disabled={!invoice.invoiceUrl}
                                            />
                                        )}
                                    </Flex>

                                </Flex>
                            </Card>
                        )
                    })}

                    {invoices.length === 0 && (
                        <Card padding={5} radius={2} border style={{ textAlign: 'center', opacity: 0.5 }}>
                            <Text>Zatím zde nejsou žádná vyúčtování.</Text>
                        </Card>
                    )}

                </Stack>
            </Stack>
        </Container>
    )
}
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) => {

    const {currentUser} = context
    const myEmail = 'rousavy@icloud.com'

    const isMe = currentUser?.email === myEmail

    return S.list()
        .title('Průzkumník')
        .items([
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() !== 'translation.metadata' &&
                    item.getId() !== 'media.tag' &&
                    item.getId() !== 'invoice'
            ),

            ...(isMe ? [
                S.divider(),

                S.documentTypeListItem('invoice')
                    .title('Správa vyúčtování')
            ] : [])
        ])
}
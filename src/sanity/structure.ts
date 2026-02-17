import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Průzkumník')
        .items([
            S.divider(),

            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() !== 'translation.metadata' &&
                    item.getId() !== 'media.tag'
            ),
        ])
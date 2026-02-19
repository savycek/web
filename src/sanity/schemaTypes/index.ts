import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { skillType } from './skillType'
import { projectType } from './projectType'
import { invoiceType } from './invoiceType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, projectType, skillType, invoiceType],
}
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import skills from './skills'
import contact from './contact'
import details from './details';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    works, testimonials, brands, skills, contact, details
  ]),
})

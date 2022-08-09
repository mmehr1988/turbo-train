// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import quote from './quote';
import abouts from './abouts';
import hero from './hero';
import works from './works';
import music from './music';
import musicProject from './musicProject';
import footer from './footer';
import externalLinks from './externalLinks';
import contact from './contact';
import downloads from './downloads';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    blockContent,
    quote,
    downloads,
    /* Your types here! */
    works,
    abouts,
    hero,
    musicProject,
    music,
    footer,
    externalLinks,
    contact,
  ]),
});

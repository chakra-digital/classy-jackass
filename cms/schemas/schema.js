// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import homepage from './documents/homepage';
// import navigation from './documents/navigation';
// import products from './documents/products';
// import seoObject from './objects/seo-object';
// Objects
// import link from './objects/link';
// import navItem from './objects/navItem';
// import subNavItem from './objects/subNavItem';
import rte from './objects/rte';
import homepageObject from './objects/homepage-object';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    // products,
    homepageObject,
    // navigation,
    // seoObject,
    rte,
    // link,
    // navItem,
    // subNavItem,
  ]),
});

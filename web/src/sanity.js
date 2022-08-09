// /src/sanity.js
import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanity = SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanity);

// .auto('format') => Set auto=format to automatically return an image in webp formatting if the browser supports it.

export const urlFor = (source) => builder.image(source);

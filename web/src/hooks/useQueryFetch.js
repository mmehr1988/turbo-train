import { useQuery } from 'react-query';
import { sanity } from '../sanity';

// ========================================================
// SANITY
// ========================================================

const fetchSanityData = (query) => sanity.fetch(query);

// ========================================================
// QUERY CHECK
// ========================================================

const queryGlobal = (queryObject) => {
  const queryString =
    queryObject.queryDoc === 'downloads'
      ? ` *[_type == 'downloads'] {
          title,
          "link": document.asset->url
      }`
      : queryObject.queryOptions === undefined
      ? `*[ _type == '${queryObject.queryDoc}']`
      : `*[ _type == '${queryObject.queryDoc}' ] | ${queryObject.queryOptions}`;

  return queryString;
};

// ========================================================
// HOOK
// ========================================================

export const useQueryGlobal = (queryObject) => {
  return useQuery([`${queryObject.queryName}`], () =>
    fetchSanityData(queryGlobal(queryObject))
  );
};

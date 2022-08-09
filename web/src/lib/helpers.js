import _ from 'lodash';

// ==========================================================
// DEBOUNCE
// ==========================================================

export const lodashDebounce = _.debounce((callback) => {
  callback();
}, 600);

export const debounceNavDesktop = _.debounce((callback) => {
  callback();
}, 600);

export const debounceNavMobile = _.debounce((callback) => {
  callback();
}, 300);

export const debounceShort = _.debounce((callback) => {
  callback();
}, 300);

export const debounceLong = _.debounce((callback) => {
  callback();
}, 600);

export const capitalLodash = (text) => _.capitalize(text);

// ==========================================================
// LODASH
// ==========================================================
export const lodashIsEqual = (obj1, obj2) => _.isEqual(obj1, obj2);

export const lodashFilterKeyOneLevel = (array, key, value) =>
  _.filter(array, _.iteratee([key, value]));

export const lodashUniqueArrayKeyValue = (array, key) =>
  _.uniq(_.map(array, key));

export const lodashPick = (array, keys) => _.pick(array, keys);

export const lodashMergeFilterArray = (array1, array2, keys) => {
  let newArray = [];

  [...array1, ...array2].forEach((item) => {
    const newObj = lodashPick(item, keys);

    newArray.push(newObj);
  });

  return newArray;
};

// ==========================================================
// ARIA LABEL
// ==========================================================

export const handleAriaLabel = (condition, focusName, type) =>
  condition
    ? `${focusName} ${type} focused`
    : `${focusName} ${type} not focused`;

// ==========================================================
// OTHER
// ==========================================================
export const handleDateLongText = (date) => {
  let d = new Date(date);

  // The date is reduced by 1 day, so adding 1 day
  d.setDate(d.getDate() + 1);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const outputDate = d.toLocaleDateString('en-us', options);

  return outputDate;
};

export const handleKeyClickExternal = (e, href) => {
  e.preventDefault();

  if (e.code === 'Space') {
    const newWindow = window.open(href, '_blank', 'noopener,noreferrer');
    e.target.blur();

    if (newWindow) newWindow.opener = null;
  }
};

export const handleExternalClick = (e, href) => {
  e.preventDefault();
  const newWindow = window.open(href, '_blank', 'noopener,noreferrer');
  e.target.blur();
  if (newWindow) newWindow.opener = null;
};

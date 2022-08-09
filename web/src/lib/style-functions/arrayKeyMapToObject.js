const openObject = (objectToOpen, setOpenObjectTo) => {
  if (!objectToOpen) {
    return;
  }
  Object.keys(objectToOpen).map((key) => {
    if (key === undefined) {
      return '';
    } else if (typeof setOpenObjectTo[key] === 'object') {
      return openObject(objectToOpen[key], setOpenObjectTo[key]);
    } else {
      return (setOpenObjectTo[key] = objectToOpen[key]);
    }
  });
};

const arrayKeyMapToObject = (input) => {
  var output = {};

  input.forEach((item) => {
    openObject(item, output);
  });

  return output;
};

export default arrayKeyMapToObject;

const alignFlexSwitch = (align) => {
  switch (align) {
    case 'alignCenter':
      return {
        margin: 'auto',
        alignSelf: 'center',
      };
    case 'alignRight':
      return {
        marginLeft: 'auto',
        alignSelf: 'center',
      };
    case 'alignLeft':
      return {
        marginRight: 'auto',
        alignSelf: 'center',
      };
    case 'alignXCenter':
      return {
        marginRight: 'auto',
        marginLeft: 'auto',
      };
    case 'alignXLeft':
      return {
        marginRight: 'auto',
      };
    case 'alignXRight':
      return {
        marginLeft: 'auto',
      };
    case 'alignYCenter':
      return {
        alignSelf: 'center',
      };
    case 'alignYTop':
      return {
        alignSelf: 'flex-start',
      };
    case 'alignYBottom':
      return {
        alignSelf: 'flex-end',
      };

    default:
      return {};
  }
};

export default alignFlexSwitch;

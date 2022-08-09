import { forwardRef } from 'react';
import Text from '../Text/Text';

const Anchor = forwardRef((props, ref) => {
  const { name, isFocused, focusName, ...rest } = props;

  return (
    <Text
      ref={ref}
      tag='a'
      aria-label={
        isFocused
          ? `${focusName} external link focused`
          : `${focusName} external link not focused`
      }
      aria-live='polite'
      {...rest}
    />
  );
});

Anchor.defaultProps = {
  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  textAlign: 'center',
  textWeight: '500',
  textDecor: 'none',
  cursor: 'pointer',
};

export default Anchor;

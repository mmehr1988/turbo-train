// =============================================
// EXTERNAL IMPORTS
// =============================================

import React, { memo, useRef } from 'react';
import styled from 'styled-components';

// =============================================
// INTERNAL IMPORTS
// =============================================
import { MotionDiv, Label, Input } from '../../components';
import { lodashIsEqual, capitalLodash } from '../../lib';

const FormInput = (props) => {
  // =============================================
  // PROPS
  // =============================================
  const {
    LABEL_PROPS,
    INPUT_PROPS,
    SPAN_PROPS,
    isData,
    handleChange,
    isError,
    wavy,
  } = props;
  // =============================================
  // PROPS DESTRUCT
  // =============================================
  const { className: LABEL_CLASSNAME, ...label } = LABEL_PROPS;
  const { className: INPUT_CLASSNAME, name, type, ...input } = INPUT_PROPS;
  const { className: SPAN_CLASSNAME, ...span } = SPAN_PROPS;

  // =============================================
  // REF
  // =============================================
  const REF_INPUT = useRef(null);

  // =============================================
  // FOR ERROR
  // =============================================
  const handleStringSplit = (str) => {
    const strSpec = str.includes('valid');
    const strMain = strSpec ? 'valid' : 'empty';
    const strArray = str.split(strMain);

    return (
      <Span className={SPAN_CLASSNAME} {...span}>
        {strArray[0]}
        <span className={`${wavy && 'wavy'}`}>
          {strSpec ? strMain + ` email` : strMain}
        </span>
      </Span>
    );
  };

  return (
    <FieldSet disabled={isData['isSubmitting']}>
      <Label
        className={`${LABEL_CLASSNAME}-${name}`}
        {...label}
        onClick={() => REF_INPUT.current.focus()}
      >
        {capitalLodash(name)}
      </Label>

      <Input
        ref={REF_INPUT}
        className={`${INPUT_CLASSNAME}-${name}`}
        name={name}
        onChange={handleChange}
        value={isData[name]}
        type={type}
        {...input}
      />
      {isError && handleStringSplit(isError)}
    </FieldSet>
  );
};

FormInput.defaultProps = {
  LABEL_PROPS: {
    className: 'app__form-label',
    htmlFor: 'email',
  },
  INPUT_PROPS: {
    className: 'app__form-input',
    type: 'email',
    name: 'email',
  },
  SPAN_PROPS: {
    tag: 'span',
    className: 'app__contact-form-error-span',
  },
};

export default memo(FormInput, (prevProps, nextProps) => {
  if (!lodashIsEqual(prevProps, nextProps)) {
    return false;
  }

  return true;
});

const FieldSet = styled.fieldset``;

const Span = styled(MotionDiv)``;

// =============================================
// EXTERNAL IMPORTS
// =============================================
import React, { memo, useRef } from 'react';
import styled from 'styled-components';
// =============================================
// INTERNAL IMPORTS
// =============================================

import { MotionDiv, Label, Textarea } from '../../components';
import { lodashIsEqual, capitalLodash } from '../../lib';

const FormTextArea = (props) => {
  // =============================================
  // PROPS
  // =============================================
  const {
    LABEL_PROPS,
    TEXT_AREA_PROPS,
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
  const {
    className: TEXT_AREA_CLASSNAME,
    name,
    type,
    ...textarea
  } = TEXT_AREA_PROPS;

  const { className: SPAN_CLASSNAME, ...span } = SPAN_PROPS;

  // =============================================
  // REF
  // =============================================
  const REF_TEXT_AREA = useRef(null);

  const strArray = (str) => str.split('empty');

  return (
    <FieldSet disabled={isData['isSubmitting']}>
      <Label
        className={`${LABEL_CLASSNAME}-${name}`}
        {...label}
        onClick={() => REF_TEXT_AREA.current.focus()}
      >
        {capitalLodash(name)}
      </Label>
      <Textarea
        ref={REF_TEXT_AREA}
        className={`${TEXT_AREA_CLASSNAME}-${name}`}
        name={name}
        onChange={handleChange}
        value={isData[name]}
        {...textarea}
      />

      {isError && (
        <Span className={SPAN_CLASSNAME} {...span}>
          {strArray(isError)[0]}
          <span className={`${wavy && 'wavy'}`}>empty</span>
        </Span>
      )}
    </FieldSet>
  );
};

FormTextArea.defaultProps = {
  LABEL_PROPS: {
    className: 'app__form-label',
    htmlFor: 'message',
  },
  TEXT_AREA_PROPS: {
    className: 'app__form-textarea',
    name: 'message',
  },
  SPAN_PROPS: {
    tag: 'span',
    className: 'app__contact-form-error-span',
  },
};

export default memo(FormTextArea, (prevProps, nextProps) => {
  if (!lodashIsEqual(prevProps, nextProps)) {
    return false;
  }

  return true;
});

const FieldSet = styled.fieldset``;

const Span = styled(MotionDiv)``;

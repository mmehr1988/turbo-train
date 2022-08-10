// =============================================
// EXTERNAL IMPORTS
// =============================================
import React, {
  useState,
  useReducer,
  useCallback,
  useMemo,
  useContext,
  useEffect,
  useRef,
} from 'react';
import styled, { css, useTheme } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Joi from 'joi-browser';
import _ from 'lodash';

// =============================================
// CONTEXT
// =============================================
import { ContactContext } from '../../Context';
// import { sanity } from '../../sanity';

// =============================================
// INTERNAL IMPORTS
// =============================================
import { MotionDiv } from '../../components';

import {
  FocusOutlineMixin,
  formVariants,
  shakeVariants,
  formStaggerVariants,
} from '../../global';

// import { useCountRenders } from '../../hooks';
import Input from './FormInput';
import TextArea from './FormTextArea';
import FormButton from './FormButton';

// =============================================
// FORM VALIDATOR
// =============================================
import { validate, validateProperty } from './FormValidator';

import { useOnClickOutside } from '../../hooks';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const debounceCustom = _.debounce((callback) => {
  callback();
}, 3500);

// =============================================
// REDUCER
// =============================================
// IMPORTANT
const initialFieldValues = {
  email: '',
  message: '',
};

const ContactForm = (props) => {
  const theme = useTheme();
  // =============================================
  // TRACKING RENDERS
  // =============================================
  // useCountRenders('Contact Form');
  // =============================================
  // PROPS
  // =============================================
  const { WRAPPER_PROPS, CONTAINER_PROPS, FORM_PROPS, EMAIL_PROPS } = props;

  // =============================================
  // PROPS DESTRUCT
  // =============================================
  const { className: WRAPPER_CLASSNAME, ...wrapper } = WRAPPER_PROPS;
  const { className: CONTAINER_CLASSNAME, ...container } = CONTAINER_PROPS;
  const { className: FORM_CLASSNAME, ...form } = FORM_PROPS;
  const { className: EMAIL_CLASSNAME, ...email } = EMAIL_PROPS;

  // =============================================
  // STATE
  // =============================================

  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFieldValues
  );

  const [formError, setFormError] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFieldValues
  );

  const [submitting, setSubmitting] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [shake, setShake] = useState(false);

  const { isFormVisible, dispatch } = useContext(ContactContext);

  const handleCloseForm = () => dispatch({ type: 'CLOSE_CONTACT_FORM' });

  // ===================================================
  // CLOSE MENU FOR ANY CLICK OUTSIDE THE CONTACT FORM
  // ===================================================
  const wrapperRef = useRef();

  useOnClickOutside(wrapperRef, handleCloseForm, 'app__contact-button');

  // =====================================================
  // HANDLE RESET STATES
  // =====================================================

  const handleReset = useCallback(() => {
    setFormData({ ...initialFieldValues });
    setFormError({ ...initialFieldValues });
    setErrorCount(0);
  }, [setFormData, setFormError, setErrorCount]);

  // =====================================================
  // FOR SHAKING ANIMATION
  // =====================================================

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setShake(false);
      }, 200);

    if (errorCount > 1) {
      setShake(true);
      timer();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [errorCount]);

  // =====================================================================
  // CLEAR FORM DATA WHEN FORM IS NOT VISIBLe
  // =====================================================================

  useEffect(() => {
    if (!isFormVisible) {
      handleReset();
    }
  }, [isFormVisible, handleReset]);

  // =====================================================================
  // JOI SCHEMA
  // =====================================================================

  const memoSchemaType = useMemo(() => {
    return {
      email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .label('Email'),
      message: Joi.string().required().label('Message'),
    };
  }, []);

  // =============================================
  // HANDLE | SUBMIT
  // =============================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formData, memoSchemaType);

    setFormError({ ...errors });

    if (errors) {
      return setErrorCount(errorCount + 1);
    } else {
      // setErrorCount(0);
      // setSubmitting(true);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => setErrorCount(0))
        .then(() => setSubmitting(true))
        .catch((error) => alert(error));

      // // IMPORTANT SANITY DO SUBMIT
      // sanity.create({
      //   _type: 'contact',
      //   email: formData.email,
      //   message: formData.message,
      // });

      debounceCustom(() => {
        handleReset();
        handleCloseForm();
        setSubmitting(false);
      });
    }
  };

  // =============================================
  // HANDLE | CHANGE CALLBACK
  // =============================================

  const handleChange = useCallback(
    (e) => {
      const formDataObj = {
        name: e.target.name,
        value: e.target.value,
      };

      const errorMessage = validateProperty(formDataObj, memoSchemaType);

      if (errorMessage) {
        setFormError({
          [e.target.name]: errorMessage,
        });
      } else {
        setFormError({
          [e.target.name]: '',
        });
      }

      setFormData({
        [e.target.name]: e.target.value,
      });
    },
    [memoSchemaType]
  );

  // =============================================
  // USEMEMO + ISDATA
  // =============================================

  const isData = useMemo(
    (type) => ({
      isSubmitting: submitting,
      value: formData[type] || '',
    }),
    [submitting, formData]
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {isFormVisible && (
        <ContactWrapper
          key={`motion-key-${WRAPPER_CLASSNAME}`}
          ref={wrapperRef}
          className={WRAPPER_CLASSNAME}
          {...wrapper}
          variants={formStaggerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div variants={formVariants}>
            <FormContainer
              key={`motion-key-${CONTAINER_CLASSNAME}`}
              className={CONTAINER_CLASSNAME}
              {...container}
              variants={shakeVariants}
              initial={false}
              animate={shake ? 'start' : 'reset'}
              whileHover={{
                borderColor: theme.colors.color1,
              }}
            >
              <Form
                className={FORM_CLASSNAME}
                onSubmit={handleSubmit}
                {...form}
              >
                <input type='hidden' name='form-name' value='contact' />
                <Input
                  isData={isData}
                  handleChange={handleChange}
                  isError={formError['email'] || ''}
                  wavy={errorCount > 2}
                />
                <TextArea
                  isData={isData}
                  handleChange={handleChange}
                  isError={formError['message'] || ''}
                  wavy={errorCount > 2}
                />
                <FormButton
                  disabled={formData.message === '' || formData.email === ''}
                  isSubmitting={submitting}
                />
              </Form>
            </FormContainer>
          </motion.div>
          <motion.div variants={formVariants}>
            <FormContainer
              key={`motion-key-${EMAIL_CLASSNAME}`}
              className={EMAIL_CLASSNAME}
              {...email}
              whileHover={{
                borderColor: theme.colors.color1,
              }}
            >
              tatash.my@gmail.com
            </FormContainer>
          </motion.div>
        </ContactWrapper>
      )}
    </AnimatePresence>
  );
};

ContactForm.defaultProps = {
  WRAPPER_PROPS: {
    tag: 'div',
    className: 'app__contact-form-wrapper',
  },
  CONTAINER_PROPS: {
    tag: 'div',
    className: 'app__contact-form-container',
  },
  FORM_PROPS: {
    tag: 'form',
    className: 'app__contact-form-form',
    name: 'contact',
  },
  EMAIL_PROPS: {
    tag: 'div',
    className: 'app__contact-form-email',
  },
};

export default ContactForm;

const FormVariables = css`
  /* ======================================= */
  /* Colors */
  /* ======================================= */
  --F_color1: ${({ theme }) => theme.colors.color1};
  --F_color2: ${({ theme }) => theme.colors.color2};
  --F_color2Lighter: ${({ theme }) => theme.colors.color2lighter};
  --F_color2Lightest: ${({ theme }) => theme.colors.color2lightest};
  --F_bgPrimary: ${({ theme }) => theme.colors.bgPrimary};
  --F_roundedMD: ${({ theme }) => theme.rounded.md};
  --F_textSize1: ${({ theme }) => theme.fontSizes.size1};
  --F_FW_SMALL: 300;
  --F_FW_MEDIUM: 600;
  --F_FW_LARGE: 900;

  /* ======================================= */
  /* Container */
  /* ======================================= */
  --C_maxWidth: 375px;
  --C_padding: 1.25rem;
  --C_borderWidth: 3px;
  --C_border: var(--C_borderWidth) solid var(--F_color2Lighter);

  /* ======================================= */
  /* Form */
  /* ======================================= */

  --F_gap: 1rem;

  /* ======================================= */
  /* Label */
  /* ======================================= */
  --L_mb: 0.5rem;
`;

const FocusCommon = css`
  ${FocusOutlineMixin}

  :focus {
    border-radius: var(--F_roundedMD);
  }
`;

const ContactWrapper = styled(motion(MotionDiv))`
  ${FormVariables}

  max-width: var(--C_maxWidth);
  width: 100%;

  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 4000;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* POSITION */
  @media screen and (min-width: 1440px) {
    --maxMargin: calc(100% - 1440px);
    margin-right: calc(var(--maxMargin) / 2);
  }
  @media screen and (max-width: 767px) {
    right: 30px;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    right: 5%;
  }
`;

const FormContainer = styled(motion(MotionDiv))`
  ${FormVariables}

  background: var(--F_color2Lightest);
  padding: var(--C_padding);
  border: var(--C_border);
  border-radius: var(--F_roundedMD);

  &.app__contact-form-email {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: calc(var(--C_padding) / 1.25);

    color: var(--F_color2);
    font-size: var(--F_textSize1);
    font-weight: var(--F_FW_MEDIUM);
  }
`;

const Form = styled(MotionDiv)`
  display: flex;
  flex-direction: column;
  gap: var(--F_gap);

  label,
  textarea,
  input {
    border: none;
    ${FocusCommon}
    border-radius: var(--F_roundedMD);
  }

  label,
  textarea,
  input,
  button {
    font-family: inherit;
    font-size: var(--F_textSize1);
  }

  textarea,
  input {
    margin-bottom: 0.75rem;
    color: var(--F_color2);

    font-weight: var(--F_FW_SMALL);
  }

  label {
    --outline-offset: 0.2ch;
    margin-bottom: var(--L_mb);
    color: var(--F_color2);

    font-weight: var(--F_FW_MEDIUM);
  }

  button {
    ${FocusCommon}
  }

  /* ===================================== */
  /* Error */
  /* ===================================== */
  .app__contact-form-error-span {
    color: var(--F_color1);
    font-weight: var(--F_FW_MEDIUM);
  }

  .wavy {
    -webkit-text-decoration: red underline wavy;
    text-decoration: red underline wavy;
    text-underline-offset: 6px;
  }
`;

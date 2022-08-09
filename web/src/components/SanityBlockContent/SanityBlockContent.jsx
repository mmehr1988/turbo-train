import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';
import PortableText from '@sanity/block-content-to-react';

import ExternalLinkText from '../Link/ExternalLinkText';
import SanityInternalLink from './SanityInternalLink';

const serializerslink = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;

      return blank && <ExternalLinkText href={href} title={children} />;
    },
    internalLink: ({ mark, children }) => {
      const { href } = mark;

      return (
        <SanityInternalLink to={href && href}>{children}</SanityInternalLink>
      );
    },
  },
};

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props?.children}</h1>;

        case 'h2':
          return <h2>{props?.children}</h2>;

        case 'h3':
          return <h3>{props?.children}</h3>;

        case 'h4':
          return <h4>{props?.children}</h4>;
        case 'blockquote':
          return (
            <span>
              <blockquote cite={props?.children[1]?.props?.node?.mark?.href}>
                <q>{props?.children[0]}</q>
              </blockquote>
              <SanityExternalBlock blocks={props.children[1]?.props?.node} />
            </span>
          );
        case 'normal':
          return <p>{props?.children}</p>;
        case 'link':
          return <SanityExternalBlock blocks={props?.node} />;
        case 'internalLink':
          return <SanityExternalBlock blocks={props?.node} />;
        default:
          return <p>{props?.children}</p>;
      }
    },
  },
};

const SanityExternalBlock = ({ blocks }) => (
  <PortableText blocks={blocks} serializers={serializerslink} />
);

const SanityBlockContent = ({ blocks, ...rest }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} {...rest} />
);

export default SanityBlockContent;

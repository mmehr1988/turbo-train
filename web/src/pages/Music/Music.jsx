// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { forwardRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionWrap, PageWrap } from '../../wrapper';
import { PageTitle, PageWrapper } from '../../constants';
import PageContent from './MusicPageContent';
import { lodashUniqueArrayKeyValue } from '../../lib';

const Music = forwardRef((props, ref) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { data: musicProjects, pageWraoperProps, pageTitleProps } = props;

  return (
    <PageWrapper ref={ref} {...pageWraoperProps}>
      <PageTitle {...pageTitleProps} />
      <PageContent
        data={musicProjects}
        categories={lodashUniqueArrayKeyValue(musicProjects, 'category')}
      />
    </PageWrapper>
  );
});

Music.defaultProps = {
  queryProps: {
    queryDoc: 'musicProject',
    queryName: 'music-projects',
    queryOptions: 'order(category, year desc)',
  },
  pageWraoperProps: {
    className: 'app__page-music',
    p: '0.1rem',
  },
  pageTitleProps: {
    title: 'Saint Abdullah',
    className: 'app__music-header',
  },
};

export default MotionWrap(PageWrap(Music, 'music'), 'Music');

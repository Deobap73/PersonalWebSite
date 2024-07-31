// src/components/BlogMain.jsx

import NavigationBar from '../../Navigation/NavigationBar';
import './BlogMain.scss';

const BlogMain = () => {
  return (
    <section className='blogMain'>
      <div className='blogMainSentence'>
        <b className='the-blog-page-container'>
          <span>{`The `}</span>
          <span className='blog-page'>{`Blog Page `}</span>
          <span>{`is in the pipeline, almost alive. A page where `}</span>
          <span className='blog-page'>MongoDB</span>
          <span> will be used</span>
        </b>
      </div>
      <NavigationBar context='blog' />
    </section>
  );
};

export default BlogMain;

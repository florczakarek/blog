import React from 'react';
import styles from './PostContent.module.css';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';

const dummyPost = {
  slug: 'getting-started-next-js',
  title: 'Getting Started next js',
  image: 'getting-started-next-js.png',
  content: '# This is my markdown post',
  date: '2022-06-15',
};

const PostContent = () => {
  const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={dummyPost.title} image={imagePath} />
      <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;

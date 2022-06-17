import React from 'react';
import AllPosts from '../../components/posts/AllPosts';

const dummyPosts = [
  {
    slug: 'getting-started-next-js',
    title: 'Getting Started next',
    image: 'getting-started-next-js.png',
    excerpt: 'getting-started with next js framework',
    date: '2022-06-15',
  },
  {
    slug: 'started-next-js',
    title: 'Started next',
    image: 'started-next-js.png',
    excerpt: 'getting-started with next js framework',
    date: '2022-06-15',
  },
  {
    slug: 'next-js',
    title: 'next',
    image: 'next-js.png',
    excerpt: 'getting-started with next js framework',
    date: '2022-06-15',
  },
];
const AllPostPage = () => {
  return <AllPosts posts={dummyPosts} />;
};

export default AllPostPage;

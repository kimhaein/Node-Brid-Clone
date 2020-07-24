import React from 'react';
import { useSelector } from 'react-redux';
import AppLayOut from '../components/AppLayOut';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayOut>
      {isLoggedIn && <PostForm />}
      {/* {key 값은 index로 사용하지 말자! } */}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayOut>
  )
}

export default Home
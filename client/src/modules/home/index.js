import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePosts } from '../../utils/helpers/usePosts';
import  Card  from './components/card';
import { Header } from '../../utils/components/header/header';
import { ActivityIndicator } from '../../utils/components/activity-indicator';
import { ButtonContainer, Button, PageContainer } from './styles'
// import PropTypes from 'prop-types';

const Home = () => {
  const postsState = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);
  usePosts(page);
  return (
    <PageContainer>
    {postsState.isLoading ?
      <ActivityIndicator /> : <>
      {postsState.posts.map( post => (
        <Card
          title={post.title}
          date={post.createdAt}
          content={post.subtitle}
          author={post.author}
        />
      ))}
      </>}
      <ButtonContainer>
        <Button right={false} type="button" onClick={() => setPage(page-1)}> - </Button>
        <span> {page} </span>
        <Button right type="button" onClick={() => setPage(page+1)}> + </Button>
      </ButtonContainer>
    </PageContainer>
  );
};
// Home.propTypes = {};

export default Home;

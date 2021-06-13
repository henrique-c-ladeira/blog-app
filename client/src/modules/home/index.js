import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { usePosts } from '../../utils/helpers/usePosts';
import  Card  from './components/card';
import  Navbar  from './components/navbar';
import { ActivityIndicator } from '../../utils/components/activity-indicator';
import { PageContainer } from './styles'
// import PropTypes from 'prop-types';

const Home = () => {

  const postsState = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);

  usePosts(page);

  const handlePageChange = (event) => {
    const pageNumber = Number(event.target.textContent);
    setPage(
      (pageNumber > 0) ? pageNumber : 0
    )
  }

  return (
    <PageContainer>
    <Navbar />


    {postsState.isLoading ?
      <ActivityIndicator /> : 
      <>
        {postsState.posts.map( post => (
          <Card
            title={post.title}
            date={post.createdAt}
            content={post.subtitle}
            author={post.author}
          />
        ))}
      </>
    }
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: 15}}>
      <Pagination hidePrevButton hideNextButton count={postsState.pageCount} page={page} onChange={handlePageChange} />
    </div>
    </PageContainer>
  );
};
// Home.propTypes = {};

export default Home;

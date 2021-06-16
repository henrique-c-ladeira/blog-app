import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { List, ListItem } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { usePosts } from '../../utils/helpers/usePosts';
import Card from './components/card';
import Navbar from './components/navbar';
import { ActivityIndicator } from '../../utils/components/activity-indicator';
import { useRecentPosts } from '../../utils/helpers/useRecentPosts';

import { ListTitle,  PageContainer } from './styles'
// import PropTypes from 'prop-types';

const Home = () => {
  const postsState = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);
  usePosts(page);

  const recentPosts = useSelector(state => state.recentPosts);
  useRecentPosts();

  const handlePageChange = (event) => {
    const pageNumber = Number(event.target.textContent);
    setPage(
      (pageNumber > 0) ? pageNumber : 0
    )
  }

  return (
    <PageContainer>
      <Navbar />

      <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 4, flexDirection: 'column'}}>

          {postsState.isLoading ?
            <ActivityIndicator /> : 
            <>
              {postsState.posts.map( post => (
                <Card
                  id={post.id}
                  title={post.title}
                  date={post.createdAt}
                  content={post.subtitle}
                  author={post.author}
                />
              ))}
            </>
          }
        </div>

      <Hidden smDown >
        <div style={{flex: 1, flexDirection: 'column'}}>
          <List>
            {recentPosts.loading ?
            <ActivityIndicator /> :
            <>
              <ListTitle> Publicações Recentes </ListTitle>
              {recentPosts.posts?.map( elem => <ListItem button>{elem}</ListItem>)}
            </>}
          </List>
        </div>
      </Hidden>
    </div>

    <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: 15}}>
      <Pagination hidePrevButton hideNextButton count={postsState.pageCount} page={page} onChange={handlePageChange} />
    </div>
    </PageContainer>
  );
};
// Home.propTypes = {};

export default Home;

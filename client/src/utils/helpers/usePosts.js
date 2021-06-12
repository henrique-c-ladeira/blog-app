import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetPosts } from '../../store/ducks/posts';

export const usePosts= (page) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(asyncGetPosts(page));
    })();
  }, [page]);
};

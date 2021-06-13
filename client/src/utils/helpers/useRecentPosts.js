import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetRecentPosts } from '../../store/ducks/recent-posts';

export const useRecentPosts= () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(asyncGetRecentPosts());
    })();
  }, []);
};

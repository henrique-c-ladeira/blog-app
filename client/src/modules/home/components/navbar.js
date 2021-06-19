import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer, MenuItem, IconButton as MIconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { useSelector } from 'react-redux';
import { useRecentPosts } from '../../../utils/helpers/useRecentPosts';
import { ActivityIndicator } from '../../../utils/components/activity-indicator';

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const recentPosts = useSelector((state) => state.recentPosts);
  useRecentPosts();

  return (
    <Container>
      <Hidden mdUp>
        <Item onClick={() => setMenuOpened(true)}>
          <IconButton>
            {' '}
            <MenuIcon />{' '}
          </IconButton>
        </Item>
      </Hidden>
      <Title>Blog Application</Title>

      <Drawer id="fade-menu" open={menuOpened} onClose={() => setMenuOpened(false)} disableAutoFocusItem>
        {recentPosts.loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <MenuTitle> Publicações Recentes </MenuTitle>
            {recentPosts.posts?.map((elem) => (
              <MenuItem>{elem}</MenuItem>
            ))}
          </>
        )}
      </Drawer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 35px;
  padding-right: 50px;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

const Item = styled.div``;

const IconButton = styled(MIconButton).attrs({
  ariaLabel: 'add',
})`
  font-size: 25px;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: 'Mulish', sans-serif;
  font-weight: 300;
`;

const MenuTitle = styled.div`
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 300;
  text-align: center;
  border-bottom: 1px solid;
  padding: 10px;
`;

export default NavBar;

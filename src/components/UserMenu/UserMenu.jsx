import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    fontSize: 40,
    color:"lime",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
 const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div style={styles.container}>
      <EmojiNatureIcon  style={styles.avatar} />
      <span style={styles.name}> {name}</span>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}

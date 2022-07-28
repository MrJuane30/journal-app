import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { Grid,  ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({ title = '', body, id, date}) => {
  const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date }) )
    }
    const newTitle = useMemo( () => {
      return title.length > 17
          ? title.substring(0,17) + '...'
          : title;
  },[ title ])
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNotIcon />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText
            secondary={body}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

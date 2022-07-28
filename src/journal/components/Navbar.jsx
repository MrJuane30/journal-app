import { useDispatch } from "react-redux";
import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { startLogout } from "../../store/auth";
export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(startLogout());
      
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ sm: "none" }}>
          <MenuIcon />
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component='div'>JournalApp</Typography>
          <IconButton color="error" onClick={onLogOut}>
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

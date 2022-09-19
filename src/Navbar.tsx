import { Gavel, Home, Map } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mapButton = (
    <Button
      dir="ltr"
      color="inherit"
      onClick={() => navigate("/map")}
      startIcon={<Map />}
    >
      מפת בתי המשפט
    </Button>
  );

  const homeButton = (
    <Button
      dir="ltr"
      color="inherit"
      onClick={() => navigate("/home")}
      startIcon={<Home />}
    >
      דף הבית
    </Button>
  );

  return (
    <>
      <AppBar dir="rtl">
        <Toolbar sx={{ gap: 1 }}>
          <Gavel color="inherit" />
          <Typography dir="rtl" variant="h6" sx={{ flexGrow: 1 }}>
            מערכת GIS בתי משפט
          </Typography>
          {location.pathname === "/home" ? mapButton : homeButton}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Header = ({ title }) => {
  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#fdbb2d" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "28px",
              textTransform: "uppercase",
              fontFamily: "Fjalla One",
              fontWeight: 400,
              background: "var(--black-color)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            {title}
          </Typography>
          <Toolbar
            sx={{ display: "flex", justifyContent: "flex-end", width: "auto" }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link
                href="/"
                sx={{
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  color: "var(--black-color)",
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                sx={{
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  color: "var(--black-color)",
                }}
              >
                About
              </Link>
              <Link
                href="/contacts"
                sx={{
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  color: "var(--black-color)",
                }}
              >
                Contacts
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

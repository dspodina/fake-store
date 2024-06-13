import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          gap: 2,
        }}
      >
        <Typography align="center" gutterBottom sx={{fontSize: "22px", textTransform: "uppercase", fontFamily: "Fjalla One"}}>
          About Fake Store
        </Typography>
        <Typography variant="body1" align="center">
          This web application is built using React Router to navigate through
          various sections that showcase products sourced dynamically from an
          external API.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

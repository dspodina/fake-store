import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Contacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "50px",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          padding: 2,
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ marginBottom: "30px", fontSize: "28px" }}
          >
            Contact Us
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    color: "var(--black)",
                    backgroundColor: "var(--light-blue-color)",
                    marginTop: "20px",
                    "&:hover": {
                      backgroundColor: "#fdbb2d",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contacts;

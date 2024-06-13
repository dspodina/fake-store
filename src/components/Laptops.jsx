import { useState, useEffect } from "react";
import getData from "../Apis/getData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Laptops = () => {
  const [smartphones, setSmartphones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSmartphones = async () => {
      try {
        const data = await getData("laptops");
        setSmartphones(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSmartphones();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            margin: "100px 0 50px",
          }}
        >
          {loading ? (
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography variant="body1" color="error">
              Error: {error}
            </Typography>
          ) : (
            smartphones.map((product) => (
              <Card
                key={product.id}
                sx={{
                  maxWidth: 300,
                  height: 350,
                  backgroundColor: "#f8f8f8",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Box sx={{ position: "relative", padding: "10px" }}>
                  <CardMedia
                    sx={{
                      height: 150,
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    image={product.thumbnail}
                  />
                  <Badge
                    badgeContent={product.brand}
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: "16px",
                        height: "28px",
                        minWidth: "28px",
                        borderRadius: "7px",
                        background: "var(--light-blue-color)",
                        color: "var(--beige-color)",
                        padding: "5px 10px",
                        margin: "10px",
                        top: "10px",
                        right: "20px",
                      },
                      position: "absolute",
                      top: 16,
                      right: 16,
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Fjalla One", sans-serif',
                      fontWeight: 400,
                      textTransform: "uppercase",
                      paddingBottom: "10px",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      marginBottom: "5px",
                      color: "var(--black-color)",
                    }}
                  >
                    Price: {product.price}$
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: "14px",
                      marginBottom: "5px",
                      color: "var(--black-color)",
                    }}
                  >
                    Dimensions: {product.dimensions.width} x{" "}
                    {product.dimensions.height} x {product.dimensions.depth} cm
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: "14px",
                      marginBottom: "5px",
                      color: "var(--black-color)",
                    }}
                  >
                    Warranty: {product.warrantyInformation}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Laptops;

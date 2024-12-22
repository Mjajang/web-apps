import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Card, CardContent, Stack } from "@mui/material";

const Label = styled("label")(({ theme }) => ({
  color: "black",
  fontWeight: "bold",
  backgroundColor: theme.palette.yellow,
  padding: "4px 12px",
  borderRadius: 4,
  fontSize: "12px",
  [theme.breakpoints.up("sm")]: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: theme.palette.yellow,
    borderRadius: 4,
    padding: "4px 12px",
    fontSize: "14px",
  },
}));

const CardDate = styled(Typography)(({ theme }) => ({
  color: "black",
  fontWeight: "500",
  fontSize: "12px",
  [theme.breakpoints.up("sm")]: {
    color: "black",
    fontWeight: "500",
    fontSize: "14px",
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontWeight: "bold",
  fontSize: "20px",
  [theme.breakpoints.up("sm")]: {
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
  },
}));

const CardText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey,
  fontWeight: "500",
  fontSize: "14px",
  [theme.breakpoints.up("sm")]: {
    color: theme.palette.grey,
    fontWeight: "500",
    fontSize: "16px",
  },
}));

const CardAuthor = styled(Typography)(({ theme }) => ({
  color: "black",
  fontWeight: "700",
  fontSize: "14px",
}));

const CardCoverImage = styled("img")({
  marginBottom: "24px",
  width: "100%",
});

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 384, borderRadius: "20px", border: "1px solid black" }}>
        <CardContent sx={{ padding: "24px" }}>
          <CardCoverImage src="src/assets/blogimage.png" alt="placeholder" />
          <Stack spacing="12px" alignItems="start" sx={{ marginBottom: "24px" }}>
            <Label>Learning</Label>
            <CardDate>Published 21 Dec 2023</CardDate>
            <CardTitle>HTML & CSS foundations</CardTitle>
            <CardText>
              These languages are the backbone of every website, defining structure, content, and
              presentation.
            </CardText>
          </Stack>
          <Stack direction="row" spacing="12px" alignItems="center">
            <img src="src/assets/userpic.png" alt="placeholder" />
            <CardAuthor>Greg Hooper</CardAuthor>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;

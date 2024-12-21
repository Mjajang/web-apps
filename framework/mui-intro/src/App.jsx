import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Button, ButtonGroup, Fade, Grow } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// this is a styled component
const StyledButton = styled(Button)`
  background-color: #6a1e55;
  color: white;

  &:hover {
    background-color: #4a1e55;
    color: white;
  }
`;
const StyledHeading = styled(Typography)`
  color: #6a1e55;
`;
const TextSuccess = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: "bold",
  textDecoration: "underline",
}));
const ButtonPrimary = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.up("tablet")]: {
    backgroundColor: "red",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "green",
  },
}));

export default function App() {
  // state react
  const [isCheck, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container maxWidth="tablet">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example
        </Typography>
        <StyledButton>Styled Button</StyledButton>
        {/* and this is a MUI button */}
        <Button variant="contained">Primary Button</Button>
        <Button variant="outlined">Outline Button</Button>
        <Button
          variant="text"
          sx={{ color: "red", "&:hover": { backgroundColor: "red", color: "white" } }}
        >
          Text Button
        </Button>
      </Box>
      <Box>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Button onClick={handleChange} variant="contained">
          Fade
        </Button>
      </Box>
      <Fade in={isCheck}>
        <div>
          <BasicCard />
        </div>
      </Fade>
      <Grow
        in={isCheck}
        style={{ transformOrigin: "0 0 0" }}
        {...(isCheck ? { timeout: 1000 } : {})}
      >
        <div>
          <StyledHeading variant="h5">Styled Heading</StyledHeading>
          <Typography variant="h1" component="h2">
            Hello World
          </Typography>
          <TextSuccess variant="p">Success</TextSuccess>
          <ButtonPrimary>Primary Button Reusable Component</ButtonPrimary>
        </div>
      </Grow>
    </Container>
  );
}

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

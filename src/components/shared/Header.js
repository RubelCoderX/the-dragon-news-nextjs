import { Box, Container, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/dragon.png";
import Typography from "@mui/material/Typography";
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full">
      <Container>
        <Image
          className="mx-auto my-5"
          src={headingImage}
          alt="headingImage"
          width="500"
          height="500"
        ></Image>
        <Typography
          color="gray "
          variant="body2"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear Or Favour
        </Typography>
        <Typography textAlign="center" className="mb-2">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;

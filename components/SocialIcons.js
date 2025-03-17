import { Stack, IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcons = () => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <IconButton href="https://x.com" target="_blank" rel="noopener noreferrer">
        <XIcon fontSize="large" />
      </IconButton>
      <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize="large" />
      </IconButton>
    </Stack>
  );
};

export default SocialIcons;

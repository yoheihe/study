import { Stack, Button } from "@mui/material";
import Link from 'next/link';
// import styles from "../styles/ButtonGroup.module.css";

const ButtonGroup = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Link href="/" passHref legacyBehavior>
          <Button variant="outlined">Home</Button>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <Button variant="outlined">About</Button>
        </Link>
        <Link href="/work" passHref legacyBehavior>
          <Button variant="outlined">Work</Button>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <Button variant="outlined">Contact</Button>
        </Link>
      </Stack>
    </div>
  )
}

export default ButtonGroup;
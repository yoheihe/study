import { Stack, Button } from "@mui/material";
import Link from 'next/link';
// import styles from "../styles/ButtonGroup.module.css";

const ButtonGroup = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Link href="/about" passHref legacyBehavior>
          <Button variant="outlined">About</Button>
        </Link>
        <Button variant="outlined">Work</Button>
        <Button variant="outlined">Contact</Button>
      </Stack>
    </div>
  )
}

export default ButtonGroup;
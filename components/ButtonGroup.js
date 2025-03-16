import { Stack, Button } from "@mui/material";
import styles from "../styles/BuutonGroup.module.css";

const ButtonGroup = ({ handleDashboardClick }) => {
  return (
    <div>
    <Stack spacing={2} direction="row" className={styles.stack}>
    <Button variant="outlined">About</Button>
    <Button variant="contained" onClick={handleDashboardClick}>
      Work
    </Button>
    <Button variant="outlined">Contact</Button>
  </Stack>
</div>
  )
}

export default ButtonGroup;
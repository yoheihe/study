import { Stack, Button } from "@mui/material";
import Link from "next/link";

const ButtonGroup = () => {
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", sm: "row" }}
      sx={{
        alignItems: "center",
      }}
    >
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/works", label: "Works" },
        { href: "/contact", label: "Contact" },
      ].map((item) => (
        <Link key={item.href} href={item.href} passHref legacyBehavior>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "20px",
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "16px",
              transition: "0.3s",
              '&:hover': {
                backgroundColor: "#125ea0",
                transform: "scale(1.05)",
              },
            }}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default ButtonGroup;

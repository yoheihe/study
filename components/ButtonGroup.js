import { useState } from "react";
import { Stack, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const ButtonGroup = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <IconButton onClick={toggleMenu} color="primary" size="large">
        <MenuIcon />
      </IconButton>

      {menuOpen && (
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          sx={{
            mt: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuItems.map((item) => (
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
      )}
    </div>
  );
};

export default ButtonGroup;

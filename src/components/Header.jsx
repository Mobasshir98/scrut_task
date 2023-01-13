import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ReceiptIcon from '@mui/icons-material/Receipt';

export default function Header() {
  const pages = [
    { label: "Purchase Order", icon: <NoteAltIcon  /> },
    { label: "Dashboard", icon: <DashboardIcon/> },
    { label: "Reports", icon: <SummarizeIcon /> },
    { label: "RFQ", icon: <ContentPasteIcon /> },
    { label: "Invoice", icon: <ReceiptIcon /> },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent"   >
        <Toolbar  >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Riversys
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", mx:50 }}>
            {pages.map((item) => (
            
             
              <Button
                key={item.label}
                sx={{ my: 2, color: "black" }}
                startIcon={item.icon}
                > 
                {item.label}
              </Button>
                
            ))}
          </Box>
          <Box sx={{ flexGrow:0 , display:'flex',alignItems:'center' }}>
            <Avatar sx={{mx:2}} />
            Mobasshir 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

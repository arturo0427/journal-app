import { Box, Toolbar } from "@mui/material";
import { NavBar, Sidebar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex", height:'100vh' }}>
            {/* Navbar */}
            <NavBar drawerWidth={drawerWidth} />

            <Sidebar drawerWidth={drawerWidth} />
            {/* Sidebar */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />

                {children}

            </Box>
        </Box>
    )
}

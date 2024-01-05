import { Box, Divider, Drawer, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { SidebarItem } from './'

export const Sidebar = ({ drawerWidth = 240 }) => {


    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    


    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // es para que siempre este presente 
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >

                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                    >
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                {
                    notes.map((note) => (
                        <SidebarItem key={note.id} {...note} />
                    ))
                }
            </Drawer>
        </Box>
    )
}

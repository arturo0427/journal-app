import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Sidebar = ({ drawerWidth = 240 }) => {


    const { displayName } = useSelector(state => state.auth);

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
                    ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText
                                        primary={text}
                                        secondary="Tenetur quaerat quasi veritatis illo."
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </Drawer>
        </Box>
    )
}

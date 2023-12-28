import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Box, Stack } from '@mui/material'

function DefaultLayout({children , withSideBar , withNavigationBar}) {
  return (
    <Stack direction="column" spacing={2} >
        <NavigationBar />
        <Box>
          {children}
        </Box>
    </Stack>
  

  
  )
}

export default DefaultLayout
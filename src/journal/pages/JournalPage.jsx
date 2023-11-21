import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Possimus enim odit ut eligendi, tempora soluta architecto
        nemo! Tenetur quaerat quasi veritatis illo, voluptate harum vero
        ipsam mollitia eaque! Tempora, perspiciatis.
      </Typography> */}
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      {/* <NoteView /> */}
    </JournalLayout>
  )
}

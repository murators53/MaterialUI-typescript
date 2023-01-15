import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Fab, Tooltip, Modal, Box, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <><Tooltip onClick={e => setOpen(true)}
            title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", } }}>
            <Fab aria-label="add" color='primary'>
                <AddIcon color='inherit' />
            </Fab>
        </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: '30px', height: '30px' }} onClick={e => setOpen(true)} alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64844876?v=4" />
                        <Typography>Murat Ors</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="Whats's on your mind?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}><DateRange /> </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add
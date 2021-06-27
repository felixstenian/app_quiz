import React, { useState } from 'react'
import { Modal } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
// import Fade from '@material-ui/core/Fade'
// import Backdrop from '@material-ui/core/Backdrop'

import { Container } from './styles'

function ModalComponent () {
  const [open, setOpen] = useState(false)

  //   const useStyles = makeStyles((theme) => ({
  //     modal: {
  //     //   display: 'flex',
  //     //   alignItems: 'center',
  //     //   justifyContent: 'center'
  //     },
  //     paper: {
  //     //   backgroundColor: theme.palette.background.paper,
  //     //   border: '2px solid #fafafa',
  //     //   boxShadow: theme.shadows[5],
  //     //   padding: theme.spacing(2, 4, 3)
  //     }
  //   }))

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  //   const classes = useStyles()

  const body = (
    <article>
        <h1>Modal</h1>
    </article>
  )

  return (
    <Container>
        <button type="button" onClick={handleOpen}>
            react-transition-group
        </button>
        <Modal
            // aria-labelledby="transition-modal-title"
            // aria-describedby="transition-modal-description"
            // className={useStyles.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //   timeout: 100
            // }}
        >
            {/* <Fade in={open}> */}
                {body}
            {/* </Fade> */}
        </Modal>
    </Container>
  )
}

export default ModalComponent

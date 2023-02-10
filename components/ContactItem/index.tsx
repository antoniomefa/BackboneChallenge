import React, { useState } from 'react'
import Link from 'next/link'
import { 
    Menu,
    Avatar,
    Button,
    ListItem,
    MenuItem,
    IconButton, 
    Typography, 
    ListItemText, 
    ListItemAvatar } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
  
const ITEM_HEIGHT = 48

const ContactItem = ({ contact, isDeleting }) => {
    const { id, firstName, lastName, phone, email } = contact
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    return (
        <React.Fragment>
            <ListItem alignItems="flex-start" sx={styles.listItem}>
                <ListItemAvatar sx={styles.avatarWrapper}>
                    <Avatar alt={firstName} src="/" sx={styles.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={`${firstName} ${lastName}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={styles.text}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {phone}
                            </Typography>
                            <Typography
                                sx={styles.text}
                                component="span"
                                variant="body2"
                            >
                                {email}
                            </Typography>
                        </React.Fragment>
                    }
                />

                {
                    !isDeleting &&
                    <>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4,
                                width: '15ch',
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link href={`/contacts/${id}`} legacyBehavior >
                                <Button
                                    variant="text"
                                    color="primary"
                                    size="small"
                                    startIcon={<EditIcon/>}
                                >
                                    Editar
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link href={`/contacts/${id}/delete`} legacyBehavior>
                                <Button
                                    variant="text"
                                    color="primary"
                                    size="small"
                                    startIcon={<DeleteIcon/>}
                                >
                                    Eliminar
                                </Button>
                            </Link>
                        </MenuItem>
                    </Menu>
                    </>
                }
            </ListItem>
        </React.Fragment>
    )
}

export default ContactItem

const styles = {
    listItem: { 
        boxShadow: 3, 
        marginBottom: 1 
    },
    avatarWrapper: { 
        marginRight: 2
    },
    avatar: {
        width: 50, 
        height: 50 
    },
    text: {
        display: 'block'
    }
}
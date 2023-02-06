import React from 'react'
import { ListItem,Divider, ListItemText, ListItemAvatar, Avatar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const options = [
    'Editar',
    'Eliminar',
  ];
  
const ITEM_HEIGHT = 48;

const ContactItem = ({ contact }) => {
    const { firstName, lastName, phone, email } = contact
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={firstName} src="/" />
                </ListItemAvatar>
                <ListItemText
                    primary={`${firstName} ${lastName}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {phone}
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                            >
                                {email}
                            </Typography>
                        </React.Fragment>
                    }
                />
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
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    )
}

export default ContactItem
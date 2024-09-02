import { List, ListItem } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <List>
        <ListItem>
          <NavLink to="/">Notes</NavLink>
          <NavLink to="/about">About</NavLink>
        </ListItem>
      </List>
    </>
  )
}

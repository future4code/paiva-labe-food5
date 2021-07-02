import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { URL } from '../../parameters/url'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import BorderColorIcon from '@material-ui/icons/BorderColor'
import Loading from '../../components/Loading/Loading'
import { goToEditAddress } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'







const ProfileAddress = () => {
    const history = useHistory()
    const profile = useRequestData([], `${URL}/profile`)

    return (
        <>
            <Grid item xs={12} md={6}>
                <div >
                    <List>
                        <ListItem>
                            {profile.length !== 0 ? profile.user.address : <Loading />}
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => goToEditAddress(history)} edge="end" aria-label="edit">
                                    <BorderColorIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
            </Grid>
        </>
    )
}

export default ProfileAddress 
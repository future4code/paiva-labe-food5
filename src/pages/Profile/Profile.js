import React from 'react'
import ProfileUser from './ProfileUser'
import ProfileAddress from './ProfileAddress'
import OrdersHistory from './OrdersHistory'
import Header from "../../components/Header/Header";
import useProtectedPage from '../../hooks/useProtectedPage';

const Profile = () => {

    useProtectedPage()
    return (
        <>
        <Header name="Perfil"/>
        <ProfileUser/>
        <ProfileAddress/>
        <OrdersHistory/>
        </>
    )
}

export default Profile
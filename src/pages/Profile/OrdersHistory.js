import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { URL } from '../../parameters/url'
import CardOldersHistory from './CardOrdersHistory'



const OrdersHistory = () => {

    const orders = useRequestData([], `${URL}/orders/history`)
    const ordersHistory = () => {
        return orders.orders.map((order) => {
            return (
                <CardOldersHistory
                    restaurantName={order.restaurantName}
                    orderDate={order.expiresAt}
                    orderPrice={order.totalPrice}
                />
            )
        })
    }


    return (
        <>
            <h4>Histórico de pedidos</h4>
            <hr />< br />
            {orders.length === 0 ? (<strong>Você não tem pedidos</strong>) : ordersHistory()}
        </>
    )
}

export default OrdersHistory

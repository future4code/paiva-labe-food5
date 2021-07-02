import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const CardOldersHistory = (props) => {

    return (
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.restaurantName}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.orderDate}
                </Typography>
                <Typography color="textSecondary">
                    {props.orderPrice}
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardOldersHistory
import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function RestaurantCard({item}) {
    return (
        <>
        <Link to={`/details/${item.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.photograph} />

                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <p>{item.neighborhood}</p>
                    </Card.Text>
                    <Card.Text>
                        <p> cuisine: {item.cuisine_type}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Link>
        </>

    )
}

export default RestaurantCard
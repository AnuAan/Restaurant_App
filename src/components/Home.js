import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {listRestaurants} from '../actions/restaurantAction'
import { useDispatch, useSelector} from 'react-redux'


function Home() {

const dispatch = useDispatch()

const retsaurantData = useSelector( state => state.restaurantReducer)
const { restaurants } = retsaurantData
   
    useEffect(() => {
        dispatch(listRestaurants())
    }, []);

    console.log('My data is', restaurants);

  return (
    <>
    <Row>
     {restaurants.map(item => (

      <Col sm={12} md={8} lg={6} xl={3}>
      <RestaurantCard item={item} />

      </Col>
     ))}
</Row>
</>

  )
}

export default Home
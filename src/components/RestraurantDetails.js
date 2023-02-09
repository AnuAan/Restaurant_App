import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import Review from './Review'


function RestraurantDetails() {

  const [details, setDetails] = useState([])
  const params = useParams()

  async function fetchData() {
    await fetch('/restaurants.json')
      .then((data) => data.json())
      .then((res) => setDetails(res.restaurants))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const restaurantData = details.find((item) => item.id == params.id)
  console.log('My Details is.. ', restaurantData)

  return (
    <>
      <Link className='btn btn-outline-dark my-2 rounded btn-sm' to='/'>Back</Link>
      {
        restaurantData ? (
          <Row className="my-3">
            <Col md={3}>
              <Image className="img" src={restaurantData.photograph} alt={restaurantData.name} fluid />
            </Col>
            <Col md={4}>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{restaurantData.name}</h2>
                  <p>{restaurantData.neighborhood}</p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <p>Cuisine_Type :{restaurantData.cuisine_type}</p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <p>Address : {restaurantData.address}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <ListGroup.Item>
                <h4>Operating Hourse :</h4>
                <p>Monday   : {restaurantData.operating_hours.Monday}</p>
                <p>Tuesday  : {restaurantData.operating_hours.Tuesday}</p>
                <p>Wednesday: {restaurantData.operating_hours.Wednesday}</p>
                <p>Thursday : {restaurantData.operating_hours.Thursday}</p>
                <p>Friday   : {restaurantData.operating_hours.Friday}</p>
              </ListGroup.Item>
            </Col>
            <Row>
              <Card className='my-3 mx-3 p-3 rounded card'>
                <Review data={restaurantData.reviews} />
              </Card>
            </Row>
          </Row>

        ) : 'null'
      }
    </>

  )
}

export default RestraurantDetails
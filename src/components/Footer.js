import React from 'react'
import {Button , Card} from 'react-bootstrap'

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Ocean Star</Card.Header>
      <Card.Body>
        <Card.Title>“There is no love sincerer than the love of food”</Card.Title>
        <Card.Text>
        ❤️Made With Some Innate Talent❤️
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">🍕🫓🥪🍔🌮</Card.Footer>
    </Card>
  )
}

export default Footer
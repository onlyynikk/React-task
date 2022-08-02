import React from 'react'
import Card from './Card'
import cardImage1 from '../../images/card1.jpg'
import cardImage2 from '../../images/card2.jpg'
import cardImage3 from '../../images/card3.jpg'

function CardList() {
  return (
    <div className="cardlist__container">
      <Card
        image={cardImage1}
        subtitle="Complex geometric shapes"
        title="Complex geometric shapes made up of rectangles using colors."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul"
      />
      <Card
        image={cardImage2}
        subtitle="Complex geometric shapes"
        title="Complex geometric shapes made of triangle using multiple colors."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul"
      />
      <Card
        image={cardImage3}
        subtitle="Complex geometric shapes"
        title="Complex geometric shapes made of random things using multiple colors."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul"
      />
    </div>
  )
}

export default CardList

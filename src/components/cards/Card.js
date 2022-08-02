import React from 'react'

export default function Card(props) {
  const { image, subtitle, title, content } = props
  return (
    <div className="card__container">
      <div>
        <img src={image} alt="card one" className="card__image" />
        <p className="card_subtitle">{subtitle}</p>
        <h1 className="card__title"> {title} </h1>
        <p className="card__content">{content}</p>
      </div>
      <div className="card_btn_link">
        <button className="btn">Button Text</button>
        <button className="btn-link">Link</button>
      </div>
    </div>
  )
}

import React from "react"

import { Card } from "../styles"

const card = ({ title, text, image }) => (
  <Card>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>{text}</p>
  </Card>
)

export default card

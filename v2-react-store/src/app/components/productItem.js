import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const Product = ({ completed, image, title, slug, date, authorImage}) => {
    return (

       
        <Link to={slug}>
        <Card>       
          <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardImg src={image}></CardImg>
          <CardText>{description}</CardText>
          <CardSubtitle>Posted by: {author}</CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          </CardBody>
        
        </Card>
        </Link>
    
    )
}

Product.propTypes ={
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Product

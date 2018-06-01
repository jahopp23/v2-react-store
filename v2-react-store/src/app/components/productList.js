import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductComponent from '../components/productItem'
import moment from 'moment'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const ProductList = ({products}) => (
    <ul>
     { products.map((item, index) => (
        <ProductComponent
          slug={item.slug}
          key={index}
          author={item.author}
          authorImage={item.authorImage}
          description={item.description}
          image={item.metadata.hero.url}
          title={item.title}
          date={moment(item.created).format('MMM DD YYYY')}
          />
    ))}
    </ul>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date),
            slug: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            authorImage: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default ProductList


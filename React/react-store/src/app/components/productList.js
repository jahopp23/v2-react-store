import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductComponent from '../components/productItem.js'

const ProductList =({products}) => (
    <ul>
        { products.map((item, index) => (
            <ProductComponent
            title={item.title}
            key={index}
            slug={slug}
            content={content}
            author={author}
            image={image}
            />

        ))}
    </ul>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired

        }).isRequired
    ).isRequired
}

export default ProductList


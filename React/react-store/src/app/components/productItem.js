import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Product = ({ props, completed, title, slug, image, author, content }) => {
    return (
        <div>
      <Link to={slug}>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>posted by: {author}</CardSubtitle>
          <CardText>{content}</CardText>
          <Button>$Buy</Button>
        </CardBody>
      </Card>
      </Link>
    
    </div>
    )
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTyes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Product
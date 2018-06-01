import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlugPost } from '../actions/slug'
import Content from '../components/contentSlug'
import Header from '../components/headerSlug'
import Footer from '../components/footer'
import moment from 'moment';

class Slug extends Component {
    componentDidMount(){
      this.props.fetchSlug(window.location.origin + '/api/products/' + this.props.match.params.slug);
  }

  render(){
      return(
          <div>
          <Header
            title={this.props.slug.title}
            author={this.props.slug.author}
            authorImage={this.props.slug.author_image}
            date={moment(this.props.slug.created_at).format('MMM DD YYYY')}
            
          />
          <Content
             imageUrl={this.props.slug.image}
             product={this.props.slug.content}
            />
           <Footer />
           </div>

      )
  }
}

const mapStateToProps = (state) => {
    return {
        slug: state.slug.slug
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSlug: (url) => dispatch(fetchSlugProduct(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slug)
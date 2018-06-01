import React, { Component } from 'react'
import ProductList from '../components/productList'
import { connect } from 'react-redux'
import { toggleProduct, fetchProducts } from '../actions'
import { fetchSlugProduct } from '../actions'
import PropTypes from 'prop-types'
import Footer from '../components/footer'
import Logo from '../components/logo'
import '../scss/index.scss'

class Product extends Component {

    componentDidMount(){
        this.props.fetchData(window.location.href + 'api/products')
    }

    render(){
        return(
            <div>
                <header className="App-header">
                  <Logo height={80} width={80} styleName="App-logo" />
                  <h1 className="App-title">React//Cosmic Store</h1>
                </header>
                  <ProductList
                      products={this.props.data}
                      />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.products.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchProducts(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
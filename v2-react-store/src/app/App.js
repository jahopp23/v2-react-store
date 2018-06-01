import React from 'react'
import { Route, Link } from 'react-router-dom'
import Product from './containers/Product'
import Slug from './containers/Slug'

const Routes = () => (
    <div>
      <main>
        <Route exact path="/" component={Product} />
        <Route exact path=":/slug" component={Slug} />
      </main>
    </div>
)

export default Routes
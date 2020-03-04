import React from 'react'
import { connect } from 'react-redux'

//importando components
import Products from '../components/Products'

//importando action-creators
import { fetchProducts } from '../../redux/action-creators/productos'

class ProductContainer extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <Products
                productList={this.props.lista}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        lista: state.productos.list
    }
}

const mapDispathToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductContainer)
import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { FetchData } from '../Actions/FetchData';
import { getProductsError, getProducts, getProductsLoading } from '../Reducers/Reducer';

class Boutique extends Component {

    componentWillMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    render () {

        const {loading, products, error} = this.props;

        if(loading) return (<div className="loading"><img src="/images/loading.gif" alt="Loading" /></div>)

        return (
            <div className="main-content boutique">
                <div className="fixed-section boutique">
                    <div className="mycontainer">
                        <h1>Nos Produits</h1>
                        <ul className="breadcrumbs">
                            <li><a href="/">Acceuil </a> &nbsp; &gt; </li>
                            <li><a href="/boutique">Boutique</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="scroll-section boutique">
                    <div className="mycontainer">
                        <div className="side-bar">
                            <nav>
                                <h2>Catégories</h2>
                                <ul className="nav">
                                    <li><a href="/boutique" className="active">Lame Bois</a></li>
                                    <li><a href="/boutique">Lame Composite</a></li>
                                    <li><a href="/boutique">Panneau Bois</a></li>
                                    <li><a href="/boutique">Grille Rigide</a></li>
                                    <li><a href="/boutique">Gabion</a></li>
                                </ul>
                            </nav>
                            <div className="banner">

                            </div>
                        </div>
                        <div className="content">
                            <div className="tab-links">
                                <a className="active" href="/tab1">Nouveautés</a>
                                <a href="/tab2">Populaire</a>
                                <a href="/tab3">Meuilleures Ventes</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab1">
                                    <div className="products-container">
                                    {error && <span className='product-list-error'>{error}</span>}
                                    {
                                    products
                                    ? products.map(product => (
                                        <div className="product" key={product.id}>
                                            <img src={ product.picture } alt="Product" />
                                            <div className="prod-infos">
                                                <h3 className="prod-title">{ product.product_name }</h3>
                                                <div className="prod-price">
                                                    { product.price }
                                                </div>
                                                <a className="plus" href="/details"> <span>Voir détails</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="available">Sur Commande</div>
                                        </div>
                                        ))
                                    : "No Products. Check Your Data Base"
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: getProductsLoading(state),
    products: getProducts(state),
    error: getProductsError(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: FetchData
}, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(Boutique);
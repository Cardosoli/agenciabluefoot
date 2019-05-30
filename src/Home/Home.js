
import React, { Component, Fragment } from 'react'
import logo from '../Img/blueFoot.png'
import Icon from '../Icon/icon'
import { Navbar, Row, Col } from 'reactstrap';

import { withRouter } from 'react-router-dom';

import axios from 'axios';
import Suggestions from './suggestions'

const { API_KEY } = process.env
const API_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains='


class Home extends Component {
    state = { 
        // value: '',
        query: '',
        results: [],
        product: '',
        busca: [],
        productBusca: '',
     };

     getInfo = () => {
        axios.get("https://cors-anywhere.herokuapp.com/http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains=${this.state.query}")
        .then(data =>{
            this.setState({
                results: data.data
            })
        }) 
      }

      getBusca = () => {
        axios.get("https://cors-anywhere.herokuapp.com/http://agenciabluefoot.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${this.state.query}")
        .then(data =>{
            this.setState({
                busca: data.data
            },()=>console.log(this.state.busca))
        }) 
      }
    
      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
          } else if (!this.state.query) {
          }
        })
      }

      createData = (value) => {
        
        return value.items.map((val, index) => {
             return (
                <div key={index}>
                    { this.setState({ product: val.productId })}
                </div> 
            ) 
           
        });
        
      }

      handleInfos = () => {

        this.getBusca()

        return this.state.results.itemsReturned.map((val, index) => {
            return (
                <div key={index}>
                    {this.createData(val)}
                </div>
            )
        });

    }


    render() {
      
        return (
            <div>
            <header className="site__header">
                <Row>
                    <Col lg="12" >
                        <Navbar className="navbar-default sticky-top" expand="lg">
                            {/* logo */}
                            <Col xs="1" sm="1" lg="2">
                                <h2 className="navbar-default__logo">
                                    <img src={logo} />
                                </h2>
                            </Col>
                            {/* \ logo */}

                            {/* search-bar__input */}
                            <Col xs="4" sm="4" lg="6">
                                <div className="search-bar__input">

                                <input
                                    placeholder="Search for..."
                                    ref={input => this.search = input}
                                    onChange={this.handleInputChange}
                                    />
                                    {this.state.results.itemsReturned && this.state.results.itemsReturned.length > 0 &&
                                    <Suggestions 
                                        results={this.state.results.itemsReturned}
                                        handleInfos={() => this.handleInfos()}
                                     />

                                    }

                                    <span className="search-bar__icon">
                                        <Icon tag="search" size='sm'/>
                                    </span>             
                                </div>
                            </Col>
                            {/* \ .search-bar__input */}

                            {/* Menu  */}
                            <Col xs="2" sm="2" lg="2">
                                <div className="menu-conta">
                                    <Row>
                                        <Col lg="3">
                                            <div className="menu-conta__user">
                                                <Icon tag="user" size='sm'/>
                                            </div>  
                                        </Col>
                                        <Col lg="9"> 
                                            <div className="menu-conta__user-one">
                                                <span>Olá</span>
                                                <p>Minha Conta
                                                <Icon tag="icon-arrow-right" size='sm'/>
                                                </p>
                                            </div>  
                                        </Col>
                                    </Row> 
                                </div>     
                            </Col>
                            {/* \ .Menu */}

                            {/* header-right  */}
                            <Col xs="2" sm="2" lg="2">
                                <div className="header-right">
                                    <Row>
                                        <Col lg="4">
                                            <div className="header-right__heart">
                                                <Icon tag="heart" size='sm'/>
                                            </div>  
                                        </Col>
                                        <Col lg="4"> 
                                            <div className="header-right-cart">
                                                <Icon tag="cart" size='sm'/>
                                            </div>  
                                        </Col>
                                    </Row> 
                                </div>     
                            </Col>
                            {/* \ .Menu */}

                        </Navbar>
                    </Col>
                </Row>
            </header>  
            <div>
                {this.state.product ?
                    <p>
                        {this.state.product}
                    </p>
                :
                null
                }
            </div>
            </div>
        )
    }
}


export default withRouter(Home);
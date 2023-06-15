import React, {useEffect} from 'react'
import './style.css'
import naviScript from "./src/main-navigation";
import externalScripts from "./src/index";
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import CartPage from "../../pages/CartPage";
import {Home} from "../../pages/Home";
import MenProducts from "../../pages/MenProducts";
import WomenProducts from "../../pages/WomenProducts";
import ElectronicsProducts from "../../pages/ElectronicsProducts";
import Accessories from "../../pages/AccesoriesProducts";
import ProductPage from "../../pages/ProductPage";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Favourites from "../../pages/Favourites";
import {Error} from "../../pages/Error";
import {useSelector} from "react-redux";
export default () => {
    const cart = useSelector((state)=>state.cart)
    const account = useSelector((state)=>state.login)

    useEffect(()=>{
        externalScripts();
        naviScript();
    },[])

    return (
        <Router>
        <header className={`main-navigation`}>
                <div className={`navigation at-the-top`}>
                    <div>
                        <div className="navigation__aux">
                            <div className="cover">
                                <div className="cover__inner-container ">
                                    <div className="block-navigation navigation__aux-menu block-navigation--initialized" data-mobile-toggle="off">

                                        <div className="block-navigation__container">
                                            <nav className="block-navigation__wrapper" data-menu-orientation="horizontal"
                                                 aria-label="Aux menu">
                                                <ul>
                                                    <li className="block-navigation__item block-navigation__item--mega-menu">
                                                        {!account.log ? <a className="block-navigation__item-content" target="blank"
                                                            href="/login">
                                                            <span
                                                                className="block-navigation__item-label aux-menu-return">Sign up!</span>
                                                        </a> : <Link to='/:user/favourites'>Hey {account.log}</Link>}
                                                    </li>
                                                    <li className="block-navigation__item block-navigation__item--mega-menu">
                                                        <a className="block-navigation__item-content" target="blank" href="/">
                                                            <span className="block-navigation__item-label aux-menu-return">Check our social media</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="navigation__main sticky-navigation ">
                            <div className="cover">
                                <div className="cover__inner-container ">
                                    <div className="navigation__logo ">
                                        <Link to="/">
                                            <img src={require('../../images/logos/logo_transparent.png')}/>
                                        </Link>
                                    </div>
                                    <div className="navigation__drawer-logo  "></div>

                                    <div className="navigation__wrapper">
                                        <div className="block-navigation navigation__main-menu block-navigation--initialized" data-mobile-toggle="on">
                                            <button className="block-navigation__mobile-toggle" aria-label="Open Menu" aria-expanded="false">
                                                <span></span>
                                            </button>
                                            <div className="block-navigation__container ">
                                                <div className="block-navigation__drawer">
                                                    <div className="block-navigation__before-wrapper"></div>
                                                    <nav className="block-navigation__wrapper" data-menu-orientation="horizontal" aria-label="Main menu">
                                                        <ul>
                                                            <li className="block-navigation__item block-navigation__item--mega-menu">
                                                                <Link to="/men's%20clothing">Men</Link>
                                                            </li>

                                                            <li className="block-navigation__item block-navigation__item--mega-menu">
                                                                <Link to="/women's%20clothing">Women</Link>
                                                            </li>

                                                            <li className="block-navigation__item">
                                                                <Link to="/electronics">Electronics</Link>
                                                            </li>

                                                            <li className="block-navigation__item">
                                                                <Link to="/jewelery">Accessories</Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                    <div className="aux-menu__mobile">
                                                        <a className="block-navigation__item-content aux-menu-link" href='/'>
                                                            <span className="block-navigation__item-label aux-menu-return ">Check our social media</span>
                                                        </a>
                                                    </div>
                                                    <div className="block-navigation__after-wrapper">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='navigation__primary-button'>
                                            <Link to="/cart"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.8 8.40001C22.8 7.10001 21.7 6.00001 20.4 6.00001H18V5.00001C18 2.30001 15.8 0.200012 13.2 0.200012H11C8.3 0.200012 6.2 2.40001 6.2 5.00001V6.00001H3.6C2.3 5.90001 1.2 7.00001 1.2 8.30001L0.200001 21.5C0.200001 22.8 1.3 23.9 2.6 23.9H21.3C22.6 23.9 23.7 22.8 23.7 21.4L22.8 8.40001ZM8.1 4.90001C8.1 3.30001 9.4 2.10001 10.9 2.10001H13.1C14.7 2.10001 15.9 3.40001 15.9 4.90001V5.90001H8.1V4.90001ZM2.6 21.9H21.4C21.6 21.9 21.8 21.7 21.6 21.4L20.6 8.40001C20.6 8.10001 20.4 7.90001 20.2 7.90001H17.8V10.6C17.8 11.2 17.4 11.6 16.8 11.6C16.2 11.6 15.8 11.2 15.8 10.6V7.90001H8V10.6C8 11.2 7.6 11.6 7 11.6C6.4 11.6 6 11.2 6 10.6V7.90001H3.6C3.4 7.90001 3.2 8.10001 3.2 8.30001L2.2 21.5C2.2 21.7 2.4 21.9 2.6 21.9Z" fill="#3D4D4C"></path>
                                            </svg><span className="cart-items">{cart.length}</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-scroll-to-top" className="navigation__dom-replacement"></div>

            <Routes>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path="/men's%20clothing" element={<MenProducts/>}/>
                <Route path="/women's%20clothing" element={<WomenProducts/>}/>
                <Route path='/electronics' element={<ElectronicsProducts/>}/>
                <Route path='/jewelery' element={<Accessories/>}/>
                <Route path='/product/:productID' element={<ProductPage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/:user/favourites' element={<Favourites/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </header>
        </Router>
    )
}
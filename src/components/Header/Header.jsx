import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss';

const Header = () => {
    const menuOptions = ["Amazon miniTv", "Sell", "Best Sellers", "Today's Deals","Mobiles",
    "Customer Service","Electronics","New Releases","Prime","Home & Kitchen","Amazon Pay","Fashion","Computers"]
    return (
        <>
            <div className='header'>
                <div className='logo-image-div'>
                    <img src="/amazon-logo.png"
                        alt='Not found'
                        className="logo-image"
                        style={{ width: 110, height: 40, marginTop: 0 }} />
                </div>
                <div className='location-content-div'>
                    <p>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Hello</p>
                    <span><LocationOnOutlinedIcon />Select your address</span>
                </div>
                <div className='search-box-div'>
                    <span>All</span>
                    <input className='search-area'
                        type='text'
                        placeholder='Search items or products'></input>
                    <SearchIcon className='search-box-icon' style={{ color: 'black', marginLeft: 4, marginTop: 2 }} />
                </div>
                <div className=''>
                    <p>Hello John</p>
                    <span>Accounts & Lists</span>
                </div>
                <div>
                    <p>Returns</p>
                    <span>& Orders</span>
                </div>
                <div className='shopping-cart-div'>
                    <ShoppingCartIcon className='shopping-cart-icon' fontSize='large' style={{ color: 'white' }} />
                    <span>0</span>
                </div>
            </div>
            
            <div className="header-bottom-menu">
                <span className='menu-title-all'><MenuIcon />All</span>
                {
                    menuOptions.map((menuOption)=>{
                        return (
                            <span>{menuOption}</span>
                        )
                    })
                }
            </div>
        </>


    )
}

export default Header;
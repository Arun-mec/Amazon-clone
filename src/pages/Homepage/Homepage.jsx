import React from 'react'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import FourProductCard from '../../components/FourProductCard/FourProductCard';
import ProductList from '../../components/ProductList/ProductList';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Grid
                // spacing={0}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={9}>
                    <Banner />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={9}
                    sx={{px:5}}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        marginTop: '-32vh',
                        marginBottom:'20px'
                    }}>
                    <Stack direction="row"
                        spacing={2}
                        zIndex={1}
                        justifyContent="center">
                        <FourProductCard />
                        <ProductCard />
                        <ProductCard />
                        <FourProductCard />
                    </Stack>
                    <Stack direction="row"
                        spacing={2}
                        zIndex={1}
                        justifyContent="center">
                        <ProductCard />
                        <FourProductCard />
                        <ProductCard />
                        <FourProductCard />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={9}
                    sx={{px:5}}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                        background:'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        marginBottom:'20px'
                    }}>
                        <ProductList/>
                </Grid>
            </Grid>
            <Footer />
        </div>

    )
}

export default Homepage
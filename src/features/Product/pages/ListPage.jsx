import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeleton from '../components/ProductSkeleton';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1',
    },
}));
function ListPage(props) {
    const styless = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const {data} = await productApi.getAll({ _page: 1, _limit: 10});
                // console.log(response);
                setProductList(data);
            } catch (error) {
                // console.log('Fail error', error);
            }
             setLoading(false);
        })();
    },[]);
    // console.log(productList);
    return (
        <div>
            <Box>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item className={styless.left}>
                            <Paper elevation={0}> Left columns</Paper>
                        </Grid>
                        <Grid item className={styless.right}>
                            <Paper elevation={0}>
                                {loading ? <ProductSkeleton /> : <ProductList  data={productList}/>}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ListPage;

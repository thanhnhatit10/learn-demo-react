import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@material-ui/core';

ProductsFeature.propTypes = {
    
};

function ProductsFeature(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage}/>
                {/* <Route path={`${match.path}/:productId`} component={}/> */}
            </Switch>
        </Box>
    );
}

export default ProductsFeature;
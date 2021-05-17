import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {STATIC_HOST } from '../../../constants/index';
import {THUMBNAIL_PLACEHOLDER} from '../../../constants/index';
Product.propTypes = {
    product: PropTypes.object,
};

Product.defaultProps = {
    product: [],
};

const useStyles = makeStyles((theme) => ({
    root:{},
    image:{
        borderRadius: '6px',
        cursor: 'pointer',
    }
}))
function Product({ product }) {
    const styless = useStyles();
    const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER
    return (
        <Box padding={1}>
            <Box padding={1}>
                <img
                    className={styless.image}
                    src= {thumbnailUrl}
                    alt={product.name}
                    width="100%"
                />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                {product.salePrice} - {product.promotionPercent}
            </Typography>
        </Box>
    );
}

export default Product;

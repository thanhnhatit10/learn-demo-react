import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSilce'; //name import
// css module 
import styles from './styles.module.css';
// 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
    margin: '5px',
  },
});

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch =useDispatch();
    // Lấy state trong redux và render lên giao diện
    const counter = useSelector(state => state.count);

    const handleIncreaseClick= () => {
        const action = increase();
        // console.log(action);
        dispatch(action);
    }
    const handleDecreaseClick = () =>{
        const action = decrease();
        dispatch(action);
    }
    const classes = useStyles();
    return (
        <div>
            <h4 className={styles.counter}>Redux Toolkit</h4>
          Counter:  {counter}
          <div>
              <Button className={classes.root} onClick={handleIncreaseClick}>Increase</Button>
              <Button className={classes.root} onClick={handleDecreaseClick}>Decrease</Button>
          </div>
        </div>
    );
}

export default CounterFeature;
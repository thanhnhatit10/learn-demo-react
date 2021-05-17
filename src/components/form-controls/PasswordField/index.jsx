import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Visibility } from '@material-ui/icons';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,

    disabled: PropTypes.bool,
};



function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const {formState:{ errors }} = form;
    const hasError = errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = (e) => {
        setShowPassword((e) => !e);
    };
    return (
        <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                render={({ field, fieldState }) => (
                    <OutlinedInput
                    
                        name={name}
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        label={label}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={100}
                        autoComplete="new-password"
                        
                        {...field}
                        disabled={disabled}
                        
                    />
                )}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;

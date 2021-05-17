import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/inputField';




TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const { onSubmit} = props;
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title').min(5, 'Kí tụ quá ngắn'),
      //   age: yup.number().positive().integer().required(),
      });
    const form = useForm({
        defaultValues:{
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit= (values) => {
       if(!onSubmit) return;

        onSubmit(values);
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form}/>
        </form>
    );
}

export default TodoForm;
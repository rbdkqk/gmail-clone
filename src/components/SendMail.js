import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import './SendMail.css';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

export default function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log({ formData });
  };

  // https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react
  // react-hook-form updated to 7.0.0 from 6.X.X and has breaking changes:
  // You have to replace all ref={register} with {...register('value_name')}

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close
          className='sendMail__close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='To'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail__error'>To is required</p>}
        <input
          type='text'
          placeholder='Subject'
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className='sendMail__error'>Subject is required</p>
        )}
        <input
          type='text'
          placeholder='Message...'
          className='sendMail__message'
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className='sendMail__error'>Message is required</p>
        )}
        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

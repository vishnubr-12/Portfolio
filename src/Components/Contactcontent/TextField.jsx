import React from 'react';
import {TextField,FormHelperText} from '@material-ui/core';
import {getIn} from 'formik'

export default function Textfield({field,form,name,helperText,error,onChange,onBlur,displayErrorMessage=true,...otherProps})
{
    const changeHandler = (event) =>
    {
        form.setFieldValue(field.name,event.target.value);
        if(onChange)
        {
            onChange(event);
        }
    }
    const blurHandler = (event) =>
    {
        form.setFieldTouched(field.name);
        if(onBlur)
        {
            onBlur(event);
        }
    }
    const touch = getIn(form.touched, field.name);
    const errorText = getIn(form.errors, field.name);


    return(
        <>
        <TextField name={field.name} value={field.value} onChange = {changeHandler} onBlur={blurHandler} {...otherProps}
                        error =  {(touch && errorText? true:false)}/>
        {displayErrorMessage ? <FormHelperText error={Boolean(touch && errorText)}>{(touch && errorText)|| helperText}</FormHelperText>:helperText && <FormHelperText>{helperText}</FormHelperText>}
        </>                        
    )
    
}
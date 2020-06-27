import React from 'react';

const FormFields = (props) => {
    const renderFields = () =>{
        const formArray = [];
        for(let eleName in props.formData){
            formArray.push(
                {
                    id:eleName,
                    settings: props.formData[eleName]
                }
            )
        }
        return formArray.map((item, i)=>{
            return(
                <div key={i} className="form_element">
                    {renderTemplate(item)}
                </div>
            )
        })
    }
    const showLabel = (show, label) =>{
        return show  ? 
        <label>{label}</label>
        : 
        null;
    }
    const validate = (element) =>{
        console.log(element);
        let error = [true,''];

        if(element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen;
            const message = `${ !valid ? 'Min 5 chars required' : '' }`;
            error = !valid ? [valid, message] : error;
        }

        if(element.validation.required){
            const valid = element.value.trim() !== "";
            const message = `${ !valid ? 'This field is required' : '' }`;
            error = !valid ? [valid, message] : error;
        }
        return error;
    }
    const handleChange = (event, id, blur) =>{
       const newState = props.formData;
       newState[id].value = event.target.value;
        if(blur){
            let validData = validate(newState[id]);
            newState[id].valid = validData[0];
            newState[id].validationMessage = validData[1];
        }
        newState[id].touched = true;
       props.change(newState);
    }
    const showValidation = (data) =>{
        let errorMessage = null;
        if(data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }
    const renderTemplate = (data) =>{
        let formTemplate = "";
        let values = data.settings;
        switch(values.element){
            case('input'):
            formTemplate =(
                <div>
                    {showLabel(values.label, values.labelText)}
                    <input 
                    {...values.config} 
                    value={values.value} 
                    onBlur = {(event) => handleChange(event,data.id, true)}
                    onChange={(event) => handleChange(event,data.id, false)}
                    />
                    {showValidation(values)}
                </div>
            )
            break;
            case('textarea'):
            formTemplate =(
                <div>
                    {showLabel(values.label, values.labelText)}
                    <textarea 
                    {...values.config} 
                    value={values.value}
                    onBlur={(event)=>handleChange(event, data.id, true)} 
                    onChange={(event)=>handleChange(event, data.id, false)}
                    />
                </div>
            )
            break;
            case('select'):
                formTemplate = (
                    <div>
                         {showLabel(values.label, values.labelText)}
                         <select 
                          value={values.value} 
                          name={values.config.name}
                          onBlur={(event)=>handleChange(event, data.id, true)}
                          onChange={(event)=>handleChange(event, data.id, false)}
                         >
                             {values.config.options.map((item,i)=>(
                                <option key={i} value={item.val}>{item.text}</option>
                             ))}
                        </select>
                    </div>
                )
            break;
            default:
                formTemplate = "";
        }
        return formTemplate;
    }
    return ( 
        <div>
            {renderFields()}
        </div>
     );
}
 
export default FormFields;
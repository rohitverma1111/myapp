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
    const handleChange = (event, id) =>{
       const newState = props.formData;
       newState[id].value = event.target.value;
       props.change(newState);
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
                    onChange={(event) => handleChange(event,data.id)}
                    />
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
                    onChange={(event)=>handleChange(event, data.id)}
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
                          onChange={(event)=>handleChange(event, data.id)}
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
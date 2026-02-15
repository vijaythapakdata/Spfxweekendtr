import * as React from 'react';
import { ChoiceGroup, ComboBox, DatePicker, Dropdown, PrimaryButton, TextField } from '@fluentui/react';

const FormData:React.FC<{}>=()=>{
    return(
        <>
        {/* Form Design */}
        <form>
<TextField
label='Name'
placeholder='write your name here...'
iconProps={{iconName:'people'}}
required={true}
/>
<TextField
label='Password'
type='password'
canRevealPassword={true}
/>
<TextField
label='Compensation'
prefix='$'
suffix='USD'
/>
<TextField
label='Upload File'
type='file'
/>
<TextField
label='Address'
rows={5}
multiline={true}
/>
{/* choices */}
<Dropdown
label='Department'
placeholder='--select--'
options={[
    {key:'IT',text:'IT'},
    {key:'HR',text:'HR'}
]}
multiSelect
/>
{/* Radio button */}
<ChoiceGroup
label='Gender'
options={[
    {key:'Male',text:'Male'},
    {key:'Female',text:'Female'}
]}
/>
{/* Combobox */}
<ComboBox
options={[
    {key:'IT',text:'IT'},
    {key:'HR',text:'HR'}
]}
label='Combo Box'
multiSelect
allowFreeform
autoComplete='on'
/>
{/* Daet Picker */}
<DatePicker
label='Date Of Joining'
/>
<PrimaryButton
text='Save'
type='submit'
iconProps={{iconName:'save'}}
onClick={()=>alert("Hello, there....")}
/>&nbsp;&nbsp;&nbsp;
<PrimaryButton
text='Cancel'
iconProps={{iconName:'cancel'}}
onClick={()=>alert('reset succesffully')}
/>
        </form>

        {/*  */}
        </>
    )
}
export default FormData;
import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin/dist/cjs';

const UserEdit = (props) => {
    return (
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='name' />
                <TextInput multiline source='email' />
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;

import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin/dist/cjs';

const PostEdit = (props) => {
    return (
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <TextInput source='publishedAt' />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;

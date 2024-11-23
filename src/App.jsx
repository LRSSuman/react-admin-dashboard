import React from 'react';
import { Admin, Resource } from 'react-admin';
import PostList from './components/PostList';
import UserList from './components/UserList';
import restProvider from 'ra-data-simple-rest';
import PostEdit from './components/PostEdit';
import UserEdit from './components/UserEdit';
import PostCreate from './components/PostCreate';
import UserCreate from './components/UserCreate';

const App = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:5000')}>
            <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
            <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} />
        </Admin>
    );
};

export default App;

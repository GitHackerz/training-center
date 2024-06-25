import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="firstName" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
);
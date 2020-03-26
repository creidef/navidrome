import React from 'react'
import {
  BooleanInput,
  Create,
  TextInput,  
  required,
  SimpleForm
} from 'react-admin'
import { Title } from '../common'

const PlaylistCreate = (props) => (
  <Create title={<Title subTitle={'Create Playlist'} />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source="Name" validate={[required()]} />
      <TextInput source="Comment" validate={[required()]} />      
      <BooleanInput source="Public" initialValue={false} />
    </SimpleForm>
  </Create>
)

export default PlaylistCreate

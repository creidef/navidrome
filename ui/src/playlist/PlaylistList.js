import React from 'react'
import {
  Datagrid,
  Filter,
  List,
  NumberField,
  SearchInput,
  TextField
} from 'react-admin'
import { Pagination, Title } from '../common'

const PlaylistFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
  </Filter>
)

const playlistRowClick = (id, basePath, record) => {
  const filter = { Id: id }
  return `/playlist?filter=${JSON.stringify(filter)}&order=ASC&sort=name`
  //return `/playlist`
}

const PlaylistList = (props) => (
  <List
    {...props}
    title={<Title subTitle={'Playlists'} />}
    sort={{ field: 'Name', order: 'ASC' }}
    exporter={false}
    bulkActionButtons={false}
    filters={<PlaylistFilter />}
    perPage={15}
    pagination={<Pagination />}    
  >
    <Datagrid rowClick={playlistRowClick} key={props.Id}>      
      <TextField source="Name" />
      <NumberField source="Comment" />
    </Datagrid>
  </List>
)

export default PlaylistList

import React from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TableHeader = ({ headerContent }) => (
  <Table.Header>
    <Table.Row>
      {headerContent.map((item, index) => (
        <Table.HeaderCell key={index}>{item}</Table.HeaderCell>
      ))}
    </Table.Row>
  </Table.Header>
)

export default TableHeader

TableHeader.propTypes = {
  headerContent: PropTypes.array,
  sort: PropTypes.func
}

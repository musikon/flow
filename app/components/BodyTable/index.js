import React from 'react'
import { Table, Button, Checkbox, Select } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const BodyTable = ({
  data,
  deleteElement,
  options,
  selectForm,
  checkboxTable,
  color
}) => (
  <Table.Body>
    {Object.values(data).map(item => (
      <Table.Row
        style={{
          background: `${
            color && item.id === color.id && color.params === 'line'
              ? color.hex
              : ''
          }`
        }}
        key={item.id}
      >
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.code}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.formula}</Table.Cell>
        <Table.Cell
          style={{
            background: `${
              color && item.id === color.id && color.params === 'box-select'
                ? color.hex
                : ''
            }`
          }}
        >
          <Select
            required
            label="Selection element"
            options={options}
            placeholder="Middle Name"
            width={6}
            value={item.select}
            onChange={(e, { value }) => selectForm(item.id, value, 'select')}
            disabled={color && true}
          />
        </Table.Cell>
        <Table.Cell
          style={{
            background: `${
              color && item.id === color.id && color.params === 'box-checkbox'
                ? color.hex
                : ''
            }`
          }}
        >
          <Checkbox
            checked={item.active}
            onChange={() => checkboxTable(item.id)}
            disabled={color && true}
          />
        </Table.Cell>
        <Table.Cell>
          <Button
            floated="right"
            negative
            onClick={() => deleteElement(item.id)}
            disabled={color && true}
          >
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
)

export default BodyTable

BodyTable.propTypes = {
  data: PropTypes.object,
  deleteElement: PropTypes.func,
  options: PropTypes.array,
  selectForm: PropTypes.func,
  checkboxTable: PropTypes.func,
  color: PropTypes.object
}

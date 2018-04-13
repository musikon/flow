// @flow
import React, { Component } from 'react'
import { Checkbox, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      formula: '',
      description: '',
      select: 'element1',
      active: false
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleCheck = () => this.setState({ active: !this.state.active })
  handleSelect = (e, { value }) => this.setState({ select: value })
  handleSubmit = () => {
    const { code, formula, description, select, active } = this.state
    this.props.addElement(
      this.props.data,
      {
        code,
        formula,
        description,
        select,
        active
      },
      this.props.close
    )
  }

  render() {
    const { options } = this.props
    const { code, formula, description, select } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            required
            label="Code"
            placeholder="Code"
            width={4}
            name="code"
            value={code}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Formula"
            placeholder="Formula"
            width={6}
            name="formula"
            value={formula}
            onChange={this.handleChange}
          />
          <Form.Select
            required
            label="Selection element"
            options={options}
            placeholder="Middle Name"
            width={6}
            onChange={this.handleSelect}
            value={select}
          />
        </Form.Group>
        <Form.TextArea
          required
          label="Description"
          placeholder="Opinion"
          autoHeight
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Field>
          <Checkbox label="Active" onChange={this.handleCheck} />
        </Form.Field>
        <Form.Button content="Submit" />
      </Form>
    )
  }
}

ModalForm.propTypes = {
  options: PropTypes.array,
  addElement: PropTypes.func,
  data: PropTypes.object,
  close: PropTypes.func
}

export default ModalForm

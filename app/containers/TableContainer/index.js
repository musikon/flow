// @flow

import styles from './styles.sass'

import React, { Component } from 'react'

import { connect } from 'react-redux'
import { tableActions } from '../../actions'
import { bindActionCreators } from 'redux'

import { Table, Loader } from 'semantic-ui-react'

import { HeaderTable, BodyTable } from '../../components'
import { ModalWindow } from '../'

const headerContent = [
  'Id',
  'Code',
  'Description',
  'Formula',
  'Select',
  'Active',
  ''
]

const options = [
  { key: '1', text: 'Element1', value: 'element1' },
  { key: '2', text: 'Element2', value: 'element2' }
]

type Props = {
  data: Object,
  color: ?Object,
  getData: func,
  setCheckBoxTable: func,
  delete: func,
  setTableInfo: func
}

class TableContainer extends Component<Props> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getData()
  }
  /*componentDidMount() {
    this.props.getData()
    subscribeToTimer((err, timestamp) =>
      this.props.addElement(this.props.data, timestamp)
    )
  }


  }*/

  checkboxTable = id => this.props.setCheckBoxTable(this.props.data, id)
  deleteElement = id => this.props.delete(this.props.data, id)
  selectTable = (id, value, state) => {
    const {setTableInfo, data} = this.props
    setTableInfo({data, id, value, state})
  }


    render() {
    const { data } = this.props
    return (
      <div className={styles.wrapper}>
        <Table celled>
          <HeaderTable headerContent={headerContent} sort={this.sort} />
          {Object.keys(data).length !== 0 && (
            <BodyTable
              {...this.props}
              deleteElement={this.deleteElement}
              options={options}
              selectForm={this.selectTable}
              checkboxTable={this.checkboxTable}
            />
          )}
        </Table>
        <div className="container-loader">
          <Loader inline="centered" active={Object.keys(data).length === 0} />
        </div>
        <ModalWindow {...this.props} options={options} />
      </div>
    )
  }
}

const mapStateToProps = ({ tableReducer }) => ({
  data: tableReducer.data,
  color: tableReducer.color
})

const mapDispatchToProps = dispatch => {
  return {
    getData: bindActionCreators(tableActions.getData, dispatch),
    delete: bindActionCreators(tableActions.deleteElement, dispatch),
    getColors: bindActionCreators(tableActions.getColors, dispatch),
    addElement: bindActionCreators(tableActions.addElement, dispatch),
    setTableInfo: bindActionCreators(tableActions.setTableInfo, dispatch),
    setCheckBoxTable: bindActionCreators(
      tableActions.setCheckBoxTable,
      dispatch
    ),
    tableSort: bindActionCreators(tableActions.tableSort, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)

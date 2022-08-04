import React from 'react'

import { returnWrappedCoreColumns } from './table'

import ErrorQuery from './ErrorQuery'
import CoreCodeComment from './CoreCodeComment'

import { Card, Table, Space } from 'antd'

const pagination = {
  showSizeChanger: true,
  position: ['bottomRight']
}
const scroll = { x: 700 }
const size = 'small'

const CoreTable = ({ dataSource, specificColumns = [], loading, error }) => {
  if (error) return <ErrorQuery error={error} />

  const columns = returnWrappedCoreColumns(specificColumns)

  return (
    <Card
      loading={loading}
    >
      <Space direction='vertical' size='large' style={{ width: '100%' }}>

        <CoreCodeComment code='Profile' />

        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={pagination}
          scroll={scroll}
          size={size}
        />

      </Space>
    </Card>
  )
}

export default CoreTable

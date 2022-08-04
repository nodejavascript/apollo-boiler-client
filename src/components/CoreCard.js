import React from 'react'

import ErrorQuery from './ErrorQuery'
import CoreDescriptions from './CoreDescriptions'
import CoreCodeComment from './CoreCodeComment'

import { Card, Space } from 'antd'

const CoreCard = ({ children, info = 'functionality here:', record, loading, error, updateForm }) => {
  if (error) return <ErrorQuery error={error} />

  return (

    <Space direction='vertical' style={{ width: '100%' }}>

      <Card
        loading={loading}
      >
        {info}
      </Card>

      <CoreDescriptions
        record={record}
        column={4}
        title={<CoreCodeComment level={4} code='document:' />}
      />

      {updateForm}

      {children}
    </Space>
  )
}

export default CoreCard

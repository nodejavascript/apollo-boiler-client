import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'

import CoreForm from '../components/CoreForm'

import { Form, message } from 'antd'

import { QUERY_PROFILE } from './CardProfile'

const UPDATE_PROFILE = gql`
  mutation updateProfileMutation ($updateProfileInput: UpdateProfileInput!) {
    updateProfile (updateProfileInput: $updateProfileInput) {
      id
    }
  }
`

const UpdateProfile = ({ hideTitle }) => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(QUERY_PROFILE)

  const [updateProfileMutation, { data, loading, error }] = useMutation(UPDATE_PROFILE)

  useEffect(() => {
    if (data?.updateProfile) return message.success('SAVED')
  }, [data, navigate])

  const record = queryData?.profile

  return (
    <CoreForm
      queryLoading={queryLoading}
      queryError={queryError}
      record={record}
      form={form}
      loading={loading}
      error={error}
      onFinish={values => updateProfileMutation({
        variables: {
          updateProfileInput: values
        }
      })}
      hideTitle={hideTitle}
    />
  )
}

export default UpdateProfile

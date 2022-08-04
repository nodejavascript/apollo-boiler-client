import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

import { Card, Button, Space, Typography } from 'antd'

const { Text } = Typography

const LOAD_POSTS = gql`
  query queryLoadPost {
    posts {
      id
      title
      body
    }
  }
`

const PostCard = ({ post }) => {
  const { title, body } = post
  return (
    <Card
      title={title}
    >
      <p>{body}</p>
    </Card>
  )
}

const Root = () => {
  const [loadPosts, { data, loading, error }] = useLazyQuery(LOAD_POSTS)

  const [posts, setPosts] = useState()

  if (error) {
    return (
      <Card
        title='error'
        style={{ width: '100%' }}
      >
        <p>`${JSON.stringify(data)}`</p>
      </Card>
    )
  }

  return (
    <Card
      loading={loading}
      title={
        <Space>
          <Text>My Blog</Text>
          <Button type='primary'>Load Posts</Button>
        </Space>
      }
      style={{ width: '100%' }}
    >
      {!posts && <Text>Please load posts</Text>}

      {
        posts?.map(post => {
          const { id } = post
          const key = `post_${id}`
          return <PostCard key={key} post={post} />
        })
      }
    </Card>
  )
}

export default Root

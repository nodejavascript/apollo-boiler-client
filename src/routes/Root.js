import React, { useState, useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

import { Card, Button, Space, Typography, Row, Col } from 'antd'

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

const PostsLayout = ({ posts }) => {
  if (!posts) return null

  return (
    <Row
      gutter={[16, 16]}
    >
      {
        posts?.map(post => {
          const { id } = post
          const key = `post_${id}`
          return (
            <Col key={key} span={12}>
              <PostCard post={post} />
            </Col>
          )
        })
      }

    </Row>
  )
}

const Root = () => {
  const [loadPosts, { data, loading, error }] = useLazyQuery(LOAD_POSTS)

  const [posts, setPosts] = useState()

  useEffect(() => {
    if (data?.posts) return setPosts(data.posts)
  }, [data, setPosts])

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
          <Button type='primary' onClick={() => loadPosts()}>Load Posts</Button>
        </Space>
      }
      style={{ width: '100%' }}
    >
      {!posts && <Text>Please load posts</Text>}

      <PostsLayout posts={posts} />
    </Card>
  )
}

export default Root

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

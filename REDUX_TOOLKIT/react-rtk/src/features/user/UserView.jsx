import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd';
import { fetchUsers } from './userSlice'
const UserView = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())

  }, [])
  return (
    <div>
      <h1>List of users </h1>
      {user.loading && <div> <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin></div>}
      {!user.loading && user.error ? <div>the error is {user.error}</div> : null}
      {!user.loading && user.users.length ? (

        <ul>
          {
            user.users.map((user) => (

              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>

      ) : null}

    </div>
  )
}

export default UserView

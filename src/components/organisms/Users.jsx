// import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import User from '../molecules/User'
import UserForm from '../molecules/UserForm'

const Container = styled.div`
  background: #f1f1f1;
  height: 45vh;
  overflow-y: auto;
`

const Users = () => (
  <>
    <Container>
      <div className="users-content">
        <User
          user={{
            name: 'Cristian Moreno',
          }}
        />
        <User
          user={{
            name: 'Mafe serna',
          }}
        />
        <User
          user={{
            name: 'Felipe Moreno',
          }}
        />
      </div>
    </Container>
    <UserForm />
  </>
)

export default Users

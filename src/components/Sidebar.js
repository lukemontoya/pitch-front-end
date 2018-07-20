import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Sidebar

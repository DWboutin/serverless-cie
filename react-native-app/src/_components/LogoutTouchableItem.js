import React from 'react'

import TouchableItem from './TouchableItem'
import { AuthContext } from '../contexts/AuthContext'

const LogoutTouchableItem = ({ children, style }) => (
  <AuthContext.Consumer>
    {context => (
      <TouchableItem
        accessible
        onPress={context.handleLogout}
        delayPressIn={0}
        pressColor="#26B89F"
        activeOpacity={0.5}
        style={style}
      >
        {children}
      </TouchableItem>
    )}
  </AuthContext.Consumer>
)

export default LogoutTouchableItem

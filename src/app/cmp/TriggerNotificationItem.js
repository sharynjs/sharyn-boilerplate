// @flow

import React from 'react'

import BellIcon from '@material-ui/icons/Notifications'
import { connect as withRedux } from 'react-redux'
import DrawerItem from 'sharyn/components/DrawerItem'
import { notify } from 'sharyn/redux/actions'

const TriggerNotificationItemJSX = ({ onClick }: { onClick: Function }) => (
  <DrawerItem {...{ onClick }} key="notify" label="Trigger Notification" icon={BellIcon} />
)

const TriggerNotificationItem = withRedux(null, dispatch => ({
  onClick: () => dispatch(notify({ message: 'Hello there!' })),
}))(TriggerNotificationItemJSX)

export default TriggerNotificationItem

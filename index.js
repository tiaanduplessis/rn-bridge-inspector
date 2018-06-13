/* global __DEV__ */
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js'

function spy (...args) {
  console.log(...args)
}

export default function inspect (func = spy) {
  if (__DEV__) {
    MessageQueue.spy(func)
  }
}

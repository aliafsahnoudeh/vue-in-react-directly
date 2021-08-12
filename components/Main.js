import * as React from 'react'
import VueWrapper from './VueWrapper'

export default function Main() {

  return (
    <div>
      <VueWrapper componentProps={ { msg:'props from a react component'} }/>
    </div>
  )
}

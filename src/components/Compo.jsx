import React from 'react'
import PropTypes from 'prop-types'
function Compo(props) {
  return (
    <div>{props.title}</div>
  )
}
Compo.defaultProps = {
    title :'Task'
}
Compo.propType ={
    title: PropTypes.string,
}
export default Compo
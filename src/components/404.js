import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h2>Page Not Found</h2>
      </div>
    )
  }
}

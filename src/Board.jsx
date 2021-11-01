import React from 'react';
import Square from './Square';
import './Board.css'

class Board extends React.Component {


  resetState() {
    this.setState({
      squares : Array(9).fill(null),
      xIsNext: true,
    })
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick = { () => this.props.onClick(i) } 
      />
    )
  }

  render() {

    return (
      <>
        <button className="resetBtn" onClick={()=>this.resetState()}>
        Reset
        </button>

        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </>
    )
  }
}



export default Board
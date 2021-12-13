import { Component } from 'react';


interface Props {
  error: boolean,
}

export class ErrorBoundary extends Component <Props> {
  state = {
    erorr: false
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    })
  }

  render() {
    if (this.state.erorr) {
      return <h2>Something went wrong</h2>
    }

    return this.props.children;
  }
}
import { Title } from 'components';
import { Component } from 'react';

export class Notification extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <Title>{title}</Title>
      </>
    );
  }
}

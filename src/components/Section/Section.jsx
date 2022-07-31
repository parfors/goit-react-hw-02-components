import { Component } from 'react';
import { SectionStyled, Title } from 'components';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <SectionStyled>
          <Title>{title}</Title>
          {children}
        </SectionStyled>
      </>
    );
  }
}

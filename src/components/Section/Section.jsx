import { SectionStyled, Title } from 'components';
import PropTypes from 'prop-types'

export const Section = ({ title, children }) => {
   
  return (
    <>
        <SectionStyled>
          <Title>{title}</Title>
          {children}
        </SectionStyled>
      </>
    );
  }

Section.propTypes = {
  titile: PropTypes.string,
  children: PropTypes.element,
  }

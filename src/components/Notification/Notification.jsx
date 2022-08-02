import { Title } from 'components';
import PropTypes from 'prop-types'

export const Notification = ({ title }) => {
    return (
      <>
        <Title>{title}</Title>
      </>
    );
  }

Notification.propTypes = {
  title: PropTypes.string,
}
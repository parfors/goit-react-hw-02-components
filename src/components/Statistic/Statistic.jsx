import { Paragraph } from 'components/Feedback/Feedback.syled';
import PropTypes from 'prop-types'

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
      return (
      <>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>Positive Feedback: {positivePercentage || 0}%</Paragraph>
      </>
    );
  }

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
import { Component } from 'react';
import { Paragraph } from 'components/Feedback/Feedback.syled';

export class Statistic extends Component {
  state = {};

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
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
}

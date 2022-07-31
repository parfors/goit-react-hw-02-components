import { Component } from 'react';
import { Statistic } from '../Statistic/Statistic';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components';
import { Notification } from 'components';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbacks() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedbacks()) * 100);
  }

  handleGood = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  onClearBtn = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedbacks();
    const positiveFeedbacks = this.countPositiveFeedbacks();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleGood}
            onClear={this.onClearBtn}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistic">
          {totalFeedbacks === 0 ? (
            <Notification title="There is no feedback"></Notification>
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positiveFeedbacks}
            ></Statistic>
          )}
        </Section>
      </>
    );
  }
}

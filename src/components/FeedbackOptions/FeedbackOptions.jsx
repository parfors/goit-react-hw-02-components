import { Component } from 'react';
import { Button, ButtonWrap } from 'components/Feedback/Feedback.syled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback, onClear } = this.props;
    return (
      <>
        <ButtonWrap>
          {options.map(el => (
            <Button key={el} onClick={() => onLeaveFeedback(el)}>
              {el}
            </Button>
          ))}
          <Button onClick={onClear}>Clear</Button>
        </ButtonWrap>
      </>
    );
  }
}

import { Button, ButtonWrap } from 'components/Feedback/Feedback.syled';
import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback, onClear }) => {
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
  onClear: PropTypes.func,
  }
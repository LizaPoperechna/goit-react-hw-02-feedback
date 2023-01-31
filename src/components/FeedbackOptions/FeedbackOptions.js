import PropTypes from 'prop-types';
import { Button, ButtonCard } from './FeedbackOptions.styled';

export const FeedbackOptions = ({incrementClick, ...object }) => {
    return (<ButtonCard>
        {Object.keys(object).map(option => {
            return (
                <Button 
                    type="button"
                    name={option}
                    key={option}
                    onClick = {event => incrementClick(event.currentTarget.name)}>
                        {option}
                </Button>)
            })
        }
    </ButtonCard>)
}

FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    incrementClick: PropTypes.func.isRequired,
}
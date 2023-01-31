import React, {Component} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Card } from './App.styled';
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

    incrementClick = option => {
      this.setState(prewstate => ({[option]: prewstate[option] +1}))
    }
  
    countTotalFeedback = () => {
      return Object.values(this.state).reduce((total, num) => total + num, 0)
    };

    countPositiveFeedbackPercentage = () => {
      return (this.state.good * 100 /(this.countTotalFeedback())).toFixed(2)
    };

    render() {
      const {good, neutral, bad} = this.state;

      return (
              <Card>
                 <Section title="Please leave feedback">
                      <FeedbackOptions
                          incrementClick={this.incrementClick}             
                          good={good}
                          neutral={neutral}
                          bad={bad}
                      />
                  </Section>

                  <Section title="Statisticks"> 
                      {this.countTotalFeedback() === 0 
                          ? (<Notification message="There is no feedback">  </Notification>) 
                          : (<Statistics 
                                good={good} 
                                neutral={neutral} 
                                bad={bad} 
                                total={this.countTotalFeedback()} 
                                positivePercentage={this.countPositiveFeedbackPercentage()}/>
                            )
                      }
                  </Section>

                </Card>
              )
            }
}
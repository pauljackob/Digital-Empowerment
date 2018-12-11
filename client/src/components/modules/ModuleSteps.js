import React, { Component } from "react";
import { Button } from 'reactstrap';

export default class ModuleSteps extends Component {
  render() {
    const {state, module, explanationStep, exerciseStep, evaluationStep } = this.props;
    return (
      <div>
        <ul key={module._id}>
          <li>
            <h4 className='explanation-border'>Explanation</h4>
            <div
              className={
                state.activeExplanation ? "show-list" : "hide-list"
              }>
              <div dangerouslySetInnerHTML={{ __html: module.explanation }} />
              <Button outline color="secondary" className='explanation-btn' onClick={explanationStep}>Next</Button>
            </div>
          </li>
          <li>
            <h4>Exercise</h4>
            <div
              className={state.activeExercise ? "show-list" : "hide-list"}>
              <div dangerouslySetInnerHTML={{ __html: module.exercise }} />
              <Button outline color="secondary" className='exercise-btn' onClick={exerciseStep}>Next</Button>
            </div>
          </li>
          <li>
            <h4>Evaluation</h4>
            <div
              className={
                state.activeEvaluation ? "show-list" : "hide-list"
              }>
              <div dangerouslySetInnerHTML={{ __html: module.evaluation }} />
              <Button outline color="success" className='evaluation-btn' onClick={evaluationStep}>Finish</Button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

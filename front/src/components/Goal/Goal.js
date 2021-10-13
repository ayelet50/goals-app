import React from 'react';
import Step from '../Step/Step';

const Goal = ({ id, desc, steps = [{ name: 'step1', desc: 'step description' }] }) => {
  return (
    <div>
      <div>{desc}</div>
      <div>
        {steps.map(step => <Step />)}
      </div>
    </div>
  );
};

export default Goal;
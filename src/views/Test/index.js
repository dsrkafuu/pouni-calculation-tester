import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// css
import './index.scss';
// exp gens
import ExpGen from '../../plugins/ExpGen';

const expGen = new ExpGen();

function Test() {
  // get settings data
  const { fillBlank, judge, select } = useSelector((state) => state.start.questionTypes);
  const questionSettings = useSelector((state) => state.start.questionSettings);
  // exp um
  const expNum = fillBlank + judge + select;

  useEffect(() => {
    (async () => {
      const exps = await expGen.getExpressions(expNum, questionSettings);
      console.log(exps);
    })();
  });

  return <div className="test"></div>;
}

export default Test;

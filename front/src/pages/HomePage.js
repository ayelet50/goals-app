import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Goal from '../components/Goal/Goal';

const HomePage = () => {
  const history = useHistory();
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    console.log(history);
    if (history.location?.state?.length > 0) {
      setGoalsList(history.location.state);
    }
  }, [history]);

  return (
    <HomeStyled>
      <div className={'title'}>Your goals list:</div>

      <div>
        {goalsList.map(goal => <Goal key={goal.id} id={goal.id} desc={goal.desc} steps={goal.steps} />)}
      </div>

    </HomeStyled>
  );
};

export default HomePage;

const HomeStyled = styled.div`

  .title {
    font-size: 22px;
    padding: 10px;
  }
`;
import * as React from 'react';
import styled from 'styled-components';

import { shipColor } from '../../modules/leaderboard/model';
import Icon from '../icon';

interface ShipIconProps {
  color: shipColor;
}

const ShipIcon: React.SFC<ShipIconProps> = ({ color }) => {
  return <Wrapper><Icon name={`ship-${color}`}/></Wrapper>;
};

const Wrapper = styled.div`
  width: 40px;
  text-align: center;
`;

export default ShipIcon;
import * as React from 'react';

import styled from 'styled-components';

import Icon from '../icon';

interface KillsIconProps {
  count: number;
}

const KillsIcon: React.SFC<KillsIconProps> = ({ count }) => {
  if (!count) {
    return <div>-</div>;
  }
  return (
    <div>
      <Count>{count}</Count> <AlignedIcon name="kills"/>
    </div>
  );
};

const Count = styled.div`
  display: inline-block;
  margin-right: 20px;
  vertical-align: middle;
`;
const AlignedIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
`;

export default KillsIcon;
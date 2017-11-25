import * as React from 'react';

import Icon from '../icon';

interface ModulesIconProps {
  count: number;
}

const ModulesIcon: React.SFC<ModulesIconProps> = ({ count }) => {
  if (!count) {
    return <div>-</div>;
  }
  return (
    <div>
      {Array(count).fill(1).map((o, i) => <Icon key={i} name="module"/>)}
    </div>
  );
};

export default ModulesIcon;
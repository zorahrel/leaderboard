import * as React from 'react';

import Icon from '../icon';

interface LeagueIconProps {
  score: number;
}

const LeagueIcon: React.SFC<LeagueIconProps> = ({ score }) => {
  if (score > 200) {
    if (score > 300) {
      return <Icon height={44} name="league-gold"/>;
    }
    return <Icon height={44} name="league-silver"/>;
  }

  return <Icon height={44} name="league-bronze"/>;
};

export default LeagueIcon;
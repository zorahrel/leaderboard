import * as React from 'react';

interface ImmunityBadgeProps {
  rate: number;
}

const ImmunityBadge: React.SFC<ImmunityBadgeProps> = ({ rate }) => {
  if (!rate) {
    return <div>-</div>;
  }
  return <div>{rate}x</div>;
};

export default ImmunityBadge;
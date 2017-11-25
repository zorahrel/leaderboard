import * as React from 'react';

interface IconProps {
  name: string;
  height?: number;
}

const Icon: React.SFC<IconProps> = ({ name, height = 45, ...props }) => {
  switch (name) {
    case 'ship-green':
      return <img height={height} {...props} src={require('./assets/ship-green.svg')}/>;
    case 'ship-red':
      return <img height={height} {...props} src={require('./assets/ship-red.svg')}/>;
    case 'ship-purple':
      return <img height={height} {...props} src={require('./assets/ship-purple.svg')}/>;
    case 'ship-orange':
      return <img height={height} {...props} src={require('./assets/ship-orange.svg')}/>;
    case 'ship-yellow':
      return <img height={height} {...props} src={require('./assets/ship-yellow.svg')}/>;
    case 'ship-cyan':
      return <img height={height} {...props} src={require('./assets/ship-cyan.svg')}/>;
    case 'league-o':
      return <img height={height} {...props} src={require('./assets/league-o.png')}/>;
    case 'league-gold':
      return <img height={height} {...props} src={require('./assets/league-gold.svg')}/>;
    case 'league-silver':
      return <img height={height} {...props} src={require('./assets/league-silver.svg')}/>;
    case 'league-bronze':
      return <img height={height} {...props} src={require('./assets/league-bronze.svg')}/>;
    case 'module-o':
      return <img height={height} {...props} src={require('./assets/module-o.png')}/>;
    case 'module':
      return <img height={height} {...props} src={require('./assets/module.svg')}/>;
    case 'kills-o':
      return <img height={height} {...props} src={require('./assets/kills-o.png')}/>;
    case 'kills':
      return <img height={height} {...props} src={require('./assets/kills.svg')}/>;
    case 'box-o':
      return <img height={height} {...props} src={require('./assets/box-o.png')}/>;
    case 'box':
      return <img height={height} {...props} src={require('./assets/box.svg')}/>;
    default:
    return null;
  }
};

export default Icon;
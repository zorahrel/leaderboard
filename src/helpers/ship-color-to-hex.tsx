import { shipColor } from '../modules/leaderboard/model';

export default (color: shipColor) => {
  switch (color) {
    case 'green':
    return '#3BB05E';
    
    case 'red':
    return '#E1353D';

    case 'purple':
    return '#9F5E8C';

    case 'yellow':
    return '#CFD900';

    case 'orange':
    return '#FB7E26';

    case 'cyan':
    return '#00B3BF';

    default:
    return null;
  }
};
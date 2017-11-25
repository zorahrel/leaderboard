import * as React from 'react';
import { Ship, shipColor } from '../../modules/leaderboard/model';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

import matchRound from '../../helpers/match-round';
import sign from '../../helpers/sign';
import ShipColorToHex from '../../helpers/ship-color-to-hex';

import Icon from '../icon';
import ShipIcon from '../ship-icon';
import LeagueIcon from '../league-icon';
import ModulesIcon from '../modules-icon';
import KillsIcon from '../kills-icon';
import ImmunityBadge from '../immunity-badge';

import { Row, Col } from 'react-flexa';

interface ShipRowProps extends Ship {
  position: number;
}

const ShipRow: React.SFC<ShipRowProps> = (props) => {
  return (
    <ShipRowWrapper justifyContent="space-between" alignItems="center">
      <Col lg={3}>
        <Row alignItems="center">
          <Col>
            <Position>{props.position}</Position>
          </Col>
          <Col>
            <ShipIcon color={props.shipColor}/>
          </Col>
          <Col>
            <Name color={props.shipColor}>{props.name}</Name>
            <Difficulty>{props.difficulty}</Difficulty>
          </Col>
        </Row>
      </Col>

      <Col lg={2}>
        <LeagueRecap>
          <Row alignItems="center" justifyContent="space-between">
            <Col>
              <LeagueIcon score={props.score}/>
            </Col>
            <Col>
              <Score>
                {props.score}{' '}
                {!!props.lastScore &&
                  <LastScore negative={props.lastScore < 0}>{sign(props.lastScore)}</LastScore>
                }
              </Score>
            </Col>
          </Row>
        </LeagueRecap>
      </Col>

      <Col lg={1.5}>
        <ModulesIcon count={props.modules}/>
      </Col>

      <Col lg={1.5}>
        {props.box && <Icon name="box"/>}
        {!props.box && '-'}
      </Col>

      <Col lg={1}>
        <KillsIcon count={props.kills}/>
      </Col>

      <Col lg={1}>
        <ImmunityBadge rate={props.immunity}/>
      </Col>

      <Col lg={1.5}>
        <AvgRound>{matchRound(props.avgRound)}</AvgRound>
      </Col>
    </ShipRowWrapper>
  );
};

const Position = styled.div`
  padding: 0 20px;
  font-weight: bold;
`;

interface NameProps {
  color: shipColor;
}
const Name = styled.div`
  text-align: left;
  font-weight: bold;
  line-height: 27px;
  ${(props: NameProps) => `color: ${ShipColorToHex(props.color)};`}
`;
const Difficulty = styled.div`
  text-align: left;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 27px;
`;

const LeagueRecap = styled.div`
  width: 140px;
  margin: 0 auto;
`;

const Score = styled.div`
  height: 21px;
  font-weight: 500;
  line-height: 21px;
`;

interface LastScoreProps {
  negative?: boolean;
}
const LastScore = styled.span`
  color: #3BB05E;
  ${(props: LastScoreProps) => props.negative ? `color: #E1353D;` : ''}
`;

const AvgRound = styled.div`
  padding: 0 0px;
  font-weight: bold;
`;

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const ShipRowWrapper = Row.extend`
  animation: 1s ${fadeInDownAnimation};
  height: 98px;
  font-size: 18px;
  letter-spacing: 2px;
  background-color: #473F5D;
  margin-bottom: 12px;
  text-align: center;
`;

export default ShipRow;
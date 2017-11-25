import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Ship, IState } from './modules/leaderboard/model';
import { requestLeaderboard } from './modules/leaderboard/actions';

import bestScale from './helpers/best-scale';
import { Row, Col } from 'react-flexa';
import Icon from './components/icon';
import ShipRow from './components/ship-row';

interface AppProps {
  items: Ship[];
  isFetching: boolean;
  dispatch: Dispatch<{}>;
}

interface AppState {
  page: number;
}

class App extends React.Component<AppProps, AppState> {
  private leaderboard: HTMLElement;
  state = {
    page: 1
  };
  componentDidMount() {
    window.onresize = this.autoScaleLeaderboard;

    const { dispatch } = this.props;
    dispatch(requestLeaderboard());
  }
  componentDidUpdate() {
    this.autoScaleLeaderboard();
  }
  autoScaleLeaderboard = () => {
    if (this.leaderboard) {
      const scale = window.innerWidth * .9 / this.leaderboard.offsetWidth;
      this.leaderboard.style.height = scale >= .8 ? `100%` : `auto`;
      this.leaderboard.style.transform = `translate(-50%, -50%) scale(${bestScale(scale)})`;
    }
  }
  handleNextPage = () => {
    this.setState((prevState: Readonly<{ page: number }>) => ({
      page: prevState.page + 1
    }));
  }
  render() {
    const { page } = this.state;
    const { isFetching, items } = this.props;

    return (
      <Container>
        { !isFetching && items.length > 0 &&
          <LeaderboardContainer innerRef={(el: HTMLElement) => { this.leaderboard = el; }}>
            <LeaderboardTable>
              <LeaderboardHead justifyContent="space-between" alignItems="center">
                <Col lg={3}>{/* Placeholder */}</Col>

                <Col lg={2}>
                  <AlignedIcon height={30} name="league-o"/>
                  <AlignedTitle>League</AlignedTitle>
                </Col>

                <Col lg={1.5}>
                  <AlignedIcon height={30} name="modules-o"/>
                  <AlignedTitle>Modules</AlignedTitle>
                </Col>

                <Col lg={1.5}>
                  <AlignedIcon height={30} name="box-o"/>
                  <AlignedTitle>Earned</AlignedTitle>
                </Col>

                <Col lg={1}>
                  <AlignedIcon height={30} name="kills-o"/>
                  <AlignedTitle>Kills</AlignedTitle>
                </Col>

                <Col lg={1}>
                  <AlignedTitle>Immunity</AlignedTitle>
                </Col>

                <Col lg={1.5}>
                  <AlignedTitle>Avg round</AlignedTitle>
                </Col>
              </LeaderboardHead>
              {items.slice(0, page).map((item: Ship, i: number) => {
                return <ShipRow key={item.id} position={i + 1} {...item} />;
              })}
            </LeaderboardTable>
            <ActionBar>
              { page < items.length &&
                <Button onClick={this.handleNextPage}>Next</Button>
              }
            </ActionBar>
          </LeaderboardContainer>
        }
      </Container>
    );
  }
}

const LeaderboardTable = styled.div`
  margin: 0 auto;
  width: 90vw;
  min-width: 1390px;
  max-width: 1600px;
  color: #FFF;
`;

const LeaderboardHead = styled(Row)`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 20px;
  margin-bottom: 20px;
`;

const AlignedIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
`;
const AlignedTitle = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const LeaderboardContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 50px 0;
  height: auto;
  transform: translate(-50%, -50%) scale(${() => {
    const scale = window.innerWidth * .9 / 1390;
    return bestScale(scale);
  }});
`;

const ActionBar = styled.div`
  padding: 12px 0;
`;

const Button = styled.button`
  margin: 12px;
	height: 64px;
  width: 183px;
  border: 0;
  border-radius: 1px;
  outline: 0;
  background-color: #34A3CE;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background-color: #48acd4;
  }
`;

const Container = styled.main`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: auto;
`;

const mapStateToProps = (state: IState) => ({
  items: state.items,
  isFetching: state.isFetching
});

export default connect(mapStateToProps)(App);
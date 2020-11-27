import * as React from 'react';
import StatBar from './StatBar';

type Props = {
  percentage: number,
  labelLeft: string|number,
  labelRight: string|number,
  barColor: string
};

export default class BottomBarStat extends React.Component<Props> {
  render() {
    return (
      <StatBar
        {...this.props}
      />
    );
  }
};
import React, {PropTypes} from 'react';

export default class LayoutManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {xs,sm,md,xl} = this.props;
    let Xs = this.props.xs;
    return  <Xs />
  }
}

LayoutManager.propTypes = {
};

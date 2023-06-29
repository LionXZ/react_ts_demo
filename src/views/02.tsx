import React, { Component, PureComponent } from "react";
import kerwinPropTypes from "prop-types";

export default class TWO extends PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  public state: {
    count: 1;
  };

  static propTypes = {
    name: kerwinPropTypes.string,
    count: kerwinPropTypes.number,
  };

  static defaultProps = {
    name: "111",
    count: 1,
  };
  // 不能和 componentWillMount同时使用
  static getDerivedStateFromProps(nextProps: any, nextState: any) {
    // console.log("getDerivedStateFromProps", nextProps, nextState);
    // 结果会合并state
    return {
      count: nextProps?.count * 2,
    };
  }

  componentDidMount() {}
  // getSnapshotBeforeUpdate   取代了 componetWillUpdate  ,触发时间为update发生的时候，在render之后dom渲染之前返回一个值，作为componentDidUpdate的第三个参数
  getSnapshotBeforeUpdate() {
    return 222;
  }

  componentDidUpdate(prevProps: any, prevState: any, prevCount: any) {
    if (this.state.count == prevState.count) {
      return;
    }
  }

  componentWillUnmount() {}

  render() {
    let { name }: any = this.props;
    let { count }: any = this.state;
    return (
      <div>
        {name}
        <div>{count}</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setTab } from './../../../actions/index';

import styles from './flight-tabs.style';

import OneWayForm from './../searchForm/one-way-form';
import ReturnForm from './../searchForm/return-form';

class FlightTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: "one-way"};
  }
  handleTabSelect = (index) => {
    const activeTab = index === 0 ? 'one-way' : 'return';
    this.props.setTab(activeTab);
    this.setState({
      activeTab: activeTab
    });
  }

  render() {
    return (
      <Tabs onSelect={this.handleTabSelect} className={` col-sm-12 ${this.props.className}`} activetab={this.state.activeTab}>
        <TabList className="tabs">
          <Tab className={`${this.state.activeTab === 'one-way'? 'active' : ''} border p-2 `}>One Way</Tab>
          <Tab className={`${this.state.activeTab === 'return'? 'active' : ''} border p-2 `}>Return</Tab>
        </TabList>
        <TabPanel className={this.state.activeTab === 'one-way'? 'border p-3' : '' }>
          <OneWayForm />
        </TabPanel>
        <TabPanel className={this.state.activeTab === 'return'? 'border p-3' : '' }>
          <ReturnForm />
        </TabPanel>
      </Tabs>
    );
  }
}

const StyledFilterTabs = styled(FlightTabs)`${styles}`;


export default connect(
  null,
  { setTab }
)(StyledFilterTabs);


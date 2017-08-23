import React, { Component } from 'react';
import { connect } from 'react-redux';
import Components from '../components';
import { setMessage } from '../actions/Actions';
let { View1 } = Components;

export default connect(state => state.toJS(), {setMessage})(View1);
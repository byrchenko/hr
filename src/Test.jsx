import React from 'react';
import PropTypes from 'prop-types';
import css from './Test.scss';

const Test = props => {
  return <div className={css.index}>{'Test'}</div>;
};

Test.propTypes = {};

Test.defaultProps = {};

export default Test;

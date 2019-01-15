import React from 'react';
import PropTypes from 'prop-types';

const SFC = ({ foo, bar, baz }) => (
  <div>
    {foo}
    {bar}
    {baz}
  </div>
);

SFC.propTypes = {
  foo: PropTypes.string,
  bar: PropTypes.string,
  baz: PropTypes.string,
};

export default SFC;

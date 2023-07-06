import React from 'react';
import { Spin } from 'antd';

import { SpinnerContainer } from './SpinnerStyle';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Spin tip="Loading ...">
        <div />
      </Spin>
    </SpinnerContainer>
  );
};

export default Spinner;

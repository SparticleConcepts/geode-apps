// Copyright 2017-2023 @blockandpurpose.com
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Table } from '@polkadot/react-components';

import Summary from './Summary';
import Details from './Details';
import SearchAccountID from './SearchAccountID';
import SearchKeyword from './SearchKeyword';

//import { useApi } from '@polkadot/react-hooks';

//import useChainInfo from '../useChainInfo';
//import Extensions from './Extensions';
//import NetworkSpecs from './NetworkSpecs';

export default function LifeAndWork (): React.ReactElement {
//  const { isDevelopment } = useApi();
//  const chainInfo = useChainInfo();

  return (
    <div>
        <Table >
            <Summary />
            <Details />   
            <SearchAccountID />    
            <SearchKeyword />     
        </Table>
    </div>
  );
}

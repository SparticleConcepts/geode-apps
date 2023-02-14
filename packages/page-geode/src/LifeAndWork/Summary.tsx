// Copyright 2017-2023 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
//import { formatNumber } from '@polkadot/util';

import { useTranslation } from '../translate';


function Summary (): React.ReactElement {
  const { t } = useTranslation();
  const linkCount = 5;
  const itemCount = 0;
  return (
    <div>
    <SummaryBox>        
      <CardSummary label={''}>
        Geode Life and Work 
      </CardSummary> 
      <CardSummary label={t<string>('Links')}>
      <strong>{linkCount}</strong>
      </CardSummary>
      <CardSummary label={t<string>('Items')}>
      <strong>{itemCount}</strong>
      </CardSummary>
    </SummaryBox>
    </div>
  );
}

export default React.memo(Summary);

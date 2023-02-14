// Copyright 2017-2023 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
//import { Feed, Icon } from 'semantic-ui-react'

import { Card } from '@polkadot/react-components';

//import { formatNumber } from '@polkadot/util';

//import { useTranslation } from '../translate';

// interface Props {
//   className?: string;
//   hashes?: string[];
// }

function Details (): React.ReactElement {
//  const { t } = useTranslation();

  return (
    <div>
    <Card>
        <strong>Geode Social Media</strong>
    </Card>
    <Card>
        Coming Soon!
    </Card>
    </div>
  );
}

export default React.memo(Details);

// Copyright 2017-2023 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router';

import { Tabs } from '@polkadot/react-components';
//import { useApi } from '@polkadot/react-hooks';

import LifeAndWork from './LifeAndWork';
import Home from './Home';
import Market from './Market';
import Social from './Social';
import Messaging from './Messaging';


//import Developer from './Developer';
//import General from './General';
//import I18n from './I18n';
//import Metadata from './Metadata';
import { useTranslation } from './translate';
//import useCounter from './useCounter';

//export { useCounter };


function GeodeApp ({ basePath }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  //const { api, isApiConnected, isApiReady, isDevelopment } = useApi();
  //const numExtensions = useCounter();

  const items = useMemo(() => [
    {
      //isRoot: true,
      name: 'home',
      text: t<string>('Home')
    },
    {
//      count: numExtensions,
      name: 'lifeAndWork',
      text: t<string>('Life and Work')
    },
    {
      name: 'market',
      text: t<string>('Market')
    },
    {
      name: 'social',
      text: t<string>('Social')
    },
    {
      name: 'messaging',
      text: t<string>('Messaging')
    }
  ], [ t ]);

  // const hidden = useMemo(
  //   () => (isApiConnected && isApiReady)
  //     ? isDevelopment || (api.runtimeMetadata.version <= 13)
  //       ? []
  //       : ['home']
  //     : ['lifeAndWork'],
  //   [api, isApiConnected, isApiReady, isDevelopment]
  // );

  return (
    <main className='geode--App'>
      <Tabs
        basePath={basePath}
        //hidden={hidden}
        items={items}
      />
      <Switch>
        <Route path={`${basePath}/Home`}>
          <Home />
        </Route>
        <Route path={`${basePath}/LifeAndWork`}>
          <LifeAndWork />
        </Route>
        <Route path={`${basePath}/Market`}>
          <Market />
        </Route>
        <Route path={`${basePath}/Social`}>
          <Social />
        </Route>
        <Route path={`${basePath}/Messaging`}>
          <Messaging />
        </Route>
      </Switch>
    </main>
  );
}

export default React.memo(GeodeApp);

// Copyright 2017-2023 @blockandpurpose.com
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
//import { Feed, Icon } from 'semantic-ui-react'
import { Table, List, Label } from 'semantic-ui-react'

import { Badge, SummaryBox, CardSummary, Button, Card } from '@polkadot/react-components';

//import { formatNumber } from '@polkadot/util';

//import { useTranslation } from '../translate';

// interface Props {
//   className?: string;
//   hashes?: string[];
// }

function SearchKeyword (): React.ReactElement {
//  const { t } = useTranslation();
// static test const
const searchResults: string[] = ['5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
                                 '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
                                 '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
                                 '5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL']
const keyword: string = 'Bear Wrestling';
const bnTest: boolean = false;

function GetSearchKeyword(): JSX.Element {
  if (bnTest && keyword.length > 0) {
    return(
      <>
        <Label circular color='orange'>
          {keyword}  
        </Label> 
      </>
    )
  } else {
    return(
      <>
      {' Enter a Search Keyword '}
      </>
    )
  }
}

function ShowSearchResults(): JSX.Element {
  if (bnTest && searchResults.length > 0) {
    return (
      <div>
      <List divided inverted relaxed >
        {searchResults.map(name => <List.Item key={name}> 
            <Badge color='orange' icon='hand' />
             {name} 
            </List.Item>)}
      </List>
      </div>             
    ) } else {
    return(
      <div>
      {' No Results '}
      </div>
    )
    }
}

  return (
    <div>
      <SummaryBox>
      <CardSummary label={''}>
        Search Accounts by Keyword 
      </CardSummary> 
      </SummaryBox>
    <Card>
    <Button 
          icon='plus'
          label='' >
    </Button>
    <strong>{' Keyword: '}</strong> 
    <GetSearchKeyword />
        <Table>
          <Table.Row>
            <Table.Cell>              
              <strong>{' Search Results: '}</strong><br /><br />
              <ShowSearchResults />
            </Table.Cell>
            <Table.Cell>
            </Table.Cell>
          </Table.Row>
        </Table>
    </Card>
    </div>
  );
}

export default React.memo(SearchKeyword);

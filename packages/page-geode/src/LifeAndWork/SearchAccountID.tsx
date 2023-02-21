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

function SearchAccountID (): React.ReactElement {
//  const { t } = useTranslation();
// static test const
const expertise: string[] = ['Swimming ', 'Piano ', 'Bear wrestling '];
const education: string[] = ['Swim Camp ', 'Band Camp ', 'Bear Camp '];
const workHistory: string[] = ['Swim Coach ', 'Band Coach ', 'Bear '];
const goodDeeds: string[] = ['Saved a kid ', 'Saved a Bear ', 'Planted a tree '];
const originalIP: string[] = ['<Link> ', '<Link> ', '<Link> '];
const accountID: string = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY'
const userName: string ='Monkey';
const bnTest: boolean = false;

// interface Props {
//   className?: string;
//   hashes?: string[];
// }

function ShowUserAccount(): JSX.Element {
  if (bnTest && accountID.length > 0) {
    return (
      <>
        <strong>{' AccountID: '}</strong> 
        <Label circular color='grey'>{accountID}</Label>
        <strong>{' User Name: '}</strong>
        <Label circular color='orange'>{userName}</Label>
      </>
    ) } else {
    return(
        <strong>{' Select Account to Search '}</strong>
    )
    }
}

function ListExpertise(): JSX.Element {
  if (bnTest && expertise.length > 0) {
    return(
      <div>
      <List divided inverted relaxed >
        {expertise.map(name => <List.Item key={name}> 
            <Badge
                color='blue'
                icon='thumbs-up'
            />
             {name} 
             <Label circular color='teal'>{'5'}</Label>
            </List.Item>)}
      </List>
      </div>             
    )
  } else {
    return(
      <div>{' No Expertise Claims '}</div>
    )
  }
}

function ListEducation(): JSX.Element {
  if (bnTest && education.length > 0) {
    return(
      <div>
      <List divided inverted relaxed >
        {education.map(name => <List.Item key={name}> 
            <Badge
                color='blue'
                icon='thumbs-up'
            />
             {name} 
             <Label circular color='teal'>{'5'}</Label>
            </List.Item>)}
      </List>
      </div>             
    )
  } else {
    return(
      <div>{' No Education Claims '}</div>
    )
  }
}

function ListWorkHistory(): JSX.Element {
  if (bnTest && workHistory.length > 0) {
    return(
      <div>
      <List divided inverted relaxed >
        {workHistory.map(name => <List.Item key={name}> 
            <Badge
                color='blue'
                icon='thumbs-up'
            />
             {name} 
             <Label circular color='teal'>{'5'}</Label>
            </List.Item>)}
      </List>
      </div>             
    )
  } else {
    return(
      <div>{' No Work History Claims '}</div>
    )
  }
}

function ListGoodDeeds(): JSX.Element {
  if (bnTest && goodDeeds.length > 0) {
    return(
      <div>
      <List divided inverted relaxed >
        {goodDeeds.map(name => <List.Item key={name}> 
            <Badge
                color='blue'
                icon='thumbs-up'
            />
             {name} 
             <Label circular color='teal'>{'5'}</Label>
            </List.Item>)}
      </List>
      </div>             
    )
  } else {
    return(
      <div>{' No Good Deed Claims '}</div>
    )
  }
}

function ListOriginalIP(): JSX.Element {
  if (bnTest && originalIP.length > 0) {
    return(
      <div>
      <List divided inverted relaxed >
        {originalIP.map(name => <List.Item key={name}> 
            <Badge
                color='blue'
                icon='thumbs-up'
            />
             {name} 
             <Label circular color='teal'>{'5'}</Label>
            </List.Item>)}
      </List>
      </div>             
    )
  } else {
    return(
      <div>{' No Original Claims '}</div>
    )
  }
}

  return (
    <div>
      <SummaryBox>
      <CardSummary label={''}>
        Search ACCOUNTID's Resume 
      </CardSummary> 
      </SummaryBox>
    <Card>
    <Button 
          icon='plus'
          label='' >
    </Button>
    <ShowUserAccount />
        <strong>{'| Key: '}</strong>
        {' Endorse: '} 
        <Badge color='blue' icon='thumbs-up'  /> 
        {' No. of Endorsements: '} 
        <Label circular color='teal'>{'#'}</Label>

        <Table>
          <Table.Row>
            <Table.Cell>              
              <strong>{'Expertise:'}</strong><br /><br />
              <ListExpertise />
            </Table.Cell>
            <Table.Cell>
              <strong>{'Education:'}</strong><br /><br />
              <ListEducation />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>
              <strong>{'Work History:'}</strong><br /><br />
              <ListWorkHistory />
            </Table.Cell>
            <Table.Cell>
              <strong>{'Good Deeds:'}</strong><br /><br />
              <ListGoodDeeds />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>{'Original IP:'}</strong><br /><br />
              <ListOriginalIP />
            </Table.Cell>
            <Table.Cell>
              <strong>{'Other Things:'}</strong><br /><br />
              <div>
                Nothing to Show right now.
              </div>
            </Table.Cell>
          </Table.Row>
        </Table>
    </Card>
    </div>
  );
}

export default React.memo(SearchAccountID);

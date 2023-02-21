// Copyright 2017-2023 @blockandpurpose.com
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
//import { Feed, Icon } from 'semantic-ui-react'
import { Table, List, Label } from 'semantic-ui-react'

import { SummaryBox, CardSummary, Button, Card } from '@polkadot/react-components';

//import { formatNumber } from '@polkadot/util';

//import { useTranslation } from '../translate';

// interface Props {
//   className?: string;
//   hashes?: string[];
// }

function Details (): React.ReactElement {
//  const { t } = useTranslation();
// static test const
const expertise: string[] = ['ink programmer ', 'Smart Contracts ', 'Nonmonotonic Reasoning '];
const education: string[] = ['BS Math @ University of Florida ', 'MS Math (Theory) @ University of Florida ', 'PhD Math (Nonmonotonic Reasoning) @ University of Florida '];
const workHistory: string[] = ['Program Manager @ DARPA ', 'CTO @ Wave Technologies ', 'Plant Space Biology @ NASA '];
const goodDeeds: string[] = ['Free Sessions 29/11/2022 ', 'Babysitting for Miko (Puppy) 12/1/2021 '];
const originalIP: string[] = ['Architecture for Geode Blockchain <Link> ', 'Infinite Nonmonotonic Rule System <Link> ', 'A Book ', 'Videos ', 'Music '];
const userAccountId: string = '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc';
const userName: string ='Gropo';
const bnTest: boolean = false;

function ShowUserAccount(): JSX.Element {
  if (bnTest && userAccountId.length > 0) {
    return (
      <>
        <strong>{' AccountID: '}</strong> 
        <Label circular color='blue'>{userAccountId}</Label>
        <strong>{' User Name: '}</strong>
        <Label circular color='orange'>{userName}</Label>
        <Button 
          icon='hand'
          label='Make a Claim'>
        </Button>
      </>
    ) } else {
    return(
        <strong>{' Select User Account '}</strong>
    )
    }
}
function ListExpertise(): JSX.Element {
    if (bnTest && expertise.length > 0) {
      return(
        <div>
        <List divided inverted relaxed bulleted >
          {expertise.map(name => <List.Item key={name}> {name} 
          <Label circular color='teal'> {' 999 '} </Label> </List.Item>)}
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
      <List divided inverted relaxed bulleted >
        {education.map(name => <List.Item key={name}> {name} 
        <Label circular color='teal'>  {' 999 '} </Label> </List.Item>)}
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
      <List divided inverted relaxed bulleted >
        {workHistory.map(name => <List.Item key={name}> {name} 
        <Label circular color='teal'>  {' 999 '} </Label> </List.Item>)}
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
      <List divided inverted relaxed bulleted >
        {goodDeeds.map(name => <List.Item key={name}> {name} 
        <Label circular color='teal'>  {' 999 '} </Label> </List.Item>)}
      </List>
      </div>   
    )
  } else {
    return(
      <div>{' No Good Deeds Claims '}</div>
    )
  }
}

function ListOriginalIP(): JSX.Element {
  if (bnTest && originalIP.length > 0) {
    return(
      <div>
      <List divided inverted relaxed bulleted >
        {originalIP.map(name => <List.Item key={name}> {name} 
        <Label circular color='teal'>  {' 999 '} </Label> </List.Item>)}
      </List>
      </div>   
    )
  } else {
    return(
      <div>{' No Original IP Claims '}</div>
    )
  }
}

  return (
    <div>
      <SummaryBox>
      <CardSummary label={''}>
        Your Resume 
      </CardSummary> 
      </SummaryBox>
    <Card>
    <Button 
          icon='plus'
          label='' >
    </Button>
    <ShowUserAccount />
        <strong>{' | Key: '}</strong>
        {' No. of Endorsements: '}
        <Label circular color='teal'> # </Label>  
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

export default React.memo(Details);

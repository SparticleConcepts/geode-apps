// Copyright 2017-2023 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
//import { Feed, Icon } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

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
const expertise: string[] = ['ink programmer', 'Smart Contracts', 'Nonmonotonic Reasoning'];
const education: string[] = ['BS Math @ University of Florida', 'MS Math (Theory) @ University of Florida', 'PhD Math (Nonmonotonic Reasoning) @ University of Florida'];
const workHistory: string[] = ['Program Manager @ DARPA', 'CTO @ Wave Technologies', 'Plant Space Biology @ NASA'];
const goodDeeds: string[] = ['Free Sessions 29/11/2022', 'Babysitting for Miko (Puppy) 12/1/2021'];
const originalIP: string[] = ['Architecture for Geode Blockchain <Link>', 'Infinite Nonmonotonic Rule System <Link>', 'A Book', 'Videos', 'Music'];

// const expertiseList = () => (
//   <div>
//     <ul>{expertise.map(name => <li key={name}> {name} </li>)}</ul>
//   </div>
// );
// const educationList = () => (
//   <div>
//     <ul>{education.map(name => <li key={name}> {name} </li>)}</ul>
//   </div>
// );

// interface Props {
//   className?: string;
//   hashes?: string[];
// }

  return (
    <div>
      <SummaryBox>
      <CardSummary label={''}>
        Your Resume 
      </CardSummary> 
      </SummaryBox>
    <Card>
        <Button 
          icon='hand'
          label='Make a Claim'>
        </Button>
        In Development - Coming Soon!<br />

        <Table>
          <Table.Row>
            <Table.Cell>
              Expertise:<br />
              <div>
                <ul>{expertise.map(name => <li key={name}> {name} </li>)}</ul>
              </div>
            </Table.Cell>
            <Table.Cell>
              Education:<br />
              <div>
                <ul>{education.map(name => <li key={name}> {name} </li>)}</ul>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>
              Work History:<br />
              <div>
                <ul>{workHistory.map(name => <li key={name}> {name} </li>)}</ul>
              </div>
            </Table.Cell>
            <Table.Cell>
              Good Deeds:<br />
              <div>
                <ul>{goodDeeds.map(name => <li key={name}> {name} </li>)}</ul>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Original IP:
              <div>
                <ul>{originalIP.map(name => <li key={name}> {name} </li>)}</ul>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table>

        

    </Card>
    </div>
  );
}

export default React.memo(Details);

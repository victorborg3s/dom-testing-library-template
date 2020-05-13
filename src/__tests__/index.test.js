import React from 'react'
import {render} from '@testing-library/react'

test('doens\'t considers a <caption> as <table>\'s "name"', () => {
  const { getByRole } = render(
    <table>
      <caption>Monthly savings</caption>
      <thead>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
      </tbody>
    </table>
  );
  expect(getByRole('table')).toBeTruthy();
  expect(getByRole('table', { name: 'Monthly savings' }))
    .toBeTruthy();
});

import { spaceScale } from '@arbutus/style.theming';

import { padding } from '../src/padding';

describe('Padding classes', () => {
  test('padding', () => {
    expect(padding).toEqual({
      p1: {
        paddingTop: spaceScale['1'],
        paddingBottom: spaceScale['1'],
        paddingLeft: spaceScale['1'],
        paddingRight: spaceScale['1'],
      },
      p2: {
        paddingBottom: spaceScale['2'],
        paddingLeft: spaceScale['2'],
        paddingRight: spaceScale['2'],
        paddingTop: spaceScale['2'],
      },
      p3: {
        paddingBottom: spaceScale['3'],
        paddingLeft: spaceScale['3'],
        paddingRight: spaceScale['3'],
        paddingTop: spaceScale['3'],
      },
      p4: {
        paddingBottom: spaceScale['4'],
        paddingLeft: spaceScale['4'],
        paddingRight: spaceScale['4'],
        paddingTop: spaceScale['4'],
      },
      p5: {
        paddingBottom: spaceScale['5'],
        paddingLeft: spaceScale['5'],
        paddingRight: spaceScale['5'],
        paddingTop: spaceScale['5'],
      },
      p6: {
        paddingBottom: spaceScale['6'],
        paddingLeft: spaceScale['6'],
        paddingRight: spaceScale['6'],
        paddingTop: spaceScale['6'],
      },
      p7: {
        paddingBottom: spaceScale['7'],
        paddingLeft: spaceScale['7'],
        paddingRight: spaceScale['7'],
        paddingTop: spaceScale['7'],
      },
      p8: {
        paddingBottom: spaceScale['8'],
        paddingLeft: spaceScale['8'],
        paddingRight: spaceScale['8'],
        paddingTop: spaceScale['8'],
      },
      p9: {
        paddingBottom: spaceScale['9'],
        paddingLeft: spaceScale['9'],
        paddingRight: spaceScale['9'],
        paddingTop: spaceScale['9'],
      },
      p10: {
        paddingBottom: spaceScale['10'],
        paddingLeft: spaceScale['10'],
        paddingRight: spaceScale['10'],
        paddingTop: spaceScale['10'],
      },
      p11: {
        paddingBottom: spaceScale['11'],
        paddingLeft: spaceScale['11'],
        paddingRight: spaceScale['11'],
        paddingTop: spaceScale['11'],
      },
      p12: {
        paddingBottom: spaceScale['12'],
        paddingLeft: spaceScale['12'],
        paddingRight: spaceScale['12'],
        paddingTop: spaceScale['12'],
      },
    });
  });
});

import { spaceScale } from '@arbutus/style.theming';

import { margin } from '../src/margin';

describe('Margins', () => {
  test('margin', () => {
    expect(margin).toEqual({
      m1: {
        marginTop: spaceScale['1'],
        marginBottom: spaceScale['1'],
        marginLeft: spaceScale['1'],
        marginRight: spaceScale['1'],
      },
      m2: {
        marginBottom: spaceScale['2'],
        marginLeft: spaceScale['2'],
        marginRight: spaceScale['2'],
        marginTop: spaceScale['2'],
      },
      m3: {
        marginBottom: spaceScale['3'],
        marginLeft: spaceScale['3'],
        marginRight: spaceScale['3'],
        marginTop: spaceScale['3'],
      },
      m4: {
        marginBottom: spaceScale['4'],
        marginLeft: spaceScale['4'],
        marginRight: spaceScale['4'],
        marginTop: spaceScale['4'],
      },
      m5: {
        marginBottom: spaceScale['5'],
        marginLeft: spaceScale['5'],
        marginRight: spaceScale['5'],
        marginTop: spaceScale['5'],
      },
      m6: {
        marginBottom: spaceScale['6'],
        marginLeft: spaceScale['6'],
        marginRight: spaceScale['6'],
        marginTop: spaceScale['6'],
      },
      m7: {
        marginBottom: spaceScale['7'],
        marginLeft: spaceScale['7'],
        marginRight: spaceScale['7'],
        marginTop: spaceScale['7'],
      },
      m8: {
        marginBottom: spaceScale['8'],
        marginLeft: spaceScale['8'],
        marginRight: spaceScale['8'],
        marginTop: spaceScale['8'],
      },
      m9: {
        marginBottom: spaceScale['9'],
        marginLeft: spaceScale['9'],
        marginRight: spaceScale['9'],
        marginTop: spaceScale['9'],
      },
      m10: {
        marginBottom: spaceScale['10'],
        marginLeft: spaceScale['10'],
        marginRight: spaceScale['10'],
        marginTop: spaceScale['10'],
      },
      m11: {
        marginBottom: spaceScale['11'],
        marginLeft: spaceScale['11'],
        marginRight: spaceScale['11'],
        marginTop: spaceScale['11'],
      },
      m12: {
        marginBottom: spaceScale['12'],
        marginLeft: spaceScale['12'],
        marginRight: spaceScale['12'],
        marginTop: spaceScale['12'],
      },
    });
  });
});

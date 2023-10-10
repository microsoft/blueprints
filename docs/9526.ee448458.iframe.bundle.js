'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [9526],
  {
    './node_modules/@griffel/core/index.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { q5: () => shorthands });
      const positionMap = ['Top', 'Right', 'Bottom', 'Left'];
      function generateStyles(property, suffix, ...values) {
        const [
            firstValue,
            secondValue = firstValue,
            thirdValue = firstValue,
            fourthValue = secondValue,
          ] = values,
          valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue],
          styles = {};
        for (let i = 0; i < valuesWithDefaults.length; i += 1)
          if (valuesWithDefaults[i] || 0 === valuesWithDefaults[i]) {
            styles[property + positionMap[i] + suffix] = valuesWithDefaults[i];
          }
        return styles;
      }
      function borderWidth(...values) {
        return generateStyles('border', 'Width', ...values);
      }
      function borderStyle(...values) {
        return generateStyles('border', 'Style', ...values);
      }
      function borderColor(...values) {
        return generateStyles('border', 'Color', ...values);
      }
      const isUnitless = (value) => 'number' == typeof value && !Number.isNaN(value),
        isAuto = (value) => 'auto' === value,
        widthReservedKeys = ['content', 'fit-content', 'max-content', 'min-content'],
        isWidth = (value) =>
          widthReservedKeys.some((key) => value === key) ||
          ((value) => 'string' == typeof value && /(\d+(\w+|%))/.test(value))(value);
      const cssVarRegEx = /var\(.*\)/gi;
      const customIdentRegEx = /^[a-zA-Z0-9\-_\\#;]+$/,
        nonCustomIdentRegEx =
          /^-moz-initial$|^auto$|^initial$|^inherit$|^revert$|^unset$|^span \d+$|\d.*/;
      function isCustomIdent(value) {
        return (
          void 0 !== value &&
          'string' == typeof value &&
          customIdentRegEx.test(value) &&
          !nonCustomIdentRegEx.test(value)
        );
      }
      const transitionGlobalInputs = [
        '-moz-initial',
        'inherit',
        'initial',
        'revert',
        'unset',
      ];
      const shorthands = {
        border: function border(...values) {
          return {
            ...borderWidth(values[0]),
            ...(values[1] && borderStyle(values[1])),
            ...(values[2] && borderColor(values[2])),
          };
        },
        borderLeft: function borderLeft(...values) {
          return {
            borderLeftWidth: values[0],
            ...(values[1] && { borderLeftStyle: values[1] }),
            ...(values[2] && { borderLeftColor: values[2] }),
          };
        },
        borderBottom: function borderBottom(...values) {
          return {
            borderBottomWidth: values[0],
            ...(values[1] && { borderBottomStyle: values[1] }),
            ...(values[2] && { borderBottomColor: values[2] }),
          };
        },
        borderRight: function borderRight(...values) {
          return {
            borderRightWidth: values[0],
            ...(values[1] && { borderRightStyle: values[1] }),
            ...(values[2] && { borderRightColor: values[2] }),
          };
        },
        borderTop: function borderTop(...values) {
          return {
            borderTopWidth: values[0],
            ...(values[1] && { borderTopStyle: values[1] }),
            ...(values[2] && { borderTopColor: values[2] }),
          };
        },
        borderColor,
        borderStyle,
        borderRadius: function borderRadius(
          value1,
          value2 = value1,
          value3 = value1,
          value4 = value2,
        ) {
          return {
            borderBottomRightRadius: value3,
            borderBottomLeftRadius: value4,
            borderTopRightRadius: value2,
            borderTopLeftRadius: value1,
          };
        },
        borderWidth,
        flex: function flex(...values) {
          const isOneValueSyntax = 1 === values.length,
            isTwoValueSyntax = 2 === values.length,
            isThreeValueSyntax = 3 === values.length;
          if (isOneValueSyntax) {
            const [firstValue] = values;
            if ('initial' === firstValue)
              return { flexGrow: 0, flexShrink: 1, flexBasis: 'auto' };
            if (isAuto(firstValue))
              return { flexGrow: 1, flexShrink: 1, flexBasis: 'auto' };
            if (((value) => 'none' === value)(firstValue))
              return { flexGrow: 0, flexShrink: 0, flexBasis: 'auto' };
            if (isUnitless(firstValue))
              return { flexGrow: firstValue, flexShrink: 1, flexBasis: 0 };
            if (isWidth(firstValue))
              return { flexGrow: 1, flexShrink: 1, flexBasis: firstValue };
          }
          if (isTwoValueSyntax) {
            const [firstValue, secondValue] = values;
            if (isUnitless(secondValue))
              return { flexGrow: firstValue, flexShrink: secondValue, flexBasis: 0 };
            if (isWidth(secondValue))
              return { flexGrow: firstValue, flexShrink: 1, flexBasis: secondValue };
          }
          if (isThreeValueSyntax) {
            const [firstValue, secondValue, thirdValue] = values;
            if (
              isUnitless(firstValue) &&
              isUnitless(secondValue) &&
              (isAuto(thirdValue) || isWidth(thirdValue))
            )
              return {
                flexGrow: firstValue,
                flexShrink: secondValue,
                flexBasis: thirdValue,
              };
          }
          return {};
        },
        gap: function gap(columnGap, rowGap = columnGap) {
          return { columnGap, rowGap };
        },
        gridArea: function gridArea(...values) {
          if (
            values.some(
              (value) =>
                !(function isValidGridAreaInput(value) {
                  return (
                    void 0 === value ||
                    'number' == typeof value ||
                    ('string' == typeof value && !cssVarRegEx.test(value))
                  );
                })(value),
            )
          )
            return {};
          const gridRowStart = void 0 !== values[0] ? values[0] : 'auto',
            gridColumnStart =
              void 0 !== values[1]
                ? values[1]
                : isCustomIdent(gridRowStart)
                ? gridRowStart
                : 'auto';
          return {
            gridRowStart,
            gridColumnStart,
            gridRowEnd:
              void 0 !== values[2]
                ? values[2]
                : isCustomIdent(gridRowStart)
                ? gridRowStart
                : 'auto',
            gridColumnEnd:
              void 0 !== values[3]
                ? values[3]
                : isCustomIdent(gridColumnStart)
                ? gridColumnStart
                : 'auto',
          };
        },
        margin: function margin(...values) {
          return generateStyles('margin', '', ...values);
        },
        marginBlock: function marginBlock(start, end = start) {
          return { marginBlockStart: start, marginBlockEnd: end };
        },
        marginInline: function marginInline(start, end = start) {
          return { marginInlineStart: start, marginInlineEnd: end };
        },
        padding: function padding(...values) {
          return generateStyles('padding', '', ...values);
        },
        paddingBlock: function paddingBlock(start, end = start) {
          return { paddingBlockStart: start, paddingBlockEnd: end };
        },
        paddingInline: function paddingInline(start, end = start) {
          return { paddingInlineStart: start, paddingInlineEnd: end };
        },
        overflow: function overflow(overflowX, overflowY = overflowX) {
          return { overflowX, overflowY };
        },
        inset: function inset(...values) {
          const [
            firstValue,
            secondValue = firstValue,
            thirdValue = firstValue,
            fourthValue = secondValue,
          ] = values;
          return {
            top: firstValue,
            right: secondValue,
            bottom: thirdValue,
            left: fourthValue,
          };
        },
        outline: function outline(outlineWidth, outlineStyle, outlineColor) {
          return {
            outlineWidth,
            ...(outlineStyle && { outlineStyle }),
            ...(outlineColor && { outlineColor }),
          };
        },
        transition: function transition(...values) {
          return (function isTransitionGlobalInputs(values) {
            return 1 === values.length && transitionGlobalInputs.includes(values[0]);
          })(values)
            ? {
                transitionDelay: values[0],
                transitionDuration: values[0],
                transitionProperty: values[0],
                transitionTimingFunction: values[0],
              }
            : (function normalizeTransitionInputs(transitionInputs) {
                if (1 === transitionInputs.length && Array.isArray(transitionInputs[0]))
                  return transitionInputs[0];
                return [transitionInputs];
              })(values).reduce(
                (
                  acc,
                  [property, duration = '0s', delay = '0s', timingFunction = 'ease'],
                  index,
                ) => (
                  0 === index
                    ? ((acc.transitionProperty = property),
                      (acc.transitionDuration = duration),
                      (acc.transitionDelay = delay),
                      (acc.transitionTimingFunction = timingFunction))
                    : ((acc.transitionProperty += `, ${property}`),
                      (acc.transitionDuration += `, ${duration}`),
                      (acc.transitionDelay += `, ${delay}`),
                      (acc.transitionTimingFunction += `, ${timingFunction}`)),
                  acc
                ),
                {},
              );
        },
      };
    },
  },
]);

'use strict';
(self.webpackChunkarbutus = self.webpackChunkarbutus || []).push([
  [8715],
  {
    './node_modules/@fluentui/react-avatar/lib/components/Avatar/Avatar.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { q: () => Avatar });
      var react = __webpack_require__('./node_modules/react/index.js'),
        createElement = __webpack_require__(
          './node_modules/@fluentui/react-jsx-runtime/lib/createElement.js',
        ),
        getSlotsNext = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js',
        );
      var useId = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/hooks/useId.js',
        ),
        getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        ),
        resolveShorthand = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/resolveShorthand.js',
        );
      function mergeCallbacks(callback1, callback2) {
        return (...args) => {
          null == callback1 || callback1(...args),
            null == callback2 || callback2(...args);
        };
      }
      const UNWANTED_ENCLOSURES_REGEX = /[\(\[\{][^\)\]\}]*[\)\]\}]/g,
        UNWANTED_CHARS_REGEX =
          /[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,
        PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,
        MULTIPLE_WHITESPACES_REGEX = /\s+/g,
        UNSUPPORTED_TEXT_REGEX =
          /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
      function getInitials(displayName, isRtl, options) {
        return displayName
          ? ((displayName = (function cleanupDisplayName(displayName) {
              return (displayName = (displayName = (displayName = displayName.replace(
                UNWANTED_ENCLOSURES_REGEX,
                '',
              )).replace(UNWANTED_CHARS_REGEX, '')).replace(
                MULTIPLE_WHITESPACES_REGEX,
                ' ',
              )).trim();
            })(displayName)),
            UNSUPPORTED_TEXT_REGEX.test(displayName) ||
            (!(null == options ? void 0 : options.allowPhoneInitials) &&
              PHONENUMBER_REGEX.test(displayName))
              ? ''
              : (function getInitialsLatin(displayName, isRtl, firstInitialOnly) {
                  let initials = '';
                  const splits = displayName.split(' ');
                  return (
                    0 !== splits.length &&
                      (initials += splits[0].charAt(0).toUpperCase()),
                    firstInitialOnly ||
                      (2 === splits.length
                        ? (initials += splits[1].charAt(0).toUpperCase())
                        : 3 === splits.length &&
                          (initials += splits[2].charAt(0).toUpperCase())),
                    isRtl && initials.length > 1
                      ? initials.charAt(1) + initials.charAt(0)
                      : initials
                  );
                })(
                  displayName,
                  isRtl,
                  null == options ? void 0 : options.firstInitialOnly,
                ))
          : '';
      }
      var utils_createFluentIcon = __webpack_require__(
        './node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js',
      );
      const PersonRegular = (0, utils_createFluentIcon.k)('PersonRegular', '1em', [
          'M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0 0 17 13a2 2 0 0 0-2-2H5Zm-1 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0 1 10 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13Z',
        ]),
        PresenceAvailable10Filled = (0, utils_createFluentIcon.k)(
          'PresenceAvailable10Filled',
          '10',
          [
            'M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z',
          ],
        ),
        PresenceAvailable10Regular = (0, utils_createFluentIcon.k)(
          'PresenceAvailable10Regular',
          '10',
          [
            'M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.1-1.6c.2.2.2.5 0 .7L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.9-1.9c.2-.19.5-.19.7 0Z',
          ],
        ),
        PresenceAvailable12Filled = (0, utils_createFluentIcon.k)(
          'PresenceAvailable12Filled',
          '12',
          [
            'M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Zm2.53-6.72L5.78 8.03c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 2.22-2.22a.75.75 0 0 1 1.06 1.06Z',
          ],
        ),
        PresenceAvailable12Regular = (0, utils_createFluentIcon.k)(
          'PresenceAvailable12Regular',
          '12',
          [
            'M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM1.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm7.03-1.78c.3.3.3.77 0 1.06L5.78 8.03c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 2.22-2.22c.3-.3.77-.3 1.06 0Z',
          ],
        ),
        PresenceAvailable16Filled = (0, utils_createFluentIcon.k)(
          'PresenceAvailable16Filled',
          '16',
          [
            'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm3.7-9.3-4 4a1 1 0 0 1-1.41 0l-2-2a1 1 0 1 1 1.42-1.4L7 8.58l3.3-3.3a1 1 0 0 1 1.4 1.42Z',
          ],
        ),
        PresenceAvailable16Regular = (0, utils_createFluentIcon.k)(
          'PresenceAvailable16Regular',
          '16',
          [
            'M11.7 6.7a1 1 0 0 0-1.4-1.4L7 8.58l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l4-4ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z',
          ],
        ),
        PresenceAvailable20Filled = (0, utils_createFluentIcon.k)(
          'PresenceAvailable20Filled',
          '20',
          [
            'M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm4.2-11.8-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4L9 10.58l3.8-3.8a1 1 0 1 1 1.4 1.42Z',
          ],
        ),
        PresenceAvailable20Regular = (0, utils_createFluentIcon.k)(
          'PresenceAvailable20Regular',
          '20',
          [
            'M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm12.2-3.2a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4L9 10.58l3.8-3.8a1 1 0 0 1 1.4 0Z',
          ],
        ),
        PresenceAway10Filled = (0, utils_createFluentIcon.k)(
          'PresenceAway10Filled',
          '10',
          [
            'M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm0-7v1.8l1.35 1.35a.5.5 0 1 1-.7.7l-1.5-1.5A.5.5 0 0 1 4 5V3a.5.5 0 0 1 1 0Z',
          ],
        ),
        PresenceAway10Regular = (0, utils_createFluentIcon.k)(
          'PresenceAway10Regular',
          '10',
          [
            'M5 4.8V3a.5.5 0 0 0-1 0v2c0 .13.05.26.15.35l1.5 1.5a.5.5 0 1 0 .7-.7L5 4.79Zm5 .2A5 5 0 1 1 0 5a5 5 0 0 1 10 0ZM9 5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z',
          ],
        ),
        PresenceAway12Filled = (0, utils_createFluentIcon.k)(
          'PresenceAway12Filled',
          '12',
          [
            'M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Zm.5-8.75v2.4l1.49 1.28A.75.75 0 1 1 7 8.07l-1.75-1.5A.75.75 0 0 1 5 6V3.25a.75.75 0 0 1 1.5 0Z',
          ],
        ),
        PresenceAway12Regular = (0, utils_createFluentIcon.k)(
          'PresenceAway12Regular',
          '12',
          [
            'M6.5 5.66V3.25a.75.75 0 0 0-1.5 0V6c0 .22.1.43.26.57l1.75 1.5A.75.75 0 1 0 8 6.93L6.5 5.66ZM12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Zm-1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z',
          ],
        ),
        PresenceAway16Filled = (0, utils_createFluentIcon.k)(
          'PresenceAway16Filled',
          '16',
          [
            'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.5-11.5v3.02l2.12 1.7a1 1 0 1 1-1.24 1.56l-2.5-2A1 1 0 0 1 6.5 8V4.5a1 1 0 0 1 2 0Z',
          ],
        ),
        PresenceAway16Regular = (0, utils_createFluentIcon.k)(
          'PresenceAway16Regular',
          '16',
          [
            'M8.5 7.52V4.5a1 1 0 1 0-2 0V8c0 .3.14.6.38.78l2.5 2a1 1 0 1 0 1.24-1.56L8.5 7.52ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z',
          ],
        ),
        PresenceAway20Filled = (0, utils_createFluentIcon.k)(
          'PresenceAway20Filled',
          '20',
          [
            'M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14V9.6l2.7 2.7a1 1 0 0 1-1.4 1.42l-3-3A1 1 0 0 1 8 10V6a1 1 0 1 1 2 0Z',
          ],
        ),
        PresenceAway20Regular = (0, utils_createFluentIcon.k)(
          'PresenceAway20Regular',
          '20',
          [
            'M10 9.59V6a1 1 0 1 0-2 0V10c0 .27.1.52.3.7l3 3a1 1 0 1 0 1.4-1.4L10 9.58Zm-10 .4a10 10 0 1 1 20 0 10 10 0 0 1-20 0ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z',
          ],
        ),
        PresenceBlocked10Regular = (0, utils_createFluentIcon.k)(
          'PresenceBlocked10Regular',
          '10',
          [
            'M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0ZM9 5a4 4 0 0 1-6.45 3.16l5.61-5.61C8.69 3.22 9 4.08 9 5ZM7.45 1.84 1.84 7.45a4 4 0 0 1 5.61-5.61Z',
          ],
        ),
        PresenceBlocked12Regular = (0, utils_createFluentIcon.k)(
          'PresenceBlocked12Regular',
          '12',
          [
            'M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Zm-1.5 0c0-.97-.3-1.87-.83-2.6L3.39 9.66A4.5 4.5 0 0 0 10.5 6ZM8.6 2.33a4.5 4.5 0 0 0-6.28 6.28l6.29-6.28Z',
          ],
        ),
        PresenceBlocked16Regular = (0, utils_createFluentIcon.k)(
          'PresenceBlocked16Regular',
          '16',
          [
            'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-2 0c0-1.3-.41-2.5-1.1-3.48L4.51 12.9A6 6 0 0 0 14 8Zm-2.52-4.9a6 6 0 0 0-8.37 8.37l8.37-8.36Z',
          ],
        ),
        PresenceBlocked20Regular = (0, utils_createFluentIcon.k)(
          'PresenceBlocked20Regular',
          '20',
          [
            'M20 10a10 10 0 1 0-20 0 10 10 0 0 0 20 0Zm-2 0a8 8 0 0 1-12.9 6.32L16.31 5.09A7.97 7.97 0 0 1 18 10Zm-3.1-6.32L3.69 14.91A8 8 0 0 1 14.91 3.68Z',
          ],
        ),
        PresenceBusy10Filled = (0, utils_createFluentIcon.k)(
          'PresenceBusy10Filled',
          '10',
          ['M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0Z'],
        ),
        PresenceBusy12Filled = (0, utils_createFluentIcon.k)(
          'PresenceBusy12Filled',
          '12',
          ['M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0Z'],
        ),
        PresenceBusy16Filled = (0, utils_createFluentIcon.k)(
          'PresenceBusy16Filled',
          '16',
          ['M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z'],
        ),
        PresenceBusy20Filled = (0, utils_createFluentIcon.k)(
          'PresenceBusy20Filled',
          '20',
          ['M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z'],
        ),
        PresenceDnd10Filled = (0, utils_createFluentIcon.k)('PresenceDnd10Filled', '10', [
          'M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10ZM3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z',
        ]),
        PresenceDnd10Regular = (0, utils_createFluentIcon.k)(
          'PresenceDnd10Regular',
          '10',
          [
            'M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm2 0c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 3 5Z',
          ],
        ),
        PresenceDnd12Filled = (0, utils_createFluentIcon.k)('PresenceDnd12Filled', '12', [
          'M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12ZM3.75 5.25h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5Z',
        ]),
        PresenceDnd12Regular = (0, utils_createFluentIcon.k)(
          'PresenceDnd12Regular',
          '12',
          [
            'M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM1.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3 6c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 6Z',
          ],
        ),
        PresenceDnd16Filled = (0, utils_createFluentIcon.k)('PresenceDnd16Filled', '16', [
          'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM5.25 7h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 1 1 0-2Z',
        ]),
        PresenceDnd16Regular = (0, utils_createFluentIcon.k)(
          'PresenceDnd16Regular',
          '16',
          [
            'M5.25 7a1 1 0 0 0 0 2h5.5a1 1 0 1 0 0-2h-5.5ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z',
          ],
        ),
        PresenceDnd20Filled = (0, utils_createFluentIcon.k)('PresenceDnd20Filled', '20', [
          'M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM7 9h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z',
        ]),
        PresenceDnd20Regular = (0, utils_createFluentIcon.k)(
          'PresenceDnd20Regular',
          '20',
          [
            'M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4 0a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z',
          ],
        ),
        PresenceOffline10Regular = (0, utils_createFluentIcon.k)(
          'PresenceOffline10Regular',
          '10',
          [
            'M6.85 3.15c.2.2.2.5 0 .7L5.71 5l1.14 1.15a.5.5 0 1 1-.7.7L5 5.71 3.85 6.85a.5.5 0 1 1-.7-.7L4.29 5 3.15 3.85a.5.5 0 1 1 .7-.7L5 4.29l1.15-1.14c.2-.2.5-.2.7 0ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
          ],
        ),
        PresenceOffline12Regular = (0, utils_createFluentIcon.k)(
          'PresenceOffline12Regular',
          '12',
          [
            'M8.03 3.97c.3.3.3.77 0 1.06L7.06 6l.97.97a.75.75 0 0 1-1.06 1.06L6 7.06l-.97.97a.75.75 0 0 1-1.06-1.06L4.94 6l-.97-.97a.75.75 0 0 1 1.06-1.06l.97.97.97-.97c.3-.3.77-.3 1.06 0ZM0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Zm6-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z',
          ],
        ),
        PresenceOffline16Regular = (0, utils_createFluentIcon.k)(
          'PresenceOffline16Regular',
          '16',
          [
            'M10.7 5.3a1 1 0 0 1 0 1.4L9.42 8l1.3 1.3a1 1 0 0 1-1.42 1.4L8 9.42l-1.3 1.3a1 1 0 0 1-1.4-1.42L6.58 8l-1.3-1.3a1 1 0 0 1 1.42-1.4L8 6.58l1.3-1.3a1 1 0 0 1 1.4 0ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z',
          ],
        ),
        PresenceOffline20Regular = (0, utils_createFluentIcon.k)(
          'PresenceOffline20Regular',
          '20',
          [
            'M13.7 6.3a1 1 0 0 1 0 1.4L11.42 10l2.3 2.3a1 1 0 0 1-1.42 1.4L10 11.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L8.58 10l-2.3-2.3a1 1 0 0 1 1.42-1.4L10 8.58l2.3-2.3a1 1 0 0 1 1.4 0ZM0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z',
          ],
        ),
        PresenceOof10Regular = (0, utils_createFluentIcon.k)(
          'PresenceOof10Regular',
          '10',
          [
            'M5.35 3.85a.5.5 0 1 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7L4.7 5.5h1.8a.5.5 0 1 0 0-1H4.7l.65-.65ZM5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0ZM1 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z',
          ],
        ),
        PresenceOof12Regular = (0, utils_createFluentIcon.k)(
          'PresenceOof12Regular',
          '12',
          [
            'M6.28 4.53a.75.75 0 0 0-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h2.69a.75.75 0 1 0 0-1.5h-2.7l.73-.72ZM6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM1.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z',
          ],
        ),
        PresenceOof16Regular = (0, utils_createFluentIcon.k)(
          'PresenceOof16Regular',
          '16',
          [
            'M8.2 6.2a1 1 0 1 0-1.4-1.4L4.3 7.3a1 1 0 0 0 0 1.4l2.5 2.5a1 1 0 0 0 1.4-1.4L7.42 9H11a1 1 0 1 0 0-2H7.41l.8-.8ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z',
          ],
        ),
        PresenceOof20Regular = (0, utils_createFluentIcon.k)(
          'PresenceOof20Regular',
          '20',
          [
            'M10.7 7.7A1 1 0 1 0 9.28 6.3l-3 3a1 1 0 0 0 0 1.41l3 3a1 1 0 1 0 1.42-1.41l-1.3-1.3H13a1 1 0 1 0 0-2H9.4l1.3-1.29ZM10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z',
          ],
        ),
        PresenceUnknown10Regular = (0, utils_createFluentIcon.k)(
          'PresenceUnknown10Regular',
          '10',
          ['M5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5Z'],
        ),
        PresenceUnknown12Regular = (0, utils_createFluentIcon.k)(
          'PresenceUnknown12Regular',
          '12',
          [
            'M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6Z',
          ],
        ),
        PresenceUnknown16Regular = (0, utils_createFluentIcon.k)(
          'PresenceUnknown16Regular',
          '16',
          ['M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z'],
        ),
        PresenceUnknown20Regular = (0, utils_createFluentIcon.k)(
          'PresenceUnknown20Regular',
          '20',
          [
            'M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z',
          ],
        ),
        presenceAwayRegular = {
          tiny: PresenceAway10Regular,
          'extra-small': PresenceAway10Regular,
          small: PresenceAway12Regular,
          medium: PresenceAway16Regular,
          large: PresenceAway20Regular,
          'extra-large': PresenceAway20Regular,
        },
        presenceAwayFilled = {
          tiny: PresenceAway10Filled,
          'extra-small': PresenceAway10Filled,
          small: PresenceAway12Filled,
          medium: PresenceAway16Filled,
          large: PresenceAway20Filled,
          'extra-large': PresenceAway20Filled,
        },
        presenceAvailableRegular = {
          tiny: PresenceAvailable10Regular,
          'extra-small': PresenceAvailable10Regular,
          small: PresenceAvailable12Regular,
          medium: PresenceAvailable16Regular,
          large: PresenceAvailable20Regular,
          'extra-large': PresenceAvailable20Regular,
        },
        presenceAvailableFilled = {
          tiny: PresenceAvailable10Filled,
          'extra-small': PresenceAvailable10Filled,
          small: PresenceAvailable12Filled,
          medium: PresenceAvailable16Filled,
          large: PresenceAvailable20Filled,
          'extra-large': PresenceAvailable20Filled,
        },
        presenceBlockedRegular = {
          tiny: PresenceBlocked10Regular,
          'extra-small': PresenceBlocked10Regular,
          small: PresenceBlocked12Regular,
          medium: PresenceBlocked16Regular,
          large: PresenceBlocked20Regular,
          'extra-large': PresenceBlocked20Regular,
        },
        presenceBusyFilled = {
          tiny: PresenceBusy10Filled,
          'extra-small': PresenceBusy10Filled,
          small: PresenceBusy12Filled,
          medium: PresenceBusy16Filled,
          large: PresenceBusy20Filled,
          'extra-large': PresenceBusy20Filled,
        },
        presenceDndFilled = {
          tiny: PresenceDnd10Filled,
          'extra-small': PresenceDnd10Filled,
          small: PresenceDnd12Filled,
          medium: PresenceDnd16Filled,
          large: PresenceDnd20Filled,
          'extra-large': PresenceDnd20Filled,
        },
        presenceDndRegular = {
          tiny: PresenceDnd10Regular,
          'extra-small': PresenceDnd10Regular,
          small: PresenceDnd12Regular,
          medium: PresenceDnd16Regular,
          large: PresenceDnd20Regular,
          'extra-large': PresenceDnd20Regular,
        },
        presenceOofRegular = {
          tiny: PresenceOof10Regular,
          'extra-small': PresenceOof10Regular,
          small: PresenceOof12Regular,
          medium: PresenceOof16Regular,
          large: PresenceOof20Regular,
          'extra-large': PresenceOof20Regular,
        },
        presenceOfflineRegular = {
          tiny: PresenceOffline10Regular,
          'extra-small': PresenceOffline10Regular,
          small: PresenceOffline12Regular,
          medium: PresenceOffline16Regular,
          large: PresenceOffline20Regular,
          'extra-large': PresenceOffline20Regular,
        },
        presenceUnknownRegular = {
          tiny: PresenceUnknown10Regular,
          'extra-small': PresenceUnknown10Regular,
          small: PresenceUnknown12Regular,
          medium: PresenceUnknown16Regular,
          large: PresenceUnknown20Regular,
          'extra-large': PresenceUnknown20Regular,
        },
        useBadge_unstable = (props, ref) => {
          const {
            shape = 'circular',
            size = 'medium',
            iconPosition = 'before',
            appearance = 'filled',
            color = 'brand',
          } = props;
          return {
            shape,
            size,
            iconPosition,
            appearance,
            color,
            components: { root: 'div', icon: 'span' },
            root: (0, getNativeElementProps.n)('div', { ref, ...props }),
            icon: (0, resolveShorthand.O)(props.icon),
          };
        },
        DEFAULT_STRINGS = {
          busy: 'busy',
          'out-of-office': 'out of office',
          away: 'away',
          available: 'available',
          offline: 'offline',
          'do-not-disturb': 'do not disturb',
          unknown: 'unknown',
          blocked: 'blocked',
        },
        usePresenceBadge_unstable = (props, ref) => {
          const { size = 'medium', status = 'available', outOfOffice = !1 } = props,
            statusText = DEFAULT_STRINGS[status],
            oofText =
              props.outOfOffice && 'out-of-office' !== props.status
                ? ` ${DEFAULT_STRINGS['out-of-office']}`
                : '',
            IconElement = ((status, outOfOffice, size) => {
              switch (status) {
                case 'available':
                  return outOfOffice
                    ? presenceAvailableRegular[size]
                    : presenceAvailableFilled[size];
                case 'away':
                  return outOfOffice
                    ? presenceAwayRegular[size]
                    : presenceAwayFilled[size];
                case 'blocked':
                  return presenceBlockedRegular[size];
                case 'busy':
                  return outOfOffice
                    ? presenceUnknownRegular[size]
                    : presenceBusyFilled[size];
                case 'do-not-disturb':
                  return outOfOffice ? presenceDndRegular[size] : presenceDndFilled[size];
                case 'offline':
                  return presenceOfflineRegular[size];
                case 'out-of-office':
                  return presenceOofRegular[size];
                case 'unknown':
                  return presenceUnknownRegular[size];
              }
            })(status, outOfOffice, size);
          return {
            ...useBadge_unstable(
              {
                'aria-label': statusText + oofText,
                role: 'img',
                ...props,
                size,
                icon: (0, resolveShorthand.O)(props.icon, {
                  defaultProps: {
                    children: IconElement ? react.createElement(IconElement, null) : null,
                  },
                  required: !0,
                }),
              },
              ref,
            ),
            status,
            outOfOffice,
          };
        };
      var RendererContext_esm = __webpack_require__(
          './node_modules/@griffel/react/RendererContext.esm.js',
        ),
        TextDirectionContext_esm = __webpack_require__(
          './node_modules/@griffel/react/TextDirectionContext.esm.js',
        );
      function _resetStyles_esm_resetStyles(ltrClassName, rtlClassName, cssRules) {
        const getStyles = (function __resetStyles(ltrClassName, rtlClassName, cssRules) {
          const insertionCache = {};
          return function computeClassName(options) {
            const { dir, renderer } = options,
              isLTR = 'ltr' === dir,
              rendererId = isLTR ? renderer.id : renderer.id + 'r';
            return (
              void 0 === insertionCache[rendererId] &&
                (renderer.insertCSSRules({ r: cssRules }),
                (insertionCache[rendererId] = !0)),
              isLTR ? ltrClassName : rtlClassName || ltrClassName
            );
          };
        })(ltrClassName, rtlClassName, cssRules);
        return function useClasses() {
          const dir = (0, TextDirectionContext_esm.s)(),
            renderer = (0, RendererContext_esm.a)();
          return getStyles({ dir, renderer });
        };
      }
      var _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const presenceBadgeClassNames_root = 'fui-PresenceBadge',
        presenceBadgeClassNames_icon = 'fui-PresenceBadge__icon',
        useRootClassName = _resetStyles_esm_resetStyles('r832ydo', null, [
          '.r832ydo{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;box-sizing:border-box;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:var(--borderRadiusCircular);background-color:var(--colorNeutralBackground1);padding:1px;-webkit-background-clip:content-box;background-clip:content-box;}',
        ]),
        useIconClassName = _resetStyles_esm_resetStyles('r11ag4qr', null, [
          '.r11ag4qr{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:-1px;}',
        ]),
        useStyles = (0, _styles_esm.s)(
          {
            statusBusy: { sj55zd: 'fvi85wt' },
            statusAway: { sj55zd: 'f14k8a89' },
            statusAvailable: { sj55zd: 'fqa5hgp' },
            statusOffline: { sj55zd: 'f11d4kpn' },
            statusOutOfOffice: { sj55zd: 'fdce8r3' },
            statusUnknown: { sj55zd: 'f11d4kpn' },
            outOfOffice: { sj55zd: 'fr0bkrk' },
            outOfOfficeAvailable: { sj55zd: 'fqa5hgp' },
            outOfOfficeBusy: { sj55zd: 'fvi85wt' },
            outOfOfficeUnknown: { sj55zd: 'f11d4kpn' },
            tiny: {
              Bubjx69: 'f9ikmtg',
              a9b677: 'f16dn6v3',
              B2eet1l: 'f1w2irj7',
              B5pe6w7: 'fab5kbq',
              p4uzdd: 'f1ms1d91',
            },
            large: {
              Bubjx69: 'f9ikmtg',
              a9b677: 'f64fuq3',
              B5pe6w7: 'f1vfi1yj',
              p4uzdd: 'f15s34gz',
            },
            extraLarge: {
              Bubjx69: 'f9ikmtg',
              a9b677: 'f1w9dchk',
              B5pe6w7: 'f14efy9b',
              p4uzdd: 'fhipgdu',
            },
          },
          {
            d: [
              '.fvi85wt{color:var(--colorPaletteRedBackground3);}',
              '.f14k8a89{color:var(--colorPaletteMarigoldBackground3);}',
              '.fqa5hgp{color:var(--colorPaletteLightGreenForeground3);}',
              '.f11d4kpn{color:var(--colorNeutralForeground3);}',
              '.fdce8r3{color:var(--colorPaletteBerryForeground3);}',
              '.fr0bkrk{color:var(--colorNeutralBackground1);}',
              '.f9ikmtg{aspect-ratio:1;}',
              '.f16dn6v3{width:6px;}',
              '.f1w2irj7{-webkit-background-clip:unset;background-clip:unset;}',
              '.fab5kbq svg{width:6px!important;}',
              '.f1ms1d91 svg{height:6px!important;}',
              '.f64fuq3{width:20px;}',
              '.f1vfi1yj svg{width:20px!important;}',
              '.f15s34gz svg{height:20px!important;}',
              '.f1w9dchk{width:28px;}',
              '.f14efy9b svg{width:28px!important;}',
              '.fhipgdu svg{height:28px!important;}',
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const PresenceBadge = react.forwardRef((props, ref) => {
        const state = usePresenceBadge_unstable(props, ref);
        return (
          ((state) => {
            const rootClassName = useRootClassName(),
              iconClassName = useIconClassName(),
              styles = useStyles(),
              isBusy =
                'busy' === (status = state.status) ||
                'do-not-disturb' === status ||
                'blocked' === status;
            var status;
            (state.root.className = (0, mergeClasses_esm.z)(
              presenceBadgeClassNames_root,
              rootClassName,
              isBusy && styles.statusBusy,
              'away' === state.status && styles.statusAway,
              'available' === state.status && styles.statusAvailable,
              'offline' === state.status && styles.statusOffline,
              'out-of-office' === state.status && styles.statusOutOfOffice,
              'unknown' === state.status && styles.statusUnknown,
              state.outOfOffice && styles.outOfOffice,
              state.outOfOffice &&
                'available' === state.status &&
                styles.outOfOfficeAvailable,
              state.outOfOffice && isBusy && styles.outOfOfficeBusy,
              state.outOfOffice && 'away' === state.status && styles.statusAway,
              state.outOfOffice && 'offline' === state.status && styles.statusOffline,
              state.outOfOffice &&
                'out-of-office' === state.status &&
                styles.statusOutOfOffice,
              state.outOfOffice &&
                'unknown' === state.status &&
                styles.outOfOfficeUnknown,
              'tiny' === state.size && styles.tiny,
              'large' === state.size && styles.large,
              'extra-large' === state.size && styles.extraLarge,
              state.root.className,
            )),
              state.icon &&
                (state.icon.className = (0, mergeClasses_esm.z)(
                  presenceBadgeClassNames_icon,
                  iconClassName,
                  state.icon.className,
                ));
          })(state),
          (0, CustomStyleHooksContext.oj)('usePresenceBadgeStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(
              slots.root,
              slotProps.root,
              'before' === state.iconPosition &&
                slots.icon &&
                (0, createElement.a)(slots.icon, slotProps.icon),
              state.root.children,
              'after' === state.iconPosition &&
                slots.icon &&
                (0, createElement.a)(slots.icon, slotProps.icon),
            );
          })(state)
        );
      });
      PresenceBadge.displayName = 'PresenceBadge';
      var ProviderContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js',
      );
      const avatarContext = react.createContext(void 0),
        avatarContextDefaultValue = {};
      avatarContext.Provider;
      var _React_useContext;
      const useAvatar_DEFAULT_STRINGS = { active: 'active', inactive: 'inactive' },
        useAvatar_unstable = (props, ref) => {
          const { dir } = (0, ProviderContext.O)(),
            { shape: contextShape, size: contextSize } =
              null !== (_React_useContext = react.useContext(avatarContext)) &&
              void 0 !== _React_useContext
                ? _React_useContext
                : avatarContextDefaultValue,
            {
              name,
              size = null != contextSize ? contextSize : 32,
              shape = null != contextShape ? contextShape : 'circular',
              active = 'unset',
              activeAppearance = 'ring',
              idForColor,
            } = props;
          let { color = 'neutral' } = props;
          var _ref;
          'colorful' === color &&
            (color =
              avatarColors[
                getHashCode(
                  null !== (_ref = null != idForColor ? idForColor : name) &&
                    void 0 !== _ref
                    ? _ref
                    : '',
                ) % avatarColors.length
              ]);
          const baseId = (0, useId.Me)('avatar-'),
            root = (0, getNativeElementProps.n)(
              'span',
              { role: 'img', id: baseId, ...props, ref },
              ['name'],
            ),
            [imageHidden, setImageHidden] = react.useState(void 0),
            image = (0, resolveShorthand.O)(props.image, {
              defaultProps: {
                alt: '',
                role: 'presentation',
                'aria-hidden': !0,
                hidden: imageHidden,
              },
            });
          image &&
            ((image.onError = mergeCallbacks(image.onError, () => setImageHidden(!0))),
            (image.onLoad = mergeCallbacks(image.onLoad, () => setImageHidden(void 0))));
          let icon,
            initials = (0, resolveShorthand.O)(props.initials, {
              required: !0,
              defaultProps: {
                children: getInitials(name, 'rtl' === dir, {
                  firstInitialOnly: size <= 16,
                }),
                id: baseId + '__initials',
              },
            });
          (null == initials ? void 0 : initials.children) || (initials = void 0),
            initials ||
              (image && !imageHidden) ||
              (icon = (0, resolveShorthand.O)(props.icon, {
                required: !0,
                defaultProps: {
                  children: react.createElement(PersonRegular, null),
                  'aria-hidden': !0,
                },
              }));
          const badge = (0, resolveShorthand.O)(props.badge, {
            defaultProps: { size: getBadgeSize(size), id: baseId + '__badge' },
          });
          let activeAriaLabelElement;
          if (
            !root['aria-label'] &&
            !root['aria-labelledby'] &&
            (name
              ? ((root['aria-label'] = name),
                badge && (root['aria-labelledby'] = root.id + ' ' + badge.id))
              : initials &&
                (root['aria-labelledby'] = initials.id + (badge ? ' ' + badge.id : '')),
            'active' === active || 'inactive' === active)
          ) {
            const activeText = useAvatar_DEFAULT_STRINGS[active];
            if (root['aria-labelledby']) {
              const activeId = baseId + '__active';
              (root['aria-labelledby'] += ' ' + activeId),
                (activeAriaLabelElement = react.createElement(
                  'span',
                  { hidden: !0, id: activeId },
                  activeText,
                ));
            } else root['aria-label'] && (root['aria-label'] += ' ' + activeText);
          }
          return {
            size,
            shape,
            active,
            activeAppearance,
            activeAriaLabelElement,
            color,
            components: {
              root: 'span',
              initials: 'span',
              icon: 'span',
              image: 'img',
              badge: PresenceBadge,
            },
            root,
            initials,
            icon,
            image,
            badge,
          };
        },
        getBadgeSize = (size) =>
          size >= 96
            ? 'extra-large'
            : size >= 64
            ? 'large'
            : size >= 56
            ? 'medium'
            : size >= 40
            ? 'small'
            : size >= 28
            ? 'extra-small'
            : 'tiny',
        avatarColors = [
          'dark-red',
          'cranberry',
          'red',
          'pumpkin',
          'peach',
          'marigold',
          'gold',
          'brass',
          'brown',
          'forest',
          'seafoam',
          'dark-green',
          'light-teal',
          'teal',
          'steel',
          'blue',
          'royal-blue',
          'cornflower',
          'navy',
          'lavender',
          'purple',
          'grape',
          'lilac',
          'pink',
          'magenta',
          'plum',
          'beige',
          'mink',
          'platinum',
          'anchor',
        ],
        getHashCode = (str) => {
          let hashCode = 0;
          for (let len = str.length - 1; len >= 0; len--) {
            const ch = str.charCodeAt(len),
              shift = len % 8;
            hashCode ^= (ch << shift) + (ch >> (8 - shift));
          }
          return hashCode;
        },
        avatarClassNames_root = 'fui-Avatar',
        avatarClassNames_image = 'fui-Avatar__image',
        avatarClassNames_initials = 'fui-Avatar__initials',
        avatarClassNames_icon = 'fui-Avatar__icon',
        avatarClassNames_badge = 'fui-Avatar__badge',
        useAvatarStyles_styles_useRootClassName = _resetStyles_esm_resetStyles(
          'r81b29z',
          'r1aatmv',
          [
            '.r81b29z{display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;vertical-align:middle;border-radius:var(--borderRadiusCircular);font-family:var(--fontFamilyBase);font-weight:var(--fontWeightSemibold);font-size:var(--fontSizeBase300);width:32px;height:32px;}',
            '.r81b29z::before,.r81b29z::after{position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;margin:calc(-2 * var(--fui-Avatar-ringWidth, 0px));border-radius:inherit;transition-property:margin,opacity;transition-timing-function:var(--curveEasyEaseMax),var(--curveLinear);transition-duration:var(--durationUltraSlow),var(--durationSlower);}',
            '@media screen and (prefers-reduced-motion: reduce){.r81b29z::before,.r81b29z::after{transition-duration:0.01ms;}}',
            '.r81b29z::before{border-style:solid;border-width:var(--fui-Avatar-ringWidth);}',
            '.r1aatmv{display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;vertical-align:middle;border-radius:var(--borderRadiusCircular);font-family:var(--fontFamilyBase);font-weight:var(--fontWeightSemibold);font-size:var(--fontSizeBase300);width:32px;height:32px;}',
            '.r1aatmv::before,.r1aatmv::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:calc(-2 * var(--fui-Avatar-ringWidth, 0px));border-radius:inherit;transition-property:margin,opacity;transition-timing-function:var(--curveEasyEaseMax),var(--curveLinear);transition-duration:var(--durationUltraSlow),var(--durationSlower);}',
            '@media screen and (prefers-reduced-motion: reduce){.r1aatmv::before,.r1aatmv::after{transition-duration:0.01ms;}}',
            '.r1aatmv::before{border-style:solid;border-width:var(--fui-Avatar-ringWidth);}',
          ],
        ),
        useImageClassName = _resetStyles_esm_resetStyles('r136dc0n', 'rjly0nl', [
          '.r136dc0n{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;object-fit:cover;vertical-align:top;}',
          '.rjly0nl{position:absolute;top:0;right:0;width:100%;height:100%;border-radius:inherit;object-fit:cover;vertical-align:top;}',
        ]),
        useIconInitialsClassName = _resetStyles_esm_resetStyles('rip04v', 'r31uzil', [
          '.rip04v{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;height:100%;line-height:1;border:var(--strokeWidthThin) solid var(--colorTransparentStroke);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;vertical-align:center;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;}',
          '.r31uzil{position:absolute;box-sizing:border-box;top:0;right:0;width:100%;height:100%;line-height:1;border:var(--strokeWidthThin) solid var(--colorTransparentStroke);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;vertical-align:center;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;}',
        ]),
        useAvatarStyles_styles_useStyles = (0, _styles_esm.s)(
          {
            textCaption2Strong: { Be2twd7: 'f13mqy1h' },
            textCaption1Strong: { Be2twd7: 'fy9rknc' },
            textSubtitle2: { Be2twd7: 'fod5ikn' },
            textSubtitle1: { Be2twd7: 'f1pp30po' },
            textTitle3: { Be2twd7: 'f1x0m3f5' },
            squareSmall: {
              Bbmb7ep: ['f1g3puop', 'fi2rrw2'],
              Beyfa6y: ['fi2rrw2', 'f1g3puop'],
              B7oj6ja: ['f1rstyi9', 'f1s4nn1u'],
              Btl43ni: ['f1s4nn1u', 'f1rstyi9'],
            },
            squareMedium: {
              Bbmb7ep: ['f1aa9q02', 'f16jpd5f'],
              Beyfa6y: ['f16jpd5f', 'f1aa9q02'],
              B7oj6ja: ['f1jar5jt', 'fyu767a'],
              Btl43ni: ['fyu767a', 'f1jar5jt'],
            },
            squareLarge: {
              Bbmb7ep: ['f1ldthgs', 'frrelxk'],
              Beyfa6y: ['frrelxk', 'f1ldthgs'],
              B7oj6ja: ['fobrfso', 'ffisxpw'],
              Btl43ni: ['ffisxpw', 'fobrfso'],
            },
            squareXLarge: {
              Bbmb7ep: ['fnivh3a', 'fc7yr5o'],
              Beyfa6y: ['fc7yr5o', 'fnivh3a'],
              B7oj6ja: ['f1el4m67', 'f8yange'],
              Btl43ni: ['f8yange', 'f1el4m67'],
            },
            activeOrInactive: {
              Bz10aip: 'ftfx35i',
              Bmy1vo4: 'fv0atk9',
              B3o57yi: 'f1iry5bo',
              Bkqvd7p: 'f15n41j8',
              Hwfdqs: 'f1onx1g3',
            },
            ring: { Ftih45: 'f1wl9k8s' },
            ringBadgeCutout: { f4a502: 'fp2gujx' },
            ringThick: { of393c: 'fq1w1vq' },
            ringThicker: { of393c: 'fzg6ace' },
            ringThickest: { of393c: 'f1nu8p71' },
            shadow: { Bsft5z2: 'f13zj6fq' },
            shadow4: { Be6vj1x: 'fcjn15l' },
            shadow8: { Be6vj1x: 'f1tm8t9f' },
            shadow16: { Be6vj1x: 'f1a1aohj' },
            shadow28: { Be6vj1x: 'fond6v5' },
            inactive: {
              abs64n: 'fp25eh',
              Bz10aip: 'f1clczzi',
              Bkqvd7p: 'f1l3s34x',
              Bucmhp4: 'f1f5ar78',
              b2tv09: ['fqxtap0', 'fhjukvy'],
              Bfgortx: 'f1qj1nzo',
              Bnvr3x9: ['fhjukvy', 'fqxtap0'],
              b6ubon: 'fw457kn',
              Bqinb2h: 'f1wmllxl',
            },
            badge: {
              qhf8xq: 'f1euv43f',
              B5kzvoi: 'f1yab3r1',
              j35jbq: ['f1e31b4d', 'f1vgc2s3'],
            },
            badgeCutout: { btxmck: 'f1eugkqs' },
            badgeAlign: { Dnlfbu: ['f1tlnv9o', 'f1y9kyih'] },
            tiny: { Bdjeniz: 'f1uwoubl', niu6jh: 'fid048z' },
            'extra-small': { Bdjeniz: 'f13ar0e0', niu6jh: 'fid048z' },
            small: { Bdjeniz: 'fwwuruf', niu6jh: 'fid048z' },
            medium: { Bdjeniz: 'f1af27q5', niu6jh: 'fid048z' },
            large: { Bdjeniz: 'f18yy57a', niu6jh: 'f924bxt' },
            'extra-large': { Bdjeniz: 'f2jg042', niu6jh: 'f924bxt' },
            icon12: { Be2twd7: 'f1ugzwwg' },
            icon16: { Be2twd7: 'f4ybsrx' },
            icon20: { Be2twd7: 'fe5j1ua' },
            icon24: { Be2twd7: 'f1rt2boy' },
            icon28: { Be2twd7: 'f24l1pt' },
            icon32: { Be2twd7: 'ffl51b' },
            icon48: { Be2twd7: 'f18m8u13' },
          },
          {
            d: [
              '.f13mqy1h{font-size:var(--fontSizeBase100);}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.f1pp30po{font-size:var(--fontSizeBase500);}',
              '.f1x0m3f5{font-size:var(--fontSizeBase600);}',
              '.f1g3puop{border-bottom-right-radius:var(--borderRadiusSmall);}',
              '.fi2rrw2{border-bottom-left-radius:var(--borderRadiusSmall);}',
              '.f1rstyi9{border-top-right-radius:var(--borderRadiusSmall);}',
              '.f1s4nn1u{border-top-left-radius:var(--borderRadiusSmall);}',
              '.f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}',
              '.f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}',
              '.f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}',
              '.fyu767a{border-top-left-radius:var(--borderRadiusMedium);}',
              '.f1ldthgs{border-bottom-right-radius:var(--borderRadiusLarge);}',
              '.frrelxk{border-bottom-left-radius:var(--borderRadiusLarge);}',
              '.fobrfso{border-top-right-radius:var(--borderRadiusLarge);}',
              '.ffisxpw{border-top-left-radius:var(--borderRadiusLarge);}',
              '.fnivh3a{border-bottom-right-radius:var(--borderRadiusXLarge);}',
              '.fc7yr5o{border-bottom-left-radius:var(--borderRadiusXLarge);}',
              '.f1el4m67{border-top-right-radius:var(--borderRadiusXLarge);}',
              '.f8yange{border-top-left-radius:var(--borderRadiusXLarge);}',
              '.ftfx35i{-webkit-transform:perspective(1px);-moz-transform:perspective(1px);-ms-transform:perspective(1px);transform:perspective(1px);}',
              '.fv0atk9{transition-property:transform,opacity;}',
              '.f1iry5bo{transition-duration:var(--durationUltraSlow),var(--durationFaster);}',
              '.f15n41j8{transition-timing-function:var(--curveEasyEaseMax),var(--curveLinear);}',
              '.f1wl9k8s::before{content:"";}',
              '.fp2gujx::before{-webkit-mask-image:radial-gradient(circle at bottom calc(var(--fui-Avatar-badgeRadius) + 2 * var(--fui-Avatar-ringWidth)) var(--fui-Avatar-badgeAlign) calc(var(--fui-Avatar-badgeRadius) + 2 * var(--fui-Avatar-ringWidth)), transparent calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) - 0.25px), white calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) + 0.25px));mask-image:radial-gradient(circle at bottom calc(var(--fui-Avatar-badgeRadius) + 2 * var(--fui-Avatar-ringWidth)) var(--fui-Avatar-badgeAlign) calc(var(--fui-Avatar-badgeRadius) + 2 * var(--fui-Avatar-ringWidth)), transparent calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) - 0.25px), white calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) + 0.25px));}',
              '.fq1w1vq{--fui-Avatar-ringWidth:var(--strokeWidthThick);}',
              '.fzg6ace{--fui-Avatar-ringWidth:var(--strokeWidthThicker);}',
              '.f1nu8p71{--fui-Avatar-ringWidth:var(--strokeWidthThickest);}',
              '.f13zj6fq::after{content:"";}',
              '.fcjn15l::after{box-shadow:var(--shadow4);}',
              '.f1tm8t9f::after{box-shadow:var(--shadow8);}',
              '.f1a1aohj::after{box-shadow:var(--shadow16);}',
              '.fond6v5::after{box-shadow:var(--shadow28);}',
              '.fp25eh{opacity:0.8;}',
              '.f1clczzi{-webkit-transform:scale(0.875);-moz-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);}',
              '.f1l3s34x{transition-timing-function:var(--curveDecelerateMin),var(--curveLinear);}',
              '.f1f5ar78::before,.f1f5ar78::after{margin-top:0;}',
              '.fqxtap0::before,.fqxtap0::after{margin-right:0;}',
              '.fhjukvy::before,.fhjukvy::after{margin-left:0;}',
              '.f1qj1nzo::before,.f1qj1nzo::after{margin-bottom:0;}',
              '.fw457kn::before,.fw457kn::after{opacity:0;}',
              '.f1wmllxl::before,.f1wmllxl::after{transition-timing-function:var(--curveDecelerateMin),var(--curveLinear);}',
              '.f1euv43f{position:absolute;}',
              '.f1yab3r1{bottom:0;}',
              '.f1e31b4d{right:0;}',
              '.f1vgc2s3{left:0;}',
              '.f1eugkqs{-webkit-mask-image:radial-gradient(circle at bottom var(--fui-Avatar-badgeRadius) var(--fui-Avatar-badgeAlign) var(--fui-Avatar-badgeRadius), transparent calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) - 0.25px), white calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) + 0.25px));mask-image:radial-gradient(circle at bottom var(--fui-Avatar-badgeRadius) var(--fui-Avatar-badgeAlign) var(--fui-Avatar-badgeRadius), transparent calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) - 0.25px), white calc(var(--fui-Avatar-badgeRadius) + var(--fui-Avatar-badgeGap) + 0.25px));}',
              '.f1tlnv9o{--fui-Avatar-badgeAlign:right;}',
              '.f1y9kyih{--fui-Avatar-badgeAlign:left;}',
              '.f1uwoubl{--fui-Avatar-badgeRadius:3px;}',
              '.fid048z{--fui-Avatar-badgeGap:var(--strokeWidthThin);}',
              '.f13ar0e0{--fui-Avatar-badgeRadius:5px;}',
              '.fwwuruf{--fui-Avatar-badgeRadius:6px;}',
              '.f1af27q5{--fui-Avatar-badgeRadius:8px;}',
              '.f18yy57a{--fui-Avatar-badgeRadius:10px;}',
              '.f924bxt{--fui-Avatar-badgeGap:var(--strokeWidthThick);}',
              '.f2jg042{--fui-Avatar-badgeRadius:14px;}',
              '.f1ugzwwg{font-size:12px;}',
              '.f4ybsrx{font-size:16px;}',
              '.fe5j1ua{font-size:20px;}',
              '.f1rt2boy{font-size:24px;}',
              '.f24l1pt{font-size:28px;}',
              '.ffl51b{font-size:32px;}',
              '.f18m8u13{font-size:48px;}',
            ],
            m: [
              [
                '@media screen and (prefers-reduced-motion: reduce){.f1onx1g3{transition-duration:0.01ms;}}',
                { m: 'screen and (prefers-reduced-motion: reduce)' },
              ],
            ],
          },
        ),
        useSizeStyles = (0, _styles_esm.s)(
          {
            16: { a9b677: 'fjw5fx7', Bqenvij: 'fd461yt' },
            20: { a9b677: 'f64fuq3', Bqenvij: 'fjamq6b' },
            24: { a9b677: 'fq4mcun', Bqenvij: 'frvgh55' },
            28: { a9b677: 'f1w9dchk', Bqenvij: 'fxldao9' },
            32: { a9b677: 'f1szoe96', Bqenvij: 'f1d2rq10' },
            36: { a9b677: 'fpdz1er', Bqenvij: 'f8ljn23' },
            40: { a9b677: 'feqmc2u', Bqenvij: 'fbhnoac' },
            48: { a9b677: 'f124akge', Bqenvij: 'ff2sm71' },
            56: { a9b677: 'f1u66zr1', Bqenvij: 'fzki0ko' },
            64: { a9b677: 'fa9ln6p', Bqenvij: 'f16k9i2m' },
            72: { a9b677: 'fhcae8x', Bqenvij: 'f1shusfg' },
            96: { a9b677: 'f1kyr2gn', Bqenvij: 'fypu0ge' },
            120: { a9b677: 'fwfqyga', Bqenvij: 'fjr5b71' },
            128: { a9b677: 'f1iksgmy', Bqenvij: 'fele2au' },
          },
          {
            d: [
              '.fjw5fx7{width:16px;}',
              '.fd461yt{height:16px;}',
              '.f64fuq3{width:20px;}',
              '.fjamq6b{height:20px;}',
              '.fq4mcun{width:24px;}',
              '.frvgh55{height:24px;}',
              '.f1w9dchk{width:28px;}',
              '.fxldao9{height:28px;}',
              '.f1szoe96{width:32px;}',
              '.f1d2rq10{height:32px;}',
              '.fpdz1er{width:36px;}',
              '.f8ljn23{height:36px;}',
              '.feqmc2u{width:40px;}',
              '.fbhnoac{height:40px;}',
              '.f124akge{width:48px;}',
              '.ff2sm71{height:48px;}',
              '.f1u66zr1{width:56px;}',
              '.fzki0ko{height:56px;}',
              '.fa9ln6p{width:64px;}',
              '.f16k9i2m{height:64px;}',
              '.fhcae8x{width:72px;}',
              '.f1shusfg{height:72px;}',
              '.f1kyr2gn{width:96px;}',
              '.fypu0ge{height:96px;}',
              '.fwfqyga{width:120px;}',
              '.fjr5b71{height:120px;}',
              '.f1iksgmy{width:128px;}',
              '.fele2au{height:128px;}',
            ],
          },
        ),
        useColorStyles = (0, _styles_esm.s)(
          {
            neutral: { sj55zd: 'f11d4kpn', De3pzq: 'f18f03hv' },
            brand: { sj55zd: 'fonrgv7', De3pzq: 'f1blnnmj' },
            'dark-red': { sj55zd: 'fqjd1y1', De3pzq: 'f1vq2oo4' },
            cranberry: { sj55zd: 'fg9gses', De3pzq: 'f1lwxszt' },
            red: { sj55zd: 'f23f7i0', De3pzq: 'f1q9qhfq' },
            pumpkin: { sj55zd: 'fjnan08', De3pzq: 'fz91bi3' },
            peach: { sj55zd: 'fknu15p', De3pzq: 'f1b9nr51' },
            marigold: { sj55zd: 'f9603vw', De3pzq: 'f3z4w6d' },
            gold: { sj55zd: 'fmq0uwp', De3pzq: 'fg50kya' },
            brass: { sj55zd: 'f28g5vo', De3pzq: 'f4w2gd0' },
            brown: { sj55zd: 'ftl572b', De3pzq: 'f14wu1f4' },
            forest: { sj55zd: 'f1gymlvd', De3pzq: 'f19ut4y6' },
            seafoam: { sj55zd: 'fnnb6wn', De3pzq: 'f1n057jc' },
            'dark-green': { sj55zd: 'ff58qw8', De3pzq: 'f11t05wk' },
            'light-teal': { sj55zd: 'f1up9qbj', De3pzq: 'f42feg1' },
            teal: { sj55zd: 'f135dsb4', De3pzq: 'f6hvv1p' },
            steel: { sj55zd: 'f151dlcp', De3pzq: 'f1lnp8zf' },
            blue: { sj55zd: 'f1rjv50u', De3pzq: 'f1ggcpy6' },
            'royal-blue': { sj55zd: 'f1emykk5', De3pzq: 'f12rj61f' },
            cornflower: { sj55zd: 'fqsigj7', De3pzq: 'f8k7hur' },
            navy: { sj55zd: 'f1nj97xi', De3pzq: 'f19gw0ux' },
            lavender: { sj55zd: 'fwctg0i', De3pzq: 'ff379vm' },
            purple: { sj55zd: 'fjrsgpu', De3pzq: 'f1mzf1e1' },
            grape: { sj55zd: 'f1fiiydq', De3pzq: 'f1o4k8oy' },
            lilac: { sj55zd: 'f1res9jt', De3pzq: 'f1x6mz1o' },
            pink: { sj55zd: 'fv3fbbi', De3pzq: 'fydlv6t' },
            magenta: { sj55zd: 'f1f1fwnz', De3pzq: 'f4xb6j5' },
            plum: { sj55zd: 'f8ptl6j', De3pzq: 'fqo8e26' },
            beige: { sj55zd: 'f1ntv3ld', De3pzq: 'f101elhj' },
            mink: { sj55zd: 'f1fscmp', De3pzq: 'f13g8o5c' },
            platinum: { sj55zd: 'f1dr00v2', De3pzq: 'fkh7blw' },
            anchor: { sj55zd: 'f1f3ti53', De3pzq: 'fu4yj0j' },
          },
          {
            d: [
              '.f11d4kpn{color:var(--colorNeutralForeground3);}',
              '.f18f03hv{background-color:var(--colorNeutralBackground6);}',
              '.fonrgv7{color:var(--colorNeutralForegroundStaticInverted);}',
              '.f1blnnmj{background-color:var(--colorBrandBackgroundStatic);}',
              '.fqjd1y1{color:var(--colorPaletteDarkRedForeground2);}',
              '.f1vq2oo4{background-color:var(--colorPaletteDarkRedBackground2);}',
              '.fg9gses{color:var(--colorPaletteCranberryForeground2);}',
              '.f1lwxszt{background-color:var(--colorPaletteCranberryBackground2);}',
              '.f23f7i0{color:var(--colorPaletteRedForeground2);}',
              '.f1q9qhfq{background-color:var(--colorPaletteRedBackground2);}',
              '.fjnan08{color:var(--colorPalettePumpkinForeground2);}',
              '.fz91bi3{background-color:var(--colorPalettePumpkinBackground2);}',
              '.fknu15p{color:var(--colorPalettePeachForeground2);}',
              '.f1b9nr51{background-color:var(--colorPalettePeachBackground2);}',
              '.f9603vw{color:var(--colorPaletteMarigoldForeground2);}',
              '.f3z4w6d{background-color:var(--colorPaletteMarigoldBackground2);}',
              '.fmq0uwp{color:var(--colorPaletteGoldForeground2);}',
              '.fg50kya{background-color:var(--colorPaletteGoldBackground2);}',
              '.f28g5vo{color:var(--colorPaletteBrassForeground2);}',
              '.f4w2gd0{background-color:var(--colorPaletteBrassBackground2);}',
              '.ftl572b{color:var(--colorPaletteBrownForeground2);}',
              '.f14wu1f4{background-color:var(--colorPaletteBrownBackground2);}',
              '.f1gymlvd{color:var(--colorPaletteForestForeground2);}',
              '.f19ut4y6{background-color:var(--colorPaletteForestBackground2);}',
              '.fnnb6wn{color:var(--colorPaletteSeafoamForeground2);}',
              '.f1n057jc{background-color:var(--colorPaletteSeafoamBackground2);}',
              '.ff58qw8{color:var(--colorPaletteDarkGreenForeground2);}',
              '.f11t05wk{background-color:var(--colorPaletteDarkGreenBackground2);}',
              '.f1up9qbj{color:var(--colorPaletteLightTealForeground2);}',
              '.f42feg1{background-color:var(--colorPaletteLightTealBackground2);}',
              '.f135dsb4{color:var(--colorPaletteTealForeground2);}',
              '.f6hvv1p{background-color:var(--colorPaletteTealBackground2);}',
              '.f151dlcp{color:var(--colorPaletteSteelForeground2);}',
              '.f1lnp8zf{background-color:var(--colorPaletteSteelBackground2);}',
              '.f1rjv50u{color:var(--colorPaletteBlueForeground2);}',
              '.f1ggcpy6{background-color:var(--colorPaletteBlueBackground2);}',
              '.f1emykk5{color:var(--colorPaletteRoyalBlueForeground2);}',
              '.f12rj61f{background-color:var(--colorPaletteRoyalBlueBackground2);}',
              '.fqsigj7{color:var(--colorPaletteCornflowerForeground2);}',
              '.f8k7hur{background-color:var(--colorPaletteCornflowerBackground2);}',
              '.f1nj97xi{color:var(--colorPaletteNavyForeground2);}',
              '.f19gw0ux{background-color:var(--colorPaletteNavyBackground2);}',
              '.fwctg0i{color:var(--colorPaletteLavenderForeground2);}',
              '.ff379vm{background-color:var(--colorPaletteLavenderBackground2);}',
              '.fjrsgpu{color:var(--colorPalettePurpleForeground2);}',
              '.f1mzf1e1{background-color:var(--colorPalettePurpleBackground2);}',
              '.f1fiiydq{color:var(--colorPaletteGrapeForeground2);}',
              '.f1o4k8oy{background-color:var(--colorPaletteGrapeBackground2);}',
              '.f1res9jt{color:var(--colorPaletteLilacForeground2);}',
              '.f1x6mz1o{background-color:var(--colorPaletteLilacBackground2);}',
              '.fv3fbbi{color:var(--colorPalettePinkForeground2);}',
              '.fydlv6t{background-color:var(--colorPalettePinkBackground2);}',
              '.f1f1fwnz{color:var(--colorPaletteMagentaForeground2);}',
              '.f4xb6j5{background-color:var(--colorPaletteMagentaBackground2);}',
              '.f8ptl6j{color:var(--colorPalettePlumForeground2);}',
              '.fqo8e26{background-color:var(--colorPalettePlumBackground2);}',
              '.f1ntv3ld{color:var(--colorPaletteBeigeForeground2);}',
              '.f101elhj{background-color:var(--colorPaletteBeigeBackground2);}',
              '.f1fscmp{color:var(--colorPaletteMinkForeground2);}',
              '.f13g8o5c{background-color:var(--colorPaletteMinkBackground2);}',
              '.f1dr00v2{color:var(--colorPalettePlatinumForeground2);}',
              '.fkh7blw{background-color:var(--colorPalettePlatinumBackground2);}',
              '.f1f3ti53{color:var(--colorPaletteAnchorForeground2);}',
              '.fu4yj0j{background-color:var(--colorPaletteAnchorBackground2);}',
            ],
          },
        ),
        useRingColorStyles = (0, _styles_esm.s)(
          {
            neutral: { Bic5iru: 'f1uuiafn' },
            brand: { Bic5iru: 'f1uuiafn' },
            'dark-red': { Bic5iru: 'f1t2x9on' },
            cranberry: { Bic5iru: 'f1pvshc9' },
            red: { Bic5iru: 'f1ectbk9' },
            pumpkin: { Bic5iru: 'fvzpl0b' },
            peach: { Bic5iru: 'fwj2kd7' },
            marigold: { Bic5iru: 'fr120vy' },
            gold: { Bic5iru: 'f8xmmar' },
            brass: { Bic5iru: 'f1hbety2' },
            brown: { Bic5iru: 'f1vg3s4g' },
            forest: { Bic5iru: 'f1m3olm5' },
            seafoam: { Bic5iru: 'f17xiqtr' },
            'dark-green': { Bic5iru: 'fx32vyh' },
            'light-teal': { Bic5iru: 'f1mkihwv' },
            teal: { Bic5iru: 'fecnooh' },
            steel: { Bic5iru: 'f15hfgzm' },
            blue: { Bic5iru: 'fqproka' },
            'royal-blue': { Bic5iru: 'f17v2w59' },
            cornflower: { Bic5iru: 'fp0q1mo' },
            navy: { Bic5iru: 'f1nlym55' },
            lavender: { Bic5iru: 'f62vk8h' },
            purple: { Bic5iru: 'f15zl69q' },
            grape: { Bic5iru: 'f53w4j7' },
            lilac: { Bic5iru: 'fu2771t' },
            pink: { Bic5iru: 'fzflscs' },
            magenta: { Bic5iru: 'fb6rmqc' },
            plum: { Bic5iru: 'f1a4gm5b' },
            beige: { Bic5iru: 'f1qpf9z1' },
            mink: { Bic5iru: 'f1l7or83' },
            platinum: { Bic5iru: 'fzrj0iu' },
            anchor: { Bic5iru: 'f8oz6wf' },
          },
          {
            d: [
              '.f1uuiafn::before{color:var(--colorBrandStroke1);}',
              '.f1t2x9on::before{color:var(--colorPaletteDarkRedBorderActive);}',
              '.f1pvshc9::before{color:var(--colorPaletteCranberryBorderActive);}',
              '.f1ectbk9::before{color:var(--colorPaletteRedBorderActive);}',
              '.fvzpl0b::before{color:var(--colorPalettePumpkinBorderActive);}',
              '.fwj2kd7::before{color:var(--colorPalettePeachBorderActive);}',
              '.fr120vy::before{color:var(--colorPaletteMarigoldBorderActive);}',
              '.f8xmmar::before{color:var(--colorPaletteGoldBorderActive);}',
              '.f1hbety2::before{color:var(--colorPaletteBrassBorderActive);}',
              '.f1vg3s4g::before{color:var(--colorPaletteBrownBorderActive);}',
              '.f1m3olm5::before{color:var(--colorPaletteForestBorderActive);}',
              '.f17xiqtr::before{color:var(--colorPaletteSeafoamBorderActive);}',
              '.fx32vyh::before{color:var(--colorPaletteDarkGreenBorderActive);}',
              '.f1mkihwv::before{color:var(--colorPaletteLightTealBorderActive);}',
              '.fecnooh::before{color:var(--colorPaletteTealBorderActive);}',
              '.f15hfgzm::before{color:var(--colorPaletteSteelBorderActive);}',
              '.fqproka::before{color:var(--colorPaletteBlueBorderActive);}',
              '.f17v2w59::before{color:var(--colorPaletteRoyalBlueBorderActive);}',
              '.fp0q1mo::before{color:var(--colorPaletteCornflowerBorderActive);}',
              '.f1nlym55::before{color:var(--colorPaletteNavyBorderActive);}',
              '.f62vk8h::before{color:var(--colorPaletteLavenderBorderActive);}',
              '.f15zl69q::before{color:var(--colorPalettePurpleBorderActive);}',
              '.f53w4j7::before{color:var(--colorPaletteGrapeBorderActive);}',
              '.fu2771t::before{color:var(--colorPaletteLilacBorderActive);}',
              '.fzflscs::before{color:var(--colorPalettePinkBorderActive);}',
              '.fb6rmqc::before{color:var(--colorPaletteMagentaBorderActive);}',
              '.f1a4gm5b::before{color:var(--colorPalettePlumBorderActive);}',
              '.f1qpf9z1::before{color:var(--colorPaletteBeigeBorderActive);}',
              '.f1l7or83::before{color:var(--colorPaletteMinkBorderActive);}',
              '.fzrj0iu::before{color:var(--colorPalettePlatinumBorderActive);}',
              '.f8oz6wf::before{color:var(--colorPaletteAnchorBorderActive);}',
            ],
          },
        ),
        Avatar = react.forwardRef((props, ref) => {
          const state = useAvatar_unstable(props, ref);
          return (
            ((state) => {
              const { size, shape, active, activeAppearance, color } = state,
                rootClassName = useAvatarStyles_styles_useRootClassName(),
                imageClassName = useImageClassName(),
                iconInitialsClassName = useIconInitialsClassName(),
                styles = useAvatarStyles_styles_useStyles(),
                sizeStyles = useSizeStyles(),
                colorStyles = useColorStyles(),
                ringColorStyles = useRingColorStyles(),
                rootClasses = [rootClassName, 32 !== size && sizeStyles[size]];
              if (
                (state.badge &&
                  rootClasses.push(
                    styles.badgeAlign,
                    styles[state.badge.size || 'medium'],
                  ),
                size <= 24
                  ? rootClasses.push(styles.textCaption2Strong)
                  : size <= 28
                  ? rootClasses.push(styles.textCaption1Strong)
                  : size <= 40 ||
                    (size <= 56
                      ? rootClasses.push(styles.textSubtitle2)
                      : size <= 96
                      ? rootClasses.push(styles.textSubtitle1)
                      : rootClasses.push(styles.textTitle3)),
                'square' === shape &&
                  (size <= 24
                    ? rootClasses.push(styles.squareSmall)
                    : size <= 48
                    ? rootClasses.push(styles.squareMedium)
                    : size <= 72
                    ? rootClasses.push(styles.squareLarge)
                    : rootClasses.push(styles.squareXLarge)),
                ('active' !== active && 'inactive' !== active) ||
                  (rootClasses.push(styles.activeOrInactive),
                  ('ring' !== activeAppearance && 'ring-shadow' !== activeAppearance) ||
                    (rootClasses.push(styles.ring, ringColorStyles[color]),
                    state.badge && rootClasses.push(styles.ringBadgeCutout),
                    size <= 48
                      ? rootClasses.push(styles.ringThick)
                      : size <= 64
                      ? rootClasses.push(styles.ringThicker)
                      : rootClasses.push(styles.ringThickest)),
                  ('shadow' !== activeAppearance && 'ring-shadow' !== activeAppearance) ||
                    (rootClasses.push(styles.shadow),
                    size <= 28
                      ? rootClasses.push(styles.shadow4)
                      : size <= 48
                      ? rootClasses.push(styles.shadow8)
                      : size <= 64
                      ? rootClasses.push(styles.shadow16)
                      : rootClasses.push(styles.shadow28)),
                  'inactive' === active && rootClasses.push(styles.inactive)),
                (state.root.className = (0, mergeClasses_esm.z)(
                  avatarClassNames_root,
                  ...rootClasses,
                  state.root.className,
                )),
                state.badge &&
                  (state.badge.className = (0, mergeClasses_esm.z)(
                    avatarClassNames_badge,
                    styles.badge,
                    state.badge.className,
                  )),
                state.image &&
                  (state.image.className = (0, mergeClasses_esm.z)(
                    avatarClassNames_image,
                    imageClassName,
                    colorStyles[color],
                    state.badge && styles.badgeCutout,
                    state.image.className,
                  )),
                state.initials &&
                  (state.initials.className = (0, mergeClasses_esm.z)(
                    avatarClassNames_initials,
                    iconInitialsClassName,
                    colorStyles[color],
                    state.badge && styles.badgeCutout,
                    state.initials.className,
                  )),
                state.icon)
              ) {
                let iconSizeClass;
                (iconSizeClass =
                  size <= 16
                    ? styles.icon12
                    : size <= 24
                    ? styles.icon16
                    : size <= 40
                    ? styles.icon20
                    : size <= 48
                    ? styles.icon24
                    : size <= 56
                    ? styles.icon28
                    : size <= 72
                    ? styles.icon32
                    : styles.icon48),
                  (state.icon.className = (0, mergeClasses_esm.z)(
                    avatarClassNames_icon,
                    iconInitialsClassName,
                    iconSizeClass,
                    colorStyles[color],
                    state.badge && styles.badgeCutout,
                    state.icon.className,
                  ));
              }
            })(state),
            (0, CustomStyleHooksContext.oj)('useAvatarStyles_unstable')(state),
            ((state) => {
              const { slots, slotProps } = (0, getSlotsNext.D)(state);
              return (0, createElement.a)(
                slots.root,
                slotProps.root,
                slots.initials &&
                  (0, createElement.a)(slots.initials, slotProps.initials),
                slots.icon && (0, createElement.a)(slots.icon, slotProps.icon),
                slots.image && (0, createElement.a)(slots.image, slotProps.image),
                slots.badge && (0, createElement.a)(slots.badge, slotProps.badge),
                state.activeAriaLabelElement,
              );
            })(state)
          );
        });
      Avatar.displayName = 'Avatar';
    },
    './node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { k: () => createFluentIcon });
      var react = __webpack_require__('./node_modules/react/index.js'),
        _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const useRootStyles = (0, _styles_esm.s)(
          { root: { mc9l5x: 'f1w7gpdv', Bg96gwp: 'fez10in', ycbfsm: 'fg4l7m0' } },
          {
            d: ['.f1w7gpdv{display:inline;}', '.fez10in{line-height:0;}'],
            t: ['@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}'],
          },
        ),
        useIconState = (props) => {
          const { title, primaryFill = 'currentColor', ...rest } = props,
            state = { ...rest, title: void 0, fill: primaryFill },
            styles = useRootStyles();
          return (
            (state.className = (0, mergeClasses_esm.z)(styles.root, state.className)),
            title && (state['aria-label'] = title),
            state['aria-label'] || state['aria-labelledby']
              ? (state.role = 'img')
              : (state['aria-hidden'] = !0),
            state
          );
        },
        createFluentIcon = (displayName, width, paths) => {
          const viewBoxWidth = '1em' === width ? '20' : width,
            Icon = (props) => {
              const state = {
                ...useIconState(props),
                width,
                height: width,
                viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
                xmlns: 'http://www.w3.org/2000/svg',
              };
              return react.createElement(
                'svg',
                state,
                ...paths.map((d) => react.createElement('path', { d, fill: state.fill })),
              );
            };
          return (Icon.displayName = displayName), Icon;
        };
    },
    './node_modules/@fluentui/react-text/lib/components/Text/Text.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var react = __webpack_require__('./node_modules/react/index.js'),
        getNativeElementProps = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js',
        );
      var createElement = __webpack_require__(
          './node_modules/@fluentui/react-jsx-runtime/lib/createElement.js',
        ),
        getSlotsNext = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js',
        );
      var _styles_esm = __webpack_require__(
          './node_modules/@griffel/react/__styles.esm.js',
        ),
        mergeClasses_esm = __webpack_require__(
          './node_modules/@griffel/core/mergeClasses.esm.js',
        );
      const textClassNames_root = 'fui-Text',
        useStyles = (0, _styles_esm.s)(
          {
            root: {
              Bahqtrf: 'fk6fouc',
              Be2twd7: 'fkhj508',
              Bg96gwp: 'f1i3iumi',
              Bhrd7zp: 'figsok6',
              fsow6f: 'fpgzoln',
              mc9l5x: 'f1w7gpdv',
              Huce71: 'f6juhto',
              B68tc82: 'f1mtd64y',
              Bmxbyg5: 'f1y7q3j9',
              ygn44y: 'f2jf649',
            },
            nowrap: { Huce71: 'fz5stix', B68tc82: 'f1p9o1ba', Bmxbyg5: 'f1sil6mw' },
            truncate: { ygn44y: 'f1cmbuwj' },
            block: { mc9l5x: 'ftgm304' },
            italic: { B80ckks: 'f1j4dglz' },
            underline: { w71qe1: 'f13mvf36' },
            strikethrough: { w71qe1: 'fv5q2k7' },
            strikethroughUnderline: { w71qe1: 'f1drk4o6' },
            base100: { Be2twd7: 'f13mqy1h', Bg96gwp: 'fcpl73t' },
            base200: { Be2twd7: 'fy9rknc', Bg96gwp: 'fwrc4pm' },
            base400: { Be2twd7: 'fod5ikn', Bg96gwp: 'faaz57k' },
            base500: { Be2twd7: 'f1pp30po', Bg96gwp: 'f106mvju' },
            base600: { Be2twd7: 'f1x0m3f5', Bg96gwp: 'fb86gi6' },
            hero700: { Be2twd7: 'fojgt09', Bg96gwp: 'fcen8rp' },
            hero800: { Be2twd7: 'fccw675', Bg96gwp: 'f1ebx5kk' },
            hero900: { Be2twd7: 'f15afnhw', Bg96gwp: 'fr3w3wp' },
            hero1000: { Be2twd7: 'fpyltcb', Bg96gwp: 'f1ivgwrt' },
            monospace: { Bahqtrf: 'f1fedwem' },
            numeric: { Bahqtrf: 'f1uq0ln5' },
            weightMedium: { Bhrd7zp: 'fdj6btp' },
            weightSemibold: { Bhrd7zp: 'fl43uef' },
            weightBold: { Bhrd7zp: 'flh3ekv' },
            alignCenter: { fsow6f: 'f17mccla' },
            alignEnd: { fsow6f: 'f12ymhq5' },
            alignJustify: { fsow6f: 'f1j59e10' },
          },
          {
            d: [
              '.fk6fouc{font-family:var(--fontFamilyBase);}',
              '.fkhj508{font-size:var(--fontSizeBase300);}',
              '.f1i3iumi{line-height:var(--lineHeightBase300);}',
              '.figsok6{font-weight:var(--fontWeightRegular);}',
              '.fpgzoln{text-align:start;}',
              '.f1w7gpdv{display:inline;}',
              '.f6juhto{white-space:normal;}',
              '.f1mtd64y{overflow-x:visible;}',
              '.f1y7q3j9{overflow-y:visible;}',
              '.f2jf649{text-overflow:clip;}',
              '.fz5stix{white-space:nowrap;}',
              '.f1p9o1ba{overflow-x:hidden;}',
              '.f1sil6mw{overflow-y:hidden;}',
              '.f1cmbuwj{text-overflow:ellipsis;}',
              '.ftgm304{display:block;}',
              '.f1j4dglz{font-style:italic;}',
              '.f13mvf36{text-decoration-line:underline;}',
              '.fv5q2k7{text-decoration-line:line-through;}',
              '.f1drk4o6{text-decoration-line:line-through underline;}',
              '.f13mqy1h{font-size:var(--fontSizeBase100);}',
              '.fcpl73t{line-height:var(--lineHeightBase100);}',
              '.fy9rknc{font-size:var(--fontSizeBase200);}',
              '.fwrc4pm{line-height:var(--lineHeightBase200);}',
              '.fod5ikn{font-size:var(--fontSizeBase400);}',
              '.faaz57k{line-height:var(--lineHeightBase400);}',
              '.f1pp30po{font-size:var(--fontSizeBase500);}',
              '.f106mvju{line-height:var(--lineHeightBase500);}',
              '.f1x0m3f5{font-size:var(--fontSizeBase600);}',
              '.fb86gi6{line-height:var(--lineHeightBase600);}',
              '.fojgt09{font-size:var(--fontSizeHero700);}',
              '.fcen8rp{line-height:var(--lineHeightHero700);}',
              '.fccw675{font-size:var(--fontSizeHero800);}',
              '.f1ebx5kk{line-height:var(--lineHeightHero800);}',
              '.f15afnhw{font-size:var(--fontSizeHero900);}',
              '.fr3w3wp{line-height:var(--lineHeightHero900);}',
              '.fpyltcb{font-size:var(--fontSizeHero1000);}',
              '.f1ivgwrt{line-height:var(--lineHeightHero1000);}',
              '.f1fedwem{font-family:var(--fontFamilyMonospace);}',
              '.f1uq0ln5{font-family:var(--fontFamilyNumeric);}',
              '.fdj6btp{font-weight:var(--fontWeightMedium);}',
              '.fl43uef{font-weight:var(--fontWeightSemibold);}',
              '.flh3ekv{font-weight:var(--fontWeightBold);}',
              '.f17mccla{text-align:center;}',
              '.f12ymhq5{text-align:end;}',
              '.f1j59e10{text-align:justify;}',
            ],
          },
        );
      var CustomStyleHooksContext = __webpack_require__(
        './node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js',
      );
      const Text = react.forwardRef((props, ref) => {
        const state = ((props, ref) => {
          const {
            wrap,
            truncate,
            block,
            italic,
            underline,
            strikethrough,
            size,
            font,
            weight,
            align,
          } = props;
          var _props_as;
          const as =
            null !== (_props_as = props.as) && void 0 !== _props_as ? _props_as : 'span';
          return {
            align: null != align ? align : 'start',
            block: null != block && block,
            font: null != font ? font : 'base',
            italic: null != italic && italic,
            size: null != size ? size : 300,
            strikethrough: null != strikethrough && strikethrough,
            truncate: null != truncate && truncate,
            underline: null != underline && underline,
            weight: null != weight ? weight : 'regular',
            wrap: null == wrap || wrap,
            components: { root: 'span' },
            root: (0, getNativeElementProps.n)(as, { ref, ...props, as }),
          };
        })(props, ref);
        return (
          ((state) => {
            const styles = useStyles();
            state.root.className = (0, mergeClasses_esm.z)(
              textClassNames_root,
              styles.root,
              !1 === state.wrap && styles.nowrap,
              state.truncate && styles.truncate,
              state.block && styles.block,
              state.italic && styles.italic,
              state.underline && styles.underline,
              state.strikethrough && styles.strikethrough,
              state.underline && state.strikethrough && styles.strikethroughUnderline,
              100 === state.size && styles.base100,
              200 === state.size && styles.base200,
              400 === state.size && styles.base400,
              500 === state.size && styles.base500,
              600 === state.size && styles.base600,
              700 === state.size && styles.hero700,
              800 === state.size && styles.hero800,
              900 === state.size && styles.hero900,
              1e3 === state.size && styles.hero1000,
              'monospace' === state.font && styles.monospace,
              'numeric' === state.font && styles.numeric,
              'medium' === state.weight && styles.weightMedium,
              'semibold' === state.weight && styles.weightSemibold,
              'bold' === state.weight && styles.weightBold,
              'center' === state.align && styles.alignCenter,
              'end' === state.align && styles.alignEnd,
              'justify' === state.align && styles.alignJustify,
              state.root.className,
            );
          })(state),
          (0, CustomStyleHooksContext.oj)('useTextStyles_unstable')(state),
          ((state) => {
            const { slots, slotProps } = (0, getSlotsNext.D)(state);
            return (0, createElement.a)(slots.root, slotProps.root);
          })(state)
        );
      });
      Text.displayName = 'Text';
    },
    './node_modules/@fluentui/react-utilities/lib/compose/resolveShorthand.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { O: () => resolveShorthand });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@fluentui/react-utilities/lib/compose/constants.js',
        );
      const resolveShorthand = (value, options) => {
        const { required = !1, defaultProps } = options || {};
        if (null === value || (void 0 === value && !required)) return;
        let resolvedShorthand = {};
        return (
          'string' == typeof value ||
          'number' == typeof value ||
          Array.isArray(value) ||
          (0, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(value)
            ? (resolvedShorthand.children = value)
            : 'object' == typeof value && (resolvedShorthand = value),
          (resolvedShorthand = { ...defaultProps, ...resolvedShorthand }),
          'function' == typeof resolvedShorthand.children &&
            ((resolvedShorthand[_constants__WEBPACK_IMPORTED_MODULE_1__.A] =
              resolvedShorthand.children),
            (resolvedShorthand.children =
              null == defaultProps ? void 0 : defaultProps.children)),
          resolvedShorthand
        );
      };
    },
    './node_modules/@griffel/react/__styles.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => __styles });
      var _griffel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@griffel/core/__styles.esm.js',
        ),
        _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@griffel/react/RendererContext.esm.js',
        ),
        _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/@griffel/react/TextDirectionContext.esm.js',
        );
      function __styles(classesMapBySlot, cssRules) {
        const getStyles = (0, _griffel_core__WEBPACK_IMPORTED_MODULE_0__.s)(
          classesMapBySlot,
          cssRules,
        );
        return function useClasses() {
          const dir = (0, _TextDirectionContext_esm_js__WEBPACK_IMPORTED_MODULE_1__.s)(),
            renderer = (0, _RendererContext_esm_js__WEBPACK_IMPORTED_MODULE_2__.a)();
          return getStyles({ dir, renderer });
        };
      }
    },
  },
]);

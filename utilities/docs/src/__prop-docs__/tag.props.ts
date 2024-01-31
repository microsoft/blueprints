/**
 * THIS IS AN AUTOGENERATED FILE. ALL CHANGES WILL BE LOST.
 */
import type { PropsDoc } from '@microsoft/arbutus.prop-docs-cli';

const propsDoc: PropsDoc = {
  tags: {},
  filePath: '../../components/tag/src/tag/tag.tsx',
  description: '',
  displayName: 'Tag',
  methods: [],
  props: {
    className: {
      defaultValue: null,
      description: 'Consumer provided class.',
      name: 'className',
      declarations: [
        {
          fileName: 'arbutus/components/tag/src/tag/tag.types.ts',
          name: 'TypeLiteral',
        },
      ],
      required: false,
      type: {
        name: 'string',
      },
    },
    type: {
      defaultValue: {
        value: 'accent',
      },
      description: 'Type color variant options.',
      name: 'type',
      declarations: [
        {
          fileName: 'arbutus/components/tag/src/tag/tag.types.ts',
          name: 'TypeLiteral',
        },
      ],
      required: false,
      type: {
        name: 'TypeVariant',
      },
    },
    size: {
      defaultValue: {
        value: 'medium',
      },
      description: 'Size variant options.',
      name: 'size',
      declarations: [
        {
          fileName: 'arbutus/components/tag/src/tag/tag.types.ts',
          name: 'TypeLiteral',
        },
      ],
      required: false,
      type: {
        name: 'SizeVariant',
      },
    },
    isInline: {
      defaultValue: {
        value: 'false',
      },
      description: 'Inline variant.',
      name: 'isInline',
      declarations: [
        {
          fileName: 'arbutus/components/tag/src/tag/tag.types.ts',
          name: 'TypeLiteral',
        },
      ],
      required: false,
      type: {
        name: 'boolean',
      },
    },
  },
};

export default propsDoc;

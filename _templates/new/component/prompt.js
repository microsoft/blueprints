module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name your package (required).',
    required: true,
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write the description for this package.',
    required: false,
  },
  {
    type: 'input',
    name: 'version',
    message: 'What is the initial version of this package?',
    required: false,
    initial: '0.0.0',
  },
];

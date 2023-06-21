// generate_rules.js
const fs = require('fs');

const rules = [
  {
    id: 'block_example',
    priority: 1,
    action: {
      type: 'block'
    },
    condition: {
      urlFilter: '.*example\\.com.*'
    }
  },
  {
    id: 'block_koffer24',
    priority: 2,
    action: {
      type: 'block'
    },
    condition: {
      urlFilter: '.*koffer24\\.de.*'
    }
  }
];

const ruleList = {
  rules: rules
};

fs.writeFileSync('block_rules.json', JSON.stringify(ruleList, null, 2));
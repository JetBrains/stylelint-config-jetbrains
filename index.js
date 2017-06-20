'use strict';
const propertiesOrder = require('./properties-order.json');

module.exports = {
  extends: [
    'stylelint-config-standard', 
    'stylelint-config-css-modules'
    ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [
          'after-comment', 
          'stylelint-commands'
        ]
      }
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration']
      }
    ],
    'order/order': [
      'custom-properties', 
      'declarations'
    ],
    'order/properties-order': propertiesOrder
  }
};

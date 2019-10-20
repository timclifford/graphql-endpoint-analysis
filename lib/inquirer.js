const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
  askGraphQLendpointDetails: () => {
    const questions = [
      {
        name: 'endpoint',
        type: 'input',
        message: 'Enter the url of your GraphQL endpoint:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid url.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};

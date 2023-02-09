module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: `Creating a Component`,
    prompts: [
      {
        type: 'input',
        name: 'destinationpath',
        message: 'Template destination path',
      },
    ],

    actions: function (data) {
      const actions = [];

      const path = process.argv[process.argv.length - 1];

      const pathChunks = path.split('/');
      data.name = pathChunks[pathChunks.length - 1];

      actions.push({
        type: 'add',
        path: path + '{{destination}}/{{kebabCase name}}.tsx',
        templateFile: './plop-templates/component/component.tsx.hbs',
      });
      actions.push({
        type: 'add',
        path: path + '{{destination}}/{{kebabCase name}}.module.css',
        templateFile: './plop-templates/component/styles.ts.hbs',
      });
      actions.push({
        type: 'add',
        path: path + '/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      });

      return actions;
    },
  });
};

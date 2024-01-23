export default function (plop) {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: function () {
      return [
        {
          type: 'add',
          path: '../src/components/ui/{{pascalCase name}}/index.tsx.hbs',
          templateFile: 'templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/ui/{{pascalCase name}}/component.tsx',
          templateFile: 'templates/component.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/ui/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/components/ui/{{pascalCase name}}/stories.tsx',
          templateFile: 'templates/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/test.tsx.hbs'
        }
      ]
    }
  })
}

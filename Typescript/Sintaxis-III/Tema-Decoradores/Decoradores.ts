
@printDecoratorData
class Manager {

  task: string = 'Simple task'
  project: string = 'Simple project'

  constructor() {
    console.log('Initializing the Manager class')
  }
}

// const manager = new Manager();
// console.log(manager)

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log('value:')
  console.log(value)
  console.log('context')
  console.log(context)
  context.addInitializer(() => {
    console.log('Initialized class ' + context.name)
  })
}

const modules = [
  require('./7wd.js'),
  require('./carcassonne.js'),
  require('./welcometo.js'),
]

modules.forEach(module=>{
  module.load()
})
const modules = [
  require('./7wd.js'),
  require('./carcassonne.js'),
]

modules.forEach(module=>{
  module.load()
})
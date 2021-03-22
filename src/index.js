const modules = [
  require('./7wd.js'),
  require('./carcassonne.js'),
  require('./welcometo.js'),
  require('./hearts.js'),
  require('./lostcities.js'),
  require('./draftosaurus.js'),
  require('./loveletter.js'),
  require('./seasons.js'),
  require('./table.js'),
]

modules.forEach(module=>{
  module.load()
})
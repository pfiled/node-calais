var sys = require('sys'),
    Calais = require('./lib/calais').Calais

var calais = new Calais(process.argv[2])
calais.set('content', 'The Federal Reserve is the enemy of Ron Paul.')
calais.fetch(function(error, result) {
  if (!error) {
    sys.puts(sys.inspect(result))
  } else {
    sys.puts(sys.inspect(error))
  }
})

var WinkAPI = require('./winkapi');
var configFile = {};

try{
  configFile = require('./config.json')
}
catch(e){
  console.log('could not load config via config.json, using environment properties instead');
}

var config = {
  clientID      : configFile.clientID      || process.env.clientID,
  clientSecret  : configFile.clientSecret  || process.env.clientSecret,
  userName      : configFile.userName      || process.env.userName,
  passPhrase    : configFile.passPhrase    || process.env.passPhrase,
  //logger:{ }
};

describe('Test Wink API Client', function() {
  this.timeout(5000);

  function setup(callback){
    var winky = new WinkAPI.WinkAPI(config);
    winky.login(config.userName, config.passPhrase, callback)
      .on('error', function(err) {
      console.log('background error: ' + err.message);
    });
  }

  it('login', function(done){
    setup(function(err){
      if(err){
        throw new Error(err);
      }
      done();
    })
  });

  it('get users', function(done){
    setup(function(err, winkapi) {
      winkapi.getUser(done);
    });
  });

  it('get devices', function(done){
    setup(function(err, winkapi){
      winkapi.getDevices(function(){
        done();
      });
    });
  });

  it('get icons', function(done){
    setup(function(err, winkapi){
      winkapi.getIcons(function(){
        done();
      });
    });
  });

  it('get channels', function(done){
    setup(function(err, winkapi){
      winkapi.getChannels(function(){
        done();
      });
    });
  });

  it('get dial templates', function(done){
    setup(function(err, winkapi){
      winkapi.getDialTemplates(function(){
        done();
      });
    });
  });

  it('get services', function(done){
    setup(function(err, winkapi){
      winkapi.getServices(function(){
        done();
      });
    });
  });

  it('get scenes', function(done){
    setup(function(err, winkapi){
      winkapi.getScenes(function(){
        done();
      });
    });
  });

  it('get robots', function(done){
    setup(function(err, winkapi){
      winkapi.getRobots(function(){
        done();
      });
    });
  });

});

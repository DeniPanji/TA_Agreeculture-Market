

module.exports.initEnvironments = (nconf) => {
  nconf.env().file('config.json');
  nconf.defaults({
    'PORT':9010
  });
};

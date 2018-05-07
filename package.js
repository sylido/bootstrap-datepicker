// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name    : 'sylido:bootstrap-datepicker',  // https://atmospherejs.com/twbs/bootstrap
  summary : 'Bootstrap Datepicker Plugin',
  version : '1.0',
  git     : 'https://github.com/sylido/bootstrap-datepicker.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.6.1');

  api.addFiles([
    'dist/js/bootstrap-datepicker.js',
    'dist/js/bootstrap.js'
  ], 'client');

  api.addFiles(['dist/css/bootstrap-datepicker3.css'], 'client');
});

'use strict';

require.context('./', true, /^\.\/.*\.html/);
require.context('./img/', true, /^\.\/.*\.jpg|png/);

require('./scss/main.scss');

require('./js/main.js');
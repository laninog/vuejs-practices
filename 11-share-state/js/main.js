"use strict";

const dataStore = {
	names: [
		'Sofia',
		'Miguel',
		'Ana'
	],
	roles: [
		'Manager',
		'Developer',
		'UX'
	]
};

new Vue({
    el: '#names',
    data: dataStore
});

new Vue({
	el: '#roles',
	data: dataStore
});
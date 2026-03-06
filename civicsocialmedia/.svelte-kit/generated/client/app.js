export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [2];

export const dictionary = {
		"/": [3],
		"/archetypes": [4],
		"/begijpen/[slug]/step2": [~5],
		"/begrijpen": [~6,[2]],
		"/begrijpen/step1": [8,[2]],
		"/begrijpen/step2": [9,[2]],
		"/begrijpen/step3": [10,[2]],
		"/begrijpen/[slug]": [~7,[2]],
		"/cyberpunk": [11],
		"/evalueren/[slug]": [~12],
		"/ontwerpprincipes": [~13],
		"/roadmap": [14],
		"/toolkit": [15],
		"/toolkit/[slug]": [~16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';
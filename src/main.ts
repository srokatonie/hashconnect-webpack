// (window as any).global = window;
// global.Buffer = global.Buffer || require('buffer').Buffer;
// global.process = require('process');

import './global.css';

// @ts-ignore
import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;

import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
// export async function load({ fetch }) {

//     let addr = 'http://10.0.4.41:8080/thecontinental/01'
//     const res = await fetch(addr);
//     const continental = await res.json();

// return { continental }
// }
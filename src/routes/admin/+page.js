import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;





// export async function load({ fetch }) {

//     const addr = 'http://10.0.4.41:8080/setupcheck/now';
//     const res = await fetch(addr);
//     const setup_check = await res.json();

//     let stats_result = null;
//     if (setup_check === true) {
//         const addr2 = 'http://10.0.4.41:8080/stats';
//         const res2 = await fetch(addr2);
//         const stats = await res2.json();
//         stats_result = stats;
//     } else {
//         stats_result = [{
//             moviecount: '0',
//             tvshowcount: '0',
//             postercount: '0',
//             size: '0'
//         }];

//     }
//     console.log(setup_check, stats_result);

//     return { setup_check, stats_result }
// }
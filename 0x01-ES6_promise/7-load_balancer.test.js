import loadBalancer from './7-load_balancer';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

describe('loadBalancer function', () => {
    test('returns the value of the fastest promise', async () => {
        const result1 = await loadBalancer(promiseUK, promiseFR);
        const result2 = await loadBalancer(promiseUKSlow, promiseFR);
        
        expect(result1).toBe(ukSuccess);
        expect(result2).toBe(frSuccess);
    });
});

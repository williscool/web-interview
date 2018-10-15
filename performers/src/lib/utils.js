// https://egghead.io/lessons/react-create-a-pipe-function-to-enable-function-composition

/**
 * Preset the first n arguments to a function
 *
 * @param {*} fn input function
 * @param {*} args args to bind
 *
 * @returns {function} function with pre bound args
 */
export const partial = (fn, ...args) => fn.bind(null, ...args);

// called _pipe in tutorial
const compose = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(compose);

const cache = new Map();

function get(input) {
    return cache.get(input);
}

function set(input, results) {
    cache.set(input, results);
}

function has(input) {
    return cache.has(input);
}

export const Cache = {
    get, set, has
}
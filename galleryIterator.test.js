"use strict";

const GalleryIterator = require('./galleryIterator');
const iterator = new GalleryIterator();

function initializeWithArray() {
    iterator.init(['a', 'b', 'c']);
}

describe('Iterator with no array', () => {
    beforeEach(() => {
        iterator.init(null);
    });

    test('Init with no array', () => {
        expect(iterator.array).toEqual(null);
        expect(iterator.index).toBe(0);
    });

    test('Current with no array', () => {
        expect(iterator.current()).toBe(null);
    });

    test('All with no array', () => {
        expect(iterator.all()).toBe(null);
    });

    test('Next with no array', () => {
        expect(iterator.next()).toBe(null);
    });

    test('Prev with no array', () => {
        expect(iterator.prev()).toBe(null);
    });
});

describe('Iterator with an empty array', () => {
    beforeEach(() => {
        iterator.init([]);
    });

    test('Init with an empty array', () => {
        expect(iterator.array).toEqual([]);
        expect(iterator.index).toBe(0);
    });

    test('Current with an empty array', () => {
        expect(iterator.current()).toBe(null);
    });

    test('All with an empty array', () => {
        expect(iterator.all()).toEqual([]);
    });

    test('Next with an empty array', () => {
        expect(iterator.next()).toBe(null);
    });

    test('Prev with an empty array', () => {
        expect(iterator.prev()).toBe(null);
    });
});

describe('Iterator with an array', () => {
    beforeEach(() => {
        initializeWithArray()
    });

    test('Init with an array', () => {
        expect(iterator.array).toEqual(['a', 'b', 'c']);
        expect(iterator.index).toBe(0);
    });

    test('Init with replaced array', () => {
        iterator.next();
        iterator.init(['x', 'y', 'z']);
        expect(iterator.array).toEqual(['x', 'y', 'z']);
        expect(iterator.index).toBe(0);
    });

    test('Current with an array', () => {
        expect(iterator.current()).toBe('a');
    });

    test('Current after next', () => {
        iterator.next();
        expect(iterator.current()).toBe('b');
    });

    test('Current after prev', () => {
        iterator.prev();
        expect(iterator.current()).toBe('c');
    });

    test('All with an array', () => {
        expect(iterator.all()).toEqual(['a', 'b', 'c']);
    });

    test('Next with an array', () => {
        expect(iterator.next()).toBe('b');
        expect(iterator.next()).toBe('c');
        expect(iterator.next()).toBe('a');
        expect(iterator.next()).toBe('b');
    });

    test('Prev with an array', () => {
        expect(iterator.prev()).toBe('c');
        expect(iterator.prev()).toBe('b');
        expect(iterator.prev()).toBe('a');
        expect(iterator.prev()).toBe('c');
    });
});

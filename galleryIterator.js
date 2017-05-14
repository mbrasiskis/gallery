"use strict";

/**
 * Gallery iterator
 */
class GalleryIterator {

    constructor() {
        this.init(null);
    }

    /**
     * Initializes iterator
     * @param array
     */
    init(array) {
        this.array = array;
        this.index = 0;
    }

    /**
     * Returns next element
     * @returns {*}
     */
    next() {
        if (++this.index > this.getMaxIndex()) {
            this.index = 0;
        }

        return this.current();
    }

    /**
     * Returns previous element
     * @returns {*}
     */
    prev() {
        if (--this.index < 0) {
            this.index = this.getMaxIndex();
        }

        return this.current();
    }

    /**
     * Returns current element
     * @returns {*}
     */
    current() {
        if (this.canIterate()) {
            return this.array[this.index];
        }

        return null;
    }

    /**
     * Returns all items
     * @returns {*}
     */
    all() {
        return this.array;
    }

    /**
     * Returns max index
     * @returns {number}
     */
    getMaxIndex() {
        if (this.canIterate()) {
            return this.array.length - 1;
        }

        return 0;
    }

    /**
     * Indicates whether iteration is possible
     * @returns {*|boolean}
     */
    canIterate() {
        return this.array && this.array.constructor === Array && this.array.length;
    }
}

module.exports = GalleryIterator;

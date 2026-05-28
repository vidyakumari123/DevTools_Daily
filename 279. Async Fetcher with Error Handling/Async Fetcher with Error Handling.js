'use strict';

/**
 * Simulated async DB
 * - read(id): resolves with value OR null if not found
 * - create(id, value): stores value
 * Both methods resolve after ~10ms
 */
class DB {
  constructor() {
    this.storage = new Map();
  }

  read(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.storage.has(id) ? this.storage.get(id) : null);
      }, 10);
    });
  }

  create(id, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.storage.set(id, value);
        resolve();
      }, 10);
    });
  }
}

/**
 * Complete the Fetcher class below
 * Do not change class or method names
 */
class Fetcher {
  constructor() {
    this.db = new DB();
    this.process = new Set();
  }

  /**
   * @param {number} id
   * @returns {Promise<number>}
   */
  async get(id) {
    const value = await this.db.read(id)
    // TODO: Implement
    if (value === null) {
      return -1
    }
    return value
  }

  /**
   * @param {number} id
   * @param {number} value
   * @returns {Promise<void | number>}
   */
  async post(id, value) {

    if (this.process.has(id)) {
      return -1
    }
    this.process.add(id);
    // TODO: Implement
    try {

      const isThere = await this.db.read(id);

      // already exists
      if (isThere !== null) {
        return -1;
      }

      // create new value
      await this.db.create(id, value);

    } finally {

      // remove lock
      this.process.delete(id);
    }
  }
}

const Storage = {
  getRaw(key, fallback = null) {
    const value = localStorage.getItem(key);
    return value !== null ? value : fallback;
  },
  setRaw(key, value) {
    localStorage.setItem(key, value);
  },
  getJSON(key, fallback = null) {
    const value = localStorage.getItem(key);
    if (!value) return fallback;
    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  },
  setJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

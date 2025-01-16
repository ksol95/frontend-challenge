export class LocStorage {
  static separator = ",";

  static update(key, data) {
    if (Array.isArray(data)) {
      localStorage.setItem(key, data.join(this.separator));
    } else {
      localStorage.setItem(key, data);
    }
  }

  static append(key, data) {
    const currentValue = localStorage[key] ? localStorage[key] + "," : "";

    if (Array.isArray(data)) {
      localStorage.setItem(key, currentValue + data.join(this.separator));
    } else {
      localStorage.setItem(key, currentValue + data);
    }
  }

  static get(key) {
    return localStorage[key] ? localStorage[key].split(this.separator) : [];
  }

  static removeItem(key, value) {
    if (localStorage[key]) {
      const values = localStorage[key].split(this.separator);
      if (values.includes(value)) {
        const index = values.findIndex((i) => i === value);
        values.splice(index, 1);
      }
      this.update(key, values);
    }
  }

  static clear() {
    localStorage.clear();
  }
}

// Design a map that supports put(), get()
// and keyset(), where keyset() should return keys in their insertion order.


function MapEntry(key, val) {
    this.key = key;
    this.val = val;

    this.getKey = () => {
        return this.key;
    }

    this.getValue = () => {
        return this.val;
    }

    this.setValue = (newVal) => {
        this.val = newVal;
    }
}


function Map() {
    this.values = [];

    this.get = (key) => {
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] !== null) {
                if (this.values[i].getKey().equals(key)) {
                    return this.values[i].getValue();
                }
            }
        }
        return null;
    }

    this.put = (key, val) => {
        let insert = true;
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i].getKey().equals(key)) {
                this.values[i].setValue(val);
                insert = false;
            }
        }
        if (insert) {
            values.push(new MapEntry(key, val));
        }
    }

    this.keySet = () => {
        let keySet = [];
        for (let i = 0; i < this.values.length; i++) {
            keySet.push(this.values[i].getKey());
        }
        return keySet;
    }
}
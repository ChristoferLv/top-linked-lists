class LinkedList {
    #size;
    #head;
    #tail;
    constructor() {
        this.#size = 0;
        this.#head = null;
        this.#tail = null;
    };

    /**
     * 
     * @param {any} value 
     */
    append(value) {
        let last = this.#head;
        const newNode = createNode(value);
        if (last == null) {
            this.#head = newNode;
        } else {
            while (last.next != null) {
                last = last.next;
            }
            last.next = newNode;
            newNode.prev = last;
        }
        this.#tail = newNode;
        this.#size = this.#size + 1;
    }

    /**
     * 
     * @param {any} value 
     */
    prepend(value) {
        const newNode = createNode(value);
        const head = this.#head;
        this.#head = newNode;
        newNode.next = head;
        this.#size = this.#size + 1;
    }

    /**
     * 
     * @returns {number}
     */
    size() {
        return this.#size;
    }

    /**
     * 
     * @returns {any}
     */
    head() {
        return this.#size != 0 ? this.#head.getValue() : undefined;
    }

    /**
     * 
     * @returns {any}
     */
    tail() {
        return this.#size != 0 ? this.#tail.getValue() : undefined;
    }

    /**
     * 
     * @param {number} index 
     * @returns {any}
     */
    at(index) {
        if (this.#size == 0) return undefined;
        if (this.#size <= index) return undefined;
        let head = this.#head;
        for (let i = 0; i < index; i++) {
            head = head.next;
        }
        return head.getValue();
    }

    /**
     * 
     * @returns {any}
     */
    pop() {
        if (this.#size == 0) return undefined;
        const head = this.#head;
        this.#head = head.next;
        this.#size = this.#size - 1;
        return head.getValue();
    }

    #traverse(value) {
        let head = this.#head;
        for (let i = 0; i < this.#size; i++) {
            if (head.getValue() == value) {
                return i;
            }
            head = head.next;
        }
        return -1;
    }

    /**
     * 
     * @param {any} value 
     * @returns {boolean}
     */
    contains(value) {
        if (this.#traverse(value) != -1) return true;
        return false;
    }

    /**
     * 
     * @param {any} value 
     * @returns {number}
     */
    findIndex(value) {
        return this.#traverse(value);
    }

    /**
     * 
     * @returns {string}
     */
    toString() {
        if (this.#size == 0) return "";
        let head = this.#head;
        let res = "";
        for (let i = 0; i < this.#size; i++) {
            res = res + `( ${head.getValue()} ) -> `
            head = head.next;
        }
        res = res + "( null )";
        return res;
    }
}

function createNode(val) {
    const next = null;
    const prev = null;

    const getValue = () => {
        return val;
    }

    const setValue = (newVal) => {
        val = newVal;
    }

    return { getValue, setValue, prev, next }
}

export default LinkedList;
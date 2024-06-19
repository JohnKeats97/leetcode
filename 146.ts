// делаем двусвязный список, где в начале храним последний вызываемый элемент,
// а с конца списка удаляем, если места больше нет
// самый последний - самый редкоиспользуемый, а самый первый - последнеиспользуемый
// все элементы так же храним в мапе (храним ноду списка)
// если обращаемся к элементу, то находим его по мапе, схлопываем элементы вокруг
// а этот элемент вставляем в начало

// перепутал next и prev

interface Node {
    prev: Node;
    next: Node;
    value: number;
    key: number;
}

class LRUCache {
    private map = {};
    private capacity = 0;
    private tail = undefined;
    private head = undefined;

    constructor(capacity: number) {
        this.map = {};
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map[key]) {
            const node = this.map[key];

            this.put(key, node.value);

            return node.value;
        }

        return -1;
    }

    put(key: number, value: number): void {
        // элемент есть в мапе - удаляю его и вставляю заного
        if (this.map[key]) {
            const node = this.map[key];

            this.map[key] = undefined;
            this.capacity++;

            // если мой элемент голова - ставлю голову следующий
            if (this.head.key === node.key) {
                this.head = node.prev;
            }

            // если мой элемент жопа - ставлю голову следующий
            if (this.tail.key === node.key) {
                this.tail = node.next;
            }

            if (node.next) {
                node.next.prev = node.prev;
            }

            if (node.prev) {
                node.prev.next = node.next;
            }

            this.put(key, value);

            return;
        }

        if (this.capacity) {
            this.capacity--;

            const node = {
                prev: this.head,
                next: undefined,
                value,
                key,
            };

            this.map[key] = node;

            if (this.head) {
                this.head.next = node;
            }

            this.head = node;
            
            if (!this.tail) {
                this.tail = node;
            }
        } else {
            // закончилась возможность вставки - удаляем элемент с конца и вставляем новый в начало
            if (this.tail) {
                this.capacity++;

                if (this.tail.next) {
                    this.tail.next.prev = undefined;
                }

                this.map[this.tail.key] = undefined;

                this.tail = this.tail.next;

                this.put(key, value);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
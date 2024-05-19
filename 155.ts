// https://leetcode.com/problems/min-stack/description/

// [[val, егоМинимум], [val, егоМинимум], [val, егоМинимум]]

class MinStack {
    stack = [];
    min: number | undefined = undefined;

    constructor() {
        
    }

    push(val: number): void {
        if (this.min === undefined) {
            this.min = val;
        } else if (val < this.min) {
            this.min = val;
        }

        this.stack.push([val, this.min]);
    }

    pop(): void {
        const val = this.stack.pop();

        this.min = this.stack[this.stack.length - 1]?.[1];

        return val[0];
    }

    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    getMin(): number {
        return this.min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
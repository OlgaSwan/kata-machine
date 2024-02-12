type SNode<T> = {
    value: T
    prev?: SNode<T>
}

export default class Stack<T> {
    public length: number
    private head?: SNode<T>

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node = {value: item} as SNode<T>
        this.length++
        if(!this.head) {
            this.head = node
            return
        }
        node.prev = this.head
        this.head = node
}
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)

        const head = this.head as SNode<T>
        if(!head) return undefined

        if(this.length === 0) {
            this.head = undefined
            return head.value
        }

        this.head = head.prev
        return head.value
}
    peek(): T | undefined {
        return this.head?.value
}
}
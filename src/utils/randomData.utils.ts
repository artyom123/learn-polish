
export default class RandomData {
    private static generateKey(min: number, max: number): number {
        return Math.round(Math.random() * (max - min - 1)) + min
    }

    static getNewArray<T>(data: Array<T>, count: number): Array<T> {
        const mixedData = this.mixArray([...data])
        const n = mixedData.length - 1 > count ? count : mixedData.length - 1
        const min = 0
        const max = mixedData.length
        const set: Set<Array<T>> = new Set()

        for (let i = 0; i < n;) {
            const key = this.generateKey(min, max)
            const item = mixedData[key] as Array<T>

            if (!set.has(item)) {
                set.add(item)
                i++
            }
        }

        return [...set] as Array<T>
    }

    static mixArray<T>(data: Array<T>): Array<T> {
        return data.sort(() => Math.random() - 0.5)
    }
}

export const generateRandomNumber = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min
export const getRandomData = <T>(data: Array<T>, count: number = 20): Array<T> => {
    const n = data.length - 1 > count ? count : data.length - 1
    const min = 0
    const max = data.length - 1
    const map: Map<number, Array<T>> = new Map()

    for (let i = 0; i < n;) {
        let key = generateRandomNumber(min, max)

        if (!map.has(key)) {
            map.set(key, data[key] as Array<T>)
            i++
        }
    }

    return Array.from(map.values()) as Array<T>
}

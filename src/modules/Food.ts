export default class Food {
    element: HTMLElement
    constructor() {
        // 获取页面中的food元素，并将其赋值给element
        this.element = document.getElementById('food')!
    }

    /**
     * 获取food X轴坐标的位置
     */
    get x() {
        return this.element.offsetLeft
    }

    /**
     * 获取food Y轴坐标的位置
     */
    get y() {
        return this.element.offsetTop
    }

    // 修改food的位置
    change() {
        // 生成随机位置
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}
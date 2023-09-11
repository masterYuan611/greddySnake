export default class Snake {
    head: HTMLElement // 蛇头
    bodies: HTMLCollection // 蛇的身体
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!
        this.bodies = this.element.getElementsByTagName('div')!
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(val: number) {
        if (val === this.X) {
            return
        }
        if (val < 0 || val > 290) {
            throw new Error('蛇撞墙了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
            console.log('进入了这个判断')
            if (val > this.X) {
                val = this.X - 10
            } else {
                val = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = `${val}px`
        this.checkeHeadBody()
    }

    set Y(val: number) {
        if (val === this.Y) {
            return
        }
        if (val < 0 || val > 290) {
            throw new Error('蛇撞墙了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
            if (val > this.Y) {
                val = this.Y - 10
            } else {
                val = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = `${val}px`
        this.checkeHeadBody()
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    checkeHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('游戏结束')
            }
        }
    }
}
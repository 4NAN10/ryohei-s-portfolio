document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.mobile_header = document.querySelector('.mobile-header');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.mobile_header.classList.remove('triggered');
        } else {
            this.mobile_header.classList.add('triggered');
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
    }
}


class Animate {
    constructor(element) {
        this.element = element;
        this.interval = null;
    }

    movement(property, from, to, time = 1, unit = "%", easing = Animate.EASING.linear) {
        clearInterval(this.interval);
    
        const width = this.element.style[property].match(/\d+\.\d+|\d+/gm);
        const start = this.element.style[property] ? parseFloat(width) : from;

        let period = ((start - from) / (to - from)) * 1000;
        const end = time * 1000;
    
        const dif = to - from;
        const step = dif;
    
        this.interval = setInterval(() => {
            if (period <= end) {
                const applied = easing(period, from, step, end);
                this.element.style[property] = applied + unit;
            } else {
                this.element.style[property] = to + unit;
                clearInterval(this.interval);
            }
            period += 10;
        }, 10);
    }

    static EASING = {
        linear: (t, b, c, d) => c * t / d + b,
        easeInQuad: (t, b, c, d) => c * (t /= d) * t + b,
        easeOutQuad: (t, b, c, d) => -c * (t /= d) * (t - 2) + b,
        easeInOutQuad: (t, b, c, d) => (t /= d / 2) < 1 ? c / 2 * t * t + b: -c / 2 * ((--t) * (t - 2) - 1) + b,
        easeInSine: (t, b, c, d) => -c * Math.cos(t / d * (Math.PI / 2)) + c + b,
        easeOutSine: (t, b, c, d) => c * Math.sin(t / d * (Math.PI / 2)) + b,
        easeInOutSine: (t, b, c, d) => -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b,
        easeInExpo: (t, b, c, d) => (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b,
        easeInOutSine: (t, b, c, d) => (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b,
        easeInOutExpo: (t, b, c, d) => {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: (t, b, c, d) => -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b,
        easeOutCirc: (t, b, c, d) => c * Math.sqrt(1 - (t = t / d - 1) * t) + b,
        easeInOutCirc: (t, b, c, d) => (t /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b: c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b,
        easeInCubic: (t, b, c, d) => c * (t /= d) * t * t + b,
        easeOutCubic: (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b,
        easeInOutCubic: (t, b, c, d) => (t /= d / 2) < 1 ? c / 2 * t * t * t + b: c / 2 * ((t -= 2) * t * t + 2) + b,
        easeInQuart: (t, b, c, d) => c * (t /= d) * t * t * t + b,
        easeOutQuart: (t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b,
        easeInOutQuart: (t, b, c, d) => (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b: -c / 2 * ((t -= 2) * t * t * t - 2) + b,
        easeInQuint: (t, b, c, d) => c * (t /= d) * t * t * t * t + b,
        easeOutQuint: (t, b, c, d) => c * ((t = t / d - 1) * t * t * t * t + 1) + b,
        easeInOutQuint: (t, b, c, d) => (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b: c / 2 * ((t -= 2) * t * t * t * t + 2) + b,
        easeInElastic: (t, b, c, d) => {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: (t, b, c, d) => {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: (t, b, c, d) => {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: (t, b, c, d) => {
            const s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: (t, b, c, d) => {
            const s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: (t, b, c, d) => {
            const s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
    } 
}
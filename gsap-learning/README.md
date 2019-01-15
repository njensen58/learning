// TweenLite: Great for most simple transitions
    

// Methods
    // OOP approach to these 3 methods (to, from, fromTo):
        var tween = new TweenLite(element, 2, { width: 200px }, delay: 0)
        var tween = new TweenLite.to(element, 2, { width: 200px }, delay: 0)
    .to(element(ref, id, class), time, { manip }, delay):
        - Defines ending values for elements with beginning
        styles written in css
    .from( same args)
        - Defines starting values with elements with ending
        stlyes written in css
    .fromTo()
        - Defines starting and ending values


// Manips in {}:
    opacity: 0 - 1
    rotation: deg
// Manips after {},:
    delay
    ease
    paused
    overwrite
    onComplete

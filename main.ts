input.onButtonPressed(Button.A, function () {
    if (_function == 0) {
        a += 1
        basic.showNumber(a)
    } else {
        if (_function == 1) {
            b += 1
            basic.showNumber(b)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    _function += 1
    if (_function >= 2) {
        basic.showString("=")
        basic.showNumber(a + b)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (_function == 0) {
        a += -1
        basic.showNumber(a)
    } else {
        if (_function == 1) {
            b += -1
            basic.showNumber(b)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    _function += 1
    if (_function >= 2) {
        basic.showString("=")
        basic.showNumber(a - b)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.pause(500)
    a = 0
    b = 0
    basic.showNumber(a)
    basic.showNumber(b)
})
let b = 0
let a = 0
let _function = 0
_function = 0
basic.showNumber(a)
basic.showNumber(b)
a = 0
b = 0

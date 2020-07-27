let direction = 1
let pos_x = 0
let pos_y = 0
let position = [0, 1, 2, 3, 4]
led.plot(pos_x, pos_y)
basic.forever(function () {
    led.unplot(pos_x, pos_y)
    pos_y += direction
    led.plot(pos_x, pos_y)
    if (pos_y < 0) {
        direction += 1
        if (pos_y == pos_y + direction) {
            led.plot(pos_x + 1, pos_y + 1)
            pos_y += pos_y + 1 + direction
            led.plot(pos_x + 1, pos_y + 1)
            if (pos_y < 0) {
                direction += 1
            } else if (pos_y >= 4) {
                direction += -1
            }
            basic.pause(100)
        }
    } else if (pos_y >= 4) {
        direction += -1
    }
    basic.pause(100)
})

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        cuteBot.turnleft()
    } else if (receivedNumber == 20) {
        cuteBot.turnright()
    } else if (receivedNumber == 30) {
        cuteBot.forward()
    } else if (receivedNumber == 40) {
        cuteBot.backforward()
    } else if (receivedNumber == 50) {
        cuteBot.stopcar()
    }
})
basic.forever(function () {
    radio.setGroup(154)
})

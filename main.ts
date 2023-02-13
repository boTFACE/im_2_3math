let x = 0
bluetooth.onBluetoothConnected(function () {
    basic.showNumber(x)
})
input.onButtonPressed(Button.A, function () {
    x = 5 * 6
    x = x + 6
    x = x / 6
    basic.showNumber(6)
})

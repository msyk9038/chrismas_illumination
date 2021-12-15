let 点滅間隔 = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Breve))
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    点滅間隔 = randint(100, 1000)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(点滅間隔)
    pins.digitalWritePin(DigitalPin.P0, 0)
    点滅間隔 = randint(100, 1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(点滅間隔)
    pins.digitalWritePin(DigitalPin.P1, 0)
    点滅間隔 = randint(100, 1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(点滅間隔)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
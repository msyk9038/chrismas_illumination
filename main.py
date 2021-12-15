def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
    pins.digital_write_pin(DigitalPin.P0, 1)
    music.play_tone(392, music.beat(BeatFraction.HALF))
    music.play_tone(392, music.beat(BeatFraction.QUARTER))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.play_tone(330, music.beat(BeatFraction.DOUBLE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.clear_screen()
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)

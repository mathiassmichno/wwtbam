function toggle_loop() {
    if (level_changed) {
        level_loop.stop()
        level_changed = false
    }
    switch (level) {
        case 1:
            level_loop = level_1_snd
            break;
        case 2:
            level_loop = level_2_snd
            break;
        case 3:
            level_loop = level_3_snd
            break;
        case 4:
            level_loop = level_4_snd
            break;
    }
    if (level_loop.playing()) {
        level_loop.stop()
    } else {
        level_loop.play()
    }
}

var locked_in = false
var level = 1
var level_loop = level_1_snd
var level_changed = false

function set_level(element) {
    level = parseInt(element.value)
    level_changed = true
    console.log("LEVEL", level)

}

function next_level() {
    level_loop.stop()
    level = level + 1
    elem = document.getElementById('level_value');
    elem.value = level
    switch (level) {
        case 2:
            to_level_2_snd.play()
            break;
        case 3:
            to_level_3_snd.play()
            break;
        case 4:
            to_level_4_snd.play()
            break;
    }

}

function next_question() {
    elem = document.getElementById('level_value');
    elem.value = level
    switch (level) {
        case 2:
            to_level_2_snd.play()
            break;
        case 3:
            to_level_3_snd.play()
            break;
    }
}

function lock_in() {
    locked_in = !locked_in
    if (locked_in) {
        level_loop.stop()
        lockedin_snd.play()
    } else {
        lockedin_snd.stop()
        lockedin_loop_snd.stop()
    }

    elem = document.getElementById('outcome');
    elem.classList.toggle("hidden")
    elem = document.getElementById('lock_in');
    elem.classList.toggle("disabled")
}

function answer_right() {
    lock_in()
    switch (level) {
        case 1:
            lvl1_correct_snd.play()
            break;
        case 2:
            lvl2_correct_snd.play()
            break;
        case 3:
            lvl3_correct_snd.play()
            break;
        case 4:
            level_loop.stop()
            lvl4_correct_snd.play()
            break;
    }
}

var lifeline_active = false
var lifeline_snd = undefined

function lifeline_sound() {
    if (lifeline_active) {
        lifeline_snd.stop()
    } else {
        level_loop.stop()
        lifeline_snd.play()
    }
}

function lifeline_loop(sound,button) {
    if (!lifeline_active) {
        lifeline_snd = sound
    }
    lifeline_sound()
    lifeline_active = !lifeline_active
    button.classList.toggle("btn-primary")
    button.classList.toggle("btn-danger")
}

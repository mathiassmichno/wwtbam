var level_vol = 0.3

var level_1_snd = new Howl({
  src: ['sounds/level_1.mp3'],
  loop: true,
  volume: level_vol,
  onplay: function() {
      level_loop = level_1_snd
  }
});

var level_2_snd = new Howl({
  src: ['sounds/level_2.mp3'],
  loop: true,
  volume: level_vol,
  onplay: function() {
      level_loop = level_2_snd
  }
});

var level_3_snd = new Howl({
  src: ['sounds/level_3.mp3'],
  loop: true,
  volume: level_vol,
  onplay: function() {
      level_loop = level_3_snd
  }
});

var level_4_snd = new Howl({
  src: ['sounds/level_4.mp3'],
  loop: true,
  volume: level_vol,
  onplay: function() {
      level_loop = level_4_snd
  }
});

var lockedin_snd = new Howl({
  src: ['sounds/lockedin_start.mp3'],
  volume: 1,
  onend: function() {
      lockedin_loop_snd.play()
  }
});

var lockedin_loop_snd = new Howl({
  src: ['sounds/lockedin_loop.mp3'],
  loop: true,
  volume: 1
});

var to_level_2_snd = new Howl({
  src: ['sounds/before_level_2.mp3'],
  volume: 1,
  onend: function() {
      level_2_snd.play()
      level_loop.fade(0, level_vol, 1000)
  }
});

var to_level_3_snd = new Howl({
  src: ['sounds/before_level_3.mp3'],
  volume: 1,
  onend: function() {
      level_3_snd.play()
      level_loop.fade(0, level_vol, 1000)
  }
});

var to_level_4_snd = new Howl({
  src: ['sounds/before_level_3.mp3'],
  volume: 1,
  onend: function() {
      level_4_snd.play()
      level_loop.fade(0, level_vol, 1000)
  }
});

var wrong_snd = new Howl({
    src: ['sounds/wrong.mp3'],
    volume: 1
});

var lvl1_correct_snd = new Howl({
  src: ['sounds/lvl1_correct.mp3'],
  volume: 1,
  onend: function() {
      level_loop.play()
      level_loop.fade(0, level_vol, 1000)
  }
});

var lvl2_correct_snd = new Howl({
  src: ['sounds/lvl2_correct.mp3'],
  volume: 1
});

var lvl3_correct_snd = new Howl({
  src: ['sounds/lvl3_correct.mp3'],
  volume: 1
});

var lvl4_correct_snd = new Howl({
  src: ['sounds/lvl4_correct.mp3'],
  volume: 1
});

var intro_snd = new Howl({
  src: ['sounds/intro.mp3'],
  volume: 1
});

var end_snd = new Howl({
  src: ['sounds/end.mp3'],
  volume: 1
});

var audience_snd = new Howl({
  src: ['sounds/audience_start.mp3'],
  volume: 1,
  onend: function() {
      audience_loop_snd.play()
      lifeline_snd = audience_loop_snd
  }
});

var audience_loop_snd = new Howl({
  src: ['sounds/audience_loop.mp3'],
  volume: 0.3,
  loop: true,
  onstop: function() {
      audience_end_snd.play()
  }
});

var audience_end_snd = new Howl({
  src: ['sounds/audience_end.mp3'],
  volume: 1,
  onend: function() {
      level_loop.play()
      level_loop.fade(0, level_vol, 2000)
  }
});

var phone_snd = new Howl({
  src: ['sounds/phone_start.mp3'],
  volume: 1,
  onend: function() {
      phone_loop_snd.play()
      lifeline_snd = phone_loop_snd
  }
});

var phone_loop_snd = new Howl({
  src: ['sounds/phone_loop.mp3'],
  volume: 0.3,
  loop: true,
  onstop: function() {
      phone_end_snd.play()
  }
});

var phone_end_snd = new Howl({
  src: ['sounds/phone_end.mp3'],
  volume: 1,
  onend: function() {
      level_loop.play()
      level_loop.fade(0, level_vol, 2000)
  }
});

var fifty_snd = new Howl({
  src: ['sounds/50_50.mp3'],
  volume: 1
});

# Music

Make music! Play songs, melodies, sounds, and tones.

## Play music

Use  the ``||music:play||`` block to play a song you compose, a short melody, or a built-in sound.

```cards
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
```

### Play a song

```block
music.play(music.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

### Play a melody

```block
music.play(music.stringPlayable("D F E A E A C B ", 120), music.PlaybackMode.UntilDone)
```

### Play a built-in sound

```block
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
```

### Play a sound effect

```blocks
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
```

## Sound effects

```cards
music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear))
```

## Sound

```cards
music.ringTone(0)
music.rest(0)
music.noteFrequency(Note.C)
music.beat(BeatFraction.Whole)
music.tempo()
music.changeTempoBy(20)
music.setTempo(120)
music.setVolume(0)
music.stopAllSounds()
```

## See also

[play](/reference/music/play),
[create song](/reference/music/create-song),
[string playable](/reference/music/string-playable),
[tone playable](/reference/music/tone-playable),
[create sound effect](/reference/music/create-sound-effect),
[randomize sound](/reference/music/randomize-sound),
[ring tone](/reference/music/ring-tone), 
[rest](/reference/music/rest),
[beat](/reference/music/beat), 
[tempo](/reference/music/tempo),
[change tempo by](/reference/music/change-tempo-by),
[set tempo](/reference/music/set-tempo),
[set voluime](/reference/music/set-volume),
[stop All Sounds](reference/music/stop-all-sounds)

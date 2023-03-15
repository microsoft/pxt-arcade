# Music

Make music. Play melodies and tones.

## Songs

```cards
music.createSong(hex`00780004080200`)
```

## Melodies

```cards
music.stringPlayable("", 120)
music.melodyPlayable(music.baDing)
```

## Sound

```cards
music.play(null, music.PlaybackMode.UntilDone)
music.tonePlayable(262, music.beat(BeatFraction.Whole))
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

## See Also

[play](/reference/music/play),
[tone playable](/reference/music/tone-playable),
[string playable](/reference/music/string-playable),
[melody playable](/reference/music/melody-playable),
[create song](/reference/music/create-song),
[ring tone](/reference/music/ring-tone), 
[rest](/reference/music/rest),
[beat](/reference/music/beat), 
[tempo](/reference/music/tempo),
[change tempo by](/reference/music/change-tempo-by),
[set tempo](/reference/music/set-tempo),
[set voluime](/reference/music/set-volume)

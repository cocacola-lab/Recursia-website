# Recursia · Learning to Compose

Research project website for **Recursive Self-Improvement of Shared Executable Stacks for Zero-Shot Long-Horizon Robot Manipulation**.

- Website: https://lfrlll.github.io/Recursia/
- Website repository: https://github.com/lfrlll/Recursia
- Robot implementation: https://github.com/cyzhuoda/recursia-fr3
- Original page source: https://github.com/phosphene7/Recursia-Page

This version is based on the supplied local website and adds three selected physical robot demonstrations. The repository contains the website, figures, downloadable paper, and selected media. It does not contain the robot implementation. Authors are left blank, as in the supplied page.

## Selected robot demonstrations

| Website card | Recording | Duration | Task |
| --- | --- | --- | --- |
| T1 · Shared basket | `assets/videos/T1.mp4` | 61.27 s | Mug and milk carton into the same basket |
| T2 · Reassigned plates | `assets/videos/T2.mp4` | 54.53 s | Blue mug to the left plate; white mug to the right |
| T3 · Bowl–mug dependency | `assets/videos/T3.mp4` | 52.13 s | Bowl onto the plate, followed by the mug into the bowl |

These are the complete supplied target recordings from `recursia_fastest_success_20261012`, at original speed and without further cuts or re-encoding. They use H.264, 640 × 480, 30 fps, with streaming metadata at the start of each MP4. Posters are actual video frames. Players preserve the 4:3 image and offer playback, seeking, and fullscreen controls.

Recorded motion segments were concatenated in order by the source export. Unrecorded perception and model-wait intervals are omitted, so the displayed durations are not full trial wall-clock times. T1 and T3 use the supplied final human success assessment; their original automatic logs remained false. T2 uses automatic success assessment. The curated videos do not alter the manuscript's result table or experiment scores. Public provenance and original SHA256 hashes are in `assets/videos/manifest.json`; the full supplied provenance remains in the local input folder.

## Update the website

- `index.html`: page text, task cards, and native video fallback.
- `site-config.js`: video paths, posters, durations, optional captions, authors, and optional code link. Keep native video attributes in `index.html` consistent when replacing media.
- `styles.css` and `script.js`: responsive layout and player interactions.
- `assets/videos/`: selected MP4 files and provenance manifest.
- `assets/posters/`: video poster frames.
- `Recursia.pdf`: downloadable manuscript.

The original video bundle, ZIP, local backups, and verification artifacts are ignored by Git and are not published.

## GitHub Pages deployment

GitHub Pages publishes branch `main`, folder `/` (root). Pushes to `main` update the website automatically. `.nojekyll` preserves the buildless static site. All local asset URLs are relative and work under `/Recursia/`.

To preview locally:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ . No build dependencies are required.

Method figures, task descriptions, and preliminary results are preserved from the supplied manuscript and website. Laboratory: https://github.com/cocacola-lab . Original design inspiration: https://ganlin-yang.github.io/EventVLA.github.io/ .

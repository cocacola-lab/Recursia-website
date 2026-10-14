# Recursia · Learning to Compose

Research project website for **Recursive Self-Improvement of Shared Executable Stacks for Zero-Shot Long-Horizon Robot Manipulation**.

- Website: https://cocacola-lab.github.io/Recursia-website/
- Website repository: https://github.com/cocacola-lab/Recursia-website
- Robot implementation: https://github.com/cocacola-lab/Recursia
- Original page source: https://github.com/phosphene7/Recursia-Page

This version follows the supplied 23-page manuscript `Recursia (2).pdf` (synchronized on 2026-10-13) and includes three selected physical robot demonstrations. The repository contains the website, manuscript figures, downloadable paper, and selected media. The robot implementation is linked separately. The seven authors and five affiliations are reproduced in manuscript order, including their affiliation numbers, in both static HTML and the page configuration.

## Manuscript update

The downloadable `Recursia.pdf` is a byte-for-byte copy of `Recursia (2).pdf`, SHA256 `4b875eaccc04040420c90216d13c8a9e4d8e518af76c819b433b2e1f3449c59e`. Both paper buttons use a versioned URL to avoid serving a cached older manuscript. The supplied PDF retains an unresolved table reference and does not contain the referenced per-task result tables or uncertainty estimates; the website states these limits.

| Paper figure | Website asset | Content |
| --- | --- | --- |
| 1 | `assets/figures/framework.webp` | Source improvement, validation, and frozen target execution |
| 2 | `assets/figures/stack.webp` | Tools, skills, handoffs, and verifiers |
| 3 | `assets/figures/zero-shot-transfer.webp` | Manuscript-reported LIBERO-Pro Long comparison |
| 4 | `assets/figures/compositional-reliability.webp` | Predecessor completion versus successor readiness |
| 5 | `assets/figures/inference-strategies.webp` | Three inference drivers on the frozen N=13 stack |
| 6 | `assets/figures/validation-gates.webp` | Recorded mechanism and paired-regression cases |
| 7 | `assets/figures/transfer-scaling.webp` | Separate source-improvement checkpoint study |

Figures 3 and 7 are rendered directly from the updated PDF at 2400 px width and saved as lossless WebP. The other figures and title mark retain their existing manuscript-source assets. Per-figure sources, conversion details, and hashes are recorded separately from the current downloadable paper in `assets/figures/manifest.json`.

The primary 28.4% Pos / 53.4% Task rates are manuscript-reported task-macro averages across 10 target tasks, with 50 seeds per task (500 episodes per perturbation axis). They are separate from the N=18 scaling endpoint (23.2% / 43.4%). Baseline execution protocols and grasping backends differ. The website does not infer missing per-task tables or uncertainty estimates, or claim an independently verified benchmark. Hardware results remain preliminary: three tasks, ten trials per task and method, manually scored. In accordance with Table 1 of the updated PDF, SD-only is 0% / 60% / 20% and Recursia is 20% / 80% / 100% for T1 / T2 / T3. Their unweighted task averages are 26.7% and 66.7%, respectively. These figures supersede the earlier website-only SD-only values of 0% / 80% / 0%.

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
- `site-config.js`: video paths, posters, durations, optional captions, authors with affiliation references, affiliations, and optional code link. Keep native video attributes in `index.html` consistent when replacing media.
- `styles.css` and `script.js`: responsive layout and player interactions.
- `assets/videos/`: selected MP4 files and provenance manifest.
- `assets/posters/`: video poster frames.
- `assets/figures/`: current manuscript figures and source provenance.
- `Recursia.pdf`: downloadable manuscript.

The original video bundle, manuscript source folder, ZIP files, local backups, and verification artifacts are ignored by Git and are not published. The supplied manuscript sources are preserved locally. The earlier website is backed up in `local-backup-20261012/before-paper-refresh/`; the state before this PDF/author synchronization is preserved in `local-backup-20261012/before-author-sync-20261013/`.

## GitHub Pages deployment

GitHub Pages publishes branch `main`, folder `/` (root). Pushes to `main` update the website automatically. `.nojekyll` preserves the buildless static site. All local asset URLs are relative and work under `/Recursia-website/`.

To preview locally:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ . No build dependencies are required.

Laboratory: https://github.com/cocacola-lab . Original design inspiration: https://ganlin-yang.github.io/EventVLA.github.io/ .


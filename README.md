# Horace Armory

Marketing site for Horace Armory, a gun shop and coffee bar planned for Horace, North Dakota, near Fargo. The shop is not open, and a Type 07 FFL/SOT has not been approved. This website does not sell firearms.

The site is plain HTML, CSS, and a few lines of JavaScript. There is no build step. Edit the files, commit, and GitHub Pages will publish them.

## Preview on your computer

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Any page can also be opened directly in a browser. Use the local server if fonts or the mobile menu misbehave from a `file://` address.

## Edit the words

Each page is one HTML file. Change the sentences in that file. The header and the footer are copied onto every page. If you change the shop name, the nav, or the footer note, make the same change in each HTML file:

| Page | File |
| --- | --- |
| Home | `index.html` |
| Firearms | `firearms.html` |
| Coffee bar | `coffee.html` |
| The hangout | `hangout.html` |
| Events | `events.html` |
| About | `about.html` |
| Coming soon / hours | `visit.html` |
| Missing-page message | `404.html` |

Colors and type are in `css/styles.css`, in the `:root` block at the top. The logo mark is `logo.svg` (silver, for the dark header and footer) and `favicon.svg` (the browser tab icon). The words “Horace Armory” next to the mark are text in the header, not part of the SVG.

Search the HTML for `[` to find every placeholder token.

## Placeholders

These tokens are standing in for facts that are not set. Leave a token in place until the real fact exists. When you fill one in, replace the whole `<span class="token">[TOKEN]</span>` with the real text so the dashed box goes away.

| Token | Where it is | Replace with |
| --- | --- | --- |
| `[HOURS]` | Footer of every page, the closing band on `index.html`, the hours card on `visit.html`, and a status note on `hangout.html` | The real days and times |
| `[PRICE]` | Every item on `coffee.html`, the coffee panel on `index.html`, and the coffee-page note | A real price for that item |
| `[DATE]` | Each sample event on `events.html` and the two sample cards on `index.html` | The real date, or delete the sample |
| `[TIME]` | Same event cards as `[DATE]` | The real time, or delete the sample |
| `[ABOUT STORY]` | The dashed story block on `about.html` | Chris’s account of the shop, in his own words |

Other copy is a sample, not a token. Treat it the same way: rewrite it or delete it before you rely on it.

- The coffee list (names and descriptions) on `coffee.html` is a sample menu. Nothing has been chosen, and nothing is for sale.
- The event titles and descriptions on `events.html`, and the two cards on `index.html`, are examples of the kind of gathering the shop might host. None of them are scheduled. Do not leave them up if people might try to attend.
- The paragraph that contains `[ABOUT STORY]` is unwritten on purpose. The short facts above it (owner, town, license not approved, not open) are the parts that should stay accurate.

Chris Spieker is the only person’s name on the site. Do not add other staff names unless they are real.

When the Type 07 FFL/SOT status changes, search the HTML for `Type 07` and update every sentence that describes it. Do not say the shop is licensed, or open, until that is actually true.

## Left off on purpose

Street address, map, phone number, email address, and a contact form are not on this site, and they are not placeholders to fill in. Do not add them unless you have decided to publish those details.

## What the firearms pages are allowed to say

Keep firearms copy general. Categories are fine. A stock list, prices, and a way to pay are not. All firearm sales, once they exist, follow federal, state, and local law, and they happen in person. This site has no cart, no checkout, and no shipping.

The footer on every page says the shop is not open and the license is not approved. If you rewrite the footer, keep that meaning intact until the facts change.

## Publish with GitHub Pages

Free GitHub Pages serves a public repository. This project is ready to publish from the repository root. `.nojekyll` is included so GitHub does not run the files through Jekyll. `CNAME` already contains `horacearmory.com`.

1. Push the site to the `main` branch of the GitHub repository (merge the pull request first, if you are looking at a branch).
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set the branch to `main` and the folder to `/` (root). Save.
5. Under **Custom domain**, enter `horacearmory.com`. Save. The `CNAME` file in the repo should match. After the certificate is issued, turn on **Enforce HTTPS**.

The first publish can take a few minutes. After that, a push to `main` updates the site on its own. Edit in the GitHub web editor if you do not want to use git locally: open a file, change the text, and commit to `main`.

## Point horacearmory.com at GitHub Pages

At the registrar that holds `horacearmory.com`, set these records and remove any old parking-page records that point the same names elsewhere.

**Apex domain** (`horacearmory.com`):

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6:

| Type | Host | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**www:**

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `SpiekerChris.github.io` |

Use `SpiekerChris.github.io` only if this repository stays under the `SpiekerChris` GitHub account. If the site moves to another account, point `www` at that account’s `username.github.io` instead.

The `CNAME` file inside this repository is for GitHub, not a substitute for the DNS records above. DNS can take a while to update. GitHub’s Pages settings page will show when it can see the domain and when HTTPS is ready.

Until the domain is connected, GitHub may also offer a temporary address like `https://spiekerchris.github.io/horace-armory-site/`. Relative links in this project work there too.

# Run Dev Server

`npm run dev`


# Add a New Unity Asset Card and Links

Follow these steps whenever a new Unity asset is released and needs to be added to the website.

---

## Files to Edit

| File | What to change |
|---|---|
| `src/assets/images/unity-assets/` | Add new asset promotional image |
| `src/pages/index.astro` | Add `<Content>` card block; update `<YouTube>` id and title in Hero |
| `src/navigation.ts` | Add asset link under "Unity Assets"; add docs link under "Documentation" |
| `src/components/widgets/Announcement.astro` | Update href and link text to the new asset or blog post |

---

## Step 1 — Add the Asset Image

Place the new asset's promotional image in:

```
src/assets/images/unity-assets/<asset-name>.png
```

This path is referenced directly by the `<Content>` card added in Step 2.

---

## Step 2 — Add a Content Card to `src/pages/index.astro`

After the last `<Content>` block, add a new one. Alternate `isReversed` to keep the layout consistent with existing cards.

```astro
<Content
  isAfterContent={true}
  isReversed
  imageWidth={1280}
  imageHeight={720}
  imageAspectRatio="16:9"
  defaultIcon="tabler:galaxy"
  items={[
    { title: 'Description point 1.' },
    { title: 'Description point 2.' },
    { title: 'Description point 3.' },
  ]}
  image={{
    src: '~/assets/images/unity-assets/<asset-name>.png',
    alt: '<Asset Name> Image',
  }}
  callToAction={{
    target: '_blank',
    text: 'Visit Store Page',
    icon: 'tabler:chevron-right',
    href: 'https://assetstore.unity.com/packages/...',
  }}
>
  <Fragment slot="content">
    <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
      Asset Name Here
    </h3>
  </Fragment>

  <Fragment slot="bg">
    <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>
  </Fragment>
</Content>
```

---

## Step 3 — Add Asset Store Link to Nav in `src/navigation.ts`

Inside the `Unity Assets` links array, add a new entry:

```ts
{
  text: 'Your New Asset Name',
  href: 'https://assetstore.unity.com/packages/...',
},
```

---

## Step 4 — Add Documentation Link to Nav in `src/navigation.ts`

Inside the `Documentation` links array, add a new entry:

```ts
{
  text: 'Your New Asset Name',
  href: 'https://parallelcascades.com/your-new-asset-docs/',
},
```

---

## Step 5 — Update the Latest Release YouTube Embed in `src/pages/index.astro`

In the `<Fragment slot="image">` block inside `<Hero>`, update:

```astro
<YouTube id="<NEW_VIDEO_ID>" title="<New Asset Name>" posterQuality="max" />
```

Also update the label above it if needed:

```astro
<h3 class="text-lg font-semibold mb-2 text-center w-full">Latest Release:</h3>
```

---

## Step 6 — Update the Top Announcement Banner in `src/components/widgets/Announcement.astro`

Update the `<a>` tag to point to the new asset's blog post slug or Asset Store page:

```html
<a href="/your-new-asset-slug" class="text-muted hover:underline dark:text-slate-400 font-medium">
  Your New Asset Name »
</a>
```

If a new blog post has been written for the asset, use its slug from `src/data/post/`. Otherwise link directly to the Asset Store URL.

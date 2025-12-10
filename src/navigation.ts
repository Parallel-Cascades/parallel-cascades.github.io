export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
       {
      text: 'Unity Assets',
      links: [
        {
          text: 'Procedural Planet Generation',
          href: 'https://assetstore.unity.com/packages/vfx/shaders/procedural-planet-generation-339842',
        },
        {
          text: 'Procedural Celestial Body Materials',
          href: 'https://assetstore.unity.com/packages/vfx/shaders/procedural-celestial-body-materials-296362',
        },
        {
          text: 'ECS N-Body Orbit Simulation',
          href: 'https://assetstore.unity.com/packages/templates/systems/ecs-n-body-orbit-simulation-341370',
        },
        {
          text: 'Procedural Space Skybox',
          href: 'https://assetstore.unity.com/packages/vfx/shaders/procedural-space-skybox-295596',
        },
        {
          text: 'Vibrant 4K Starfield Skybox Pack',
          href: 'https://assetstore.unity.com/packages/2d/textures-materials/sky/vibrant-4k-starfield-skybox-pack-292597',
        },
      ],
    },
    {
      text: 'Documentation',
      links: [
        {
          text: 'Procedural Space Skybox',
          href: 'https://parallelcascades.com/procedural-space-skybox-documentation/',
        },
        {
          text: 'Procedural Planet Generation',
          href: 'https://parallelcascades.com/procedural-planet-generation/',
        },
        {
          text: 'Procedural Celestial Body Materials',
          href: 'https://parallelcascades.com/procedural-celestial-body-materials/',
        },
      ],
    }
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Unity Asset Store', icon: 'tabler:brand-unity', href: 'https://assetstore.unity.com/publishers/103935' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCKGnHCi46kx8paafFJvj3Lg' },
    { ariaLabel: 'Itch', icon: 'tabler:brand-itch', href: 'https://parallel-cascades.itch.io/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/parallel-cascades' },
  ],
  footNote: `
    This website is built with the <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo/astrowind"> AstroWind</a> template.
  `,
};

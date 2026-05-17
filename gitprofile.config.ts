// gitprofile.config.ts

const CONFIG = {
    github: {
        username: 'MHashir09', // Your GitHub org/user name. (This is the only required config)
    },
    /**
     * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
     * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
     * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
     */
    base: '/Portfolio/',
    projects: {
        github: {
            display: true, // Display GitHub projects?
            header: 'Github Projects',
            mode: 'manual', // Mode can be: 'automatic' or 'manual'
            manual: {
                // Properties for manually specifying projects
                projects: ['TheCodeVerseHub/CodeVerseLinuxDistro', 'MHashir09/Meovim', 'MHashir09/Nekulator', 'MHashir09/Rofi-WebApps-Manager', 'MHashir09/MyniaBot', 'MHashir09/Otabodo', 'MHashir09/Pixa-san', 'MHashir09/Ragnarok-Form'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
            },
        },
   },
    seo: { title: 'Hashir | MHIA', description: 'Linux, FOSS and tech enthusiast', imageURL: 'https://avatars.githubusercontent.com/u/173710334?v=4' },
    social: {
        instagram: 'hashir.mhia',
        reddit: 'MHIATIC_MHIA',
        discord: 'hashir.mhia',
        website: 'https://www.arifszn.com',
        phone: '+92 336 4988771',
        email: 'hashiraamir@protonmail.com',
    },
    skills: [
        'JavaScript',
        'React.js',
        'Node.js',
        'MySQL',
        'Git',
        'CSS',
        'C',
        'Lua',
        'Bash',
        'Linux',
    ],
   educations: [
        {
            institution: 'Punjab Group Of Colleges',
            degree: 'Intermediate',
            from: '2026',
            to: 'Present',
        },
    ],
    themeConfig: {
        defaultTheme: 'lofi',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Display the ring in Profile picture
        displayAvatarRing: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'dim',
            'nord',
            'sunset',
            'caramellatte',
            'abyss',
            'silk',
            'procyon',
        ],
    },

    // Optional Footer. Supports plain text or HTML.
    footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

    enablePWA: true,
};

export default CONFIG;

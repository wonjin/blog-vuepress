module.exports = {
    title: "Wonjin's blog",
    description: '안녕하세요!',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: [
            '/',
            '/blog/'
        ]
    },
    base: '/',
    dest: 'public'
}
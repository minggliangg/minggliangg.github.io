/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `Posts`,
                path: `${__dirname}/src/posts/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Megrim`,
                    `Roboto Slab` // you can also specify font weights and styles
                    //`Roboto Slab\:300,400,400i,700` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },
        'gatsby-plugin-sass'
    ],
}

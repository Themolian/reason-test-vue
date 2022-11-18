module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/scss/external/reset.scss";
            @import "@/scss/external/normalize.scss";
            @import "@/scss/variables.scss";
            @import "@/scss/fonts.scss";
            @import "@/scss/buttons.scss";
            @import "@/scss/global/typography.scss";
            @import "@/scss/global/mobilenavigation.scss";
          `,
      },
    },
  },
};

export default {
  content: ["./public/**/*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0.625rem",
      },
    },

    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },

      boxShadow: {
        "shadow-normal": "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      letterSpacing: {
        tightest: "-0.065em",
      },

      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },

      backgroundImage: {
        "home-mobile": "url"(""),
        "home-desktop": "url"(""),
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      fontFamily: {
        dana: ["Dana", "sans-serif"],
        danaMedium: ["Dana Medium", "sans-serif"],
        danaDemiBold: ["Dana DemiBold", "sans-serif"],
        morabbaLight: ["Morabba Light", "sans-serif"],
        morabbaBold: ["Morabba Bold", "sans-serif"],
      },
    },
  },

  plugins: [],
};

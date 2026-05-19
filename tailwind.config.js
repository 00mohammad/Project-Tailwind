export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
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

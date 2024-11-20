tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      screens: {
        tsf: "375px",
        ftf: "425px",
      },
    },
  },
  plugins: [],
};

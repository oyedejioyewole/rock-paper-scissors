/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-l":
          "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "gradient-radial-at-r":
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: "'Barlow Semi Condensed', sans-serif",
      },
      colors: {
        "gradient-one": "hsl(214, 47%, 23%)",
        "gradient-two": "hsl(237, 49%, 15%)",
        "scoreboard-outline": "hsl(217, 16%, 45%)",
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
        "scissors-outline-one": "hsl(39, 89%, 49%)",
        "scissors-outline-two": "hsl(40, 84%, 53%)",
        "paper-outline-one": "hsl(230, 89%, 62%)",
        "paper-outline-two": "hsl(230, 89%, 65%)",
        "rock-outline-one": "hsl(349, 71%, 52%)",
        "rock-outline-two": "hsl(349, 70%, 56%)",
        "lizard-outline-one": "hsl(261, 73%, 60%)",
        "lizard-outline-two": "hsl(261, 72%, 63%)",
        "spock-outline-one": "hsl(189, 59%, 53%)",
        "spock-outline-two": "hsl(189, 58%, 57%)",
      },
    },
  },
  plugins: [],
};

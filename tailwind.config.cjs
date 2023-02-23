/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(ellipse at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      fontFamily: {
        sans: "'Barlow Semi Condensed', sans-serif",
      },
      colors: {
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
      boxShadow: {
        "triple-rounded":
          "0 0 0 75px hsl(214deg 47% 23% / 80%), 0 0 0 150px hsl(214deg 47% 23% / 60%), 0 0 0 225px hsl(214deg 47% 23% / 40%)",
        "triple-rounded-trimmed":
          "0 0 0 50px hsl(214deg 47% 23% / 80%), 0 0 0 90px hsl(214deg 47% 23% / 60%), 0 0 0 150px hsl(214deg 47% 23% / 40%)",
      },
    },
  },
  plugins: [],
};

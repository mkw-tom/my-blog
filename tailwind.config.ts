import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        'left-skew': 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
    },
  },
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  plugins: [    ({ addUtilities }: {addUtilities: any}) => {
    addUtilities({
      '.clip-left-skew': {
        clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
    });
  }, require("@tailwindcss/typography"),require('daisyui')],
  daisyui: {
    themes: ['black', 'lofi' ]
  },
};

export default config;

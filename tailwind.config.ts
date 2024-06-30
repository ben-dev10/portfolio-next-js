import type { Config } from "tailwindcss";
import { novelUIPlugin } from "./src/utils/lib/novel-ui-tw-plugin";
// import { shadcnPlugin } from "./src/utils/lib/shadcn-ui-tw-plugin";

const config: Config = {
  darkMode:["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { mini: "450px" },
      colors: {},
      fontSize: {
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
    
  plugins: [novelUIPlugin],
};
export default config;

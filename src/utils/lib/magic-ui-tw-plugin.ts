import plugin from "tailwindcss/plugin";

export const magicUIPlugin = plugin(
  function ({ addBase }) {
    addBase({});
  },
  {
    theme: {
      extend: {
        keyframes: {
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - var(--gap)))" },
          },
          "marquee-vertical": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--gap)))" },
          },
        },
        animation: {
          marquee: "marquee var(--duration) linear infinite",
          "marquee-vertical":
            "marquee-vertical var(--duration) linear infinite",
        },
      },
    },
  },
);

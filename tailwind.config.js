/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
      // screens: {
      //   sm: "340px",
      //   md: "540px",
      //   lg: "768px",
      //   xl: "1180px"
      // },
      extend: {
        colors: {
          "color-primary": "#181C5C",
          "color-secondary": "#F26619",
          "color-primary-dark": "#161a4f",
          "color-gray": "#333",
          "color-white": "#fff",
          "color-blob": "#A427DF",
        },
      },
      keyframes: {
        moveY: {
          "50%": { transform: "translateY(-1rem)" },
        },
        moveY2: {
          "50%": { transform: "translateY(-10rem)" },
        },
        moveX: {
          "50%": { transform: "translateX(-10rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg)" },
          // "100%": { transform: "rotateY(-90deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.8)" },
        },
        scaleUp2: {
          "0%": { transform: "scale(0.4)" },
          "50%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(0.4)" },
        }
      },
      animation: {
        movingY: "moveY 3s linear infinite",
        movingY2: "moveY2 8s linear infinite",
        movingX: "moveX 15s linear infinite",
        rotating: "rotate 15s linear infinite",
        rotatingY: "rotateY 15s linear infinite",
        scalingUp: "scaleUp 3s ease-in-out infinite",
        scalingUp2: "scaleUp2 3s ease-in-out infinite",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          md: "32px"
        }
      }
   },
  plugins: [],
}

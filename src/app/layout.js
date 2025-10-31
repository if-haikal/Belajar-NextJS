import "./globals.css";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { Header } from "./header";
import { Footer } from "./footer";
import { getSetting } from "./[queries]/getSetting";

// import localFont from "next/font/local";

const fontSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})


// const inter = localFont({
//   src: [
//     {
//       path: '../fonts/thin.ttf',
//       weight: '100',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/thinitalic.ttf',
//       weight: '100',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/extralight.ttf',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/extralightitalic.ttf',
//       weight: '200',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/light.ttf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/lightitalic.ttf',
//       weight: '300',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/mediumitalic.ttf',
//       weight: '500',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/semibold.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/semibolditalic.ttf',
//       weight: '600',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/bolditalic.ttf',
//       weight: '700',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/extrabold.ttf',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/extrabolditalic.ttf',
//       weight: '800',
//       style: 'italic',
//     },
//     {
//       path: '../fonts/black.ttf',
//       weight: '900',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/blackitalic.ttf',
//       weight: '900',
//       style: 'italic',
//     }
//   ]
// })

export async function generateMetadata() {
  const setting = await getSetting();

  return {
    title: {
      template: `%s | ${setting?.sitename}`,
      default: "Nexcent",
    },
    description: "Landing Page for Nexcent",
    icons: {
      icon: "/favicon.ico",
    }
  };
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className={`${fontSans.variable} ${fontMono.variable} font-sans`}>
        
        <Header />
        
        {children}

        <Footer />

      </body>
    </html>
  );
}

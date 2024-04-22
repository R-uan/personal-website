import type { Metadata } from "next";
import "./globals.css";

import { Bebas_Neue, JetBrains_Mono, Smooch_Sans } from "next/font/google";
import localFont from "next/font/local";

const Smooch = Smooch_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-smooch",
});

const Bebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas",
});

const JetBrains = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${Smooch.variable} ${Bebas.variable} ${JetBrains.variable}`}>
			{children}
		</html>
	);
}

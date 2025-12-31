import type { NextSeoProps } from "next-seo";

export const SEO: NextSeoProps = {
  title: "JSON Crack | オンラインJSONビューア - データをインタラクティブなグラフに変換",
  description:
    "JSON Crack Editorは、JSON、CSV、YAML、XMLなどのデータをグラフとして可視化、分析、編集、整形、クエリ実行、変換、検証するためのツールです。",
  themeColor: "#36393E",
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://jsoncrack.com/assets/jsoncrack.png",
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    handle: "@jsoncrack",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "48x48",
    },
  ],
};

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://dev-portfolio-one-swart.vercel.app//sitemap.xml",
  }
}
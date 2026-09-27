import type { NextConfig } from "next";
const securityHeaders=[{key:"X-Content-Type-Options",value:"nosniff"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},{key:"X-Frame-Options",value:"SAMEORIGIN"},{key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},{key:"Cross-Origin-Opener-Policy",value:"same-origin"}];
const nextConfig:NextConfig={poweredByHeader:false,compress:true,experimental:{globalNotFound:true},async headers(){return[{source:"/:path*",headers:securityHeaders},{source:"/sitemap.xml",headers:[{key:"Cache-Control",value:"public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"}]},{source:"/robots.txt",headers:[{key:"Cache-Control",value:"public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"}]}]}};
export default nextConfig;

// Vercel production trigger 2026-09-27

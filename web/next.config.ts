import type { NextConfig } from "next";
const securityHeaders=[{key:"X-Content-Type-Options",value:"nosniff"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},{key:"X-Frame-Options",value:"SAMEORIGIN"},{key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},{key:"Cross-Origin-Opener-Policy",value:"same-origin"}];
const legacyRedirects=[
 {source:"/index.html",destination:"/",permanent:true},
 {source:"/en/index.html",destination:"/en",permanent:true},
 {source:"/sq/sherbime/index.html",destination:"/sq/sherbime",permanent:true},
 {source:"/en/services/index.html",destination:"/en/services",permanent:true},
 {source:"/sq/projekte/index.html",destination:"/sq/projekte",permanent:true},
 {source:"/en/projects/index.html",destination:"/en/projects",permanent:true},
 {source:"/sq/kontakte/index.html",destination:"/sq/kontakte",permanent:true},
 {source:"/en/contact/index.html",destination:"/en/contact",permanent:true},
 {source:"/sq/rreth_nesh/index.html",destination:"/sq/rreth_nesh",permanent:true},
 {source:"/en/about/index.html",destination:"/en/about",permanent:true},
 {source:"/sq/akademia/index.html",destination:"/sq/akademia",permanent:true},
 {source:"/en/academy/index.html",destination:"/en/academy",permanent:true},
 {source:"/en/systems/index.html",destination:"/en/systems",permanent:true},
 {source:"/en/activities/index.html",destination:"/en/activities",permanent:true},
 {source:"/sq/privacy/index.html",destination:"/sq/privacy",permanent:true},
 {source:"/en/privacy/index.html",destination:"/en/privacy",permanent:true},
 {source:"/sq/termsofuse/index.html",destination:"/sq/termsofuse",permanent:true},
 {source:"/en/termsofuse/index.html",destination:"/en/termsofuse",permanent:true},
 {source:"/aktivitete-system.html",destination:"/aktiviteteASIG",permanent:true}
];
const legacySystemRewrites=[
 {source:"/aktiviteteASIG",destination:"/aktiviteteASIG/index.html"},
 {source:"/aktiviteteASIG/",destination:"/aktiviteteASIG/index.html"},
 {source:"/pagesat",destination:"/pagesat/index.html"},
 {source:"/pagesat/",destination:"/pagesat/index.html"},
 {source:"/pushimet",destination:"/pushimet/index.html"},
 {source:"/pushimet/",destination:"/pushimet/index.html"},
 {source:"/pyjetnezonatembrojtura",destination:"/pyjetnezonatembrojtura/index.html"},
 {source:"/pyjetnezonatembrojtura/",destination:"/pyjetnezonatembrojtura/index.html"},
 {source:"/raportASIG",destination:"/raportASIG/index.html"},
 {source:"/raportASIG/",destination:"/raportASIG/index.html"}
];
const nextConfig:NextConfig={poweredByHeader:false,compress:true,experimental:{globalNotFound:true},async redirects(){return legacyRedirects},async rewrites(){return legacySystemRewrites},async headers(){return[{source:"/:path*",headers:securityHeaders},{source:"/sitemap.xml",headers:[{key:"Cache-Control",value:"public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"}]},{source:"/robots.txt",headers:[{key:"Cache-Control",value:"public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"}]}]}};
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/**',
            },
            {
                hostname: 'encrypted-tbn0.gstatic.com'
            }, {
                hostname: "i.ytimg.com"
            },
            {
                hostname: "universidadeuropea.com"
            }, {
                hostname: "juan-fermin-dev.xyz"
            },
            {
                hostname: "www.bancaynegocios.com"
            }, {
                hostname: "static.wikia.nocookie.net"
            }
        ],
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['scontent.fabv3-2.fna.fbcdn.net', 'links.papareact.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    
}

module.exports = nextConfig

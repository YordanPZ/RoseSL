/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com','images.unsplash.com'],
    },
    async headers() {
        return [
        {
            source: '/(.*)',
            headers: [
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
            },
            ],
        },
        ];
    },
};

export default nextConfig;

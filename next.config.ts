import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'old-images.hb.ru-msk.vkcs.cloud',
                port: '',
                pathname: '**',
            }]
    },
    webpack(config){
        config.module.rules.push({
          test: /\.svg$/,
          use: [{loader: '@svgr/webpack', options: {icon: true}}]
        })
        return config
    }
};

export default nextConfig;

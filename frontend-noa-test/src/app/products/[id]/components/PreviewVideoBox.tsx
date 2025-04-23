'use client';

import React from 'react';

interface YouTubeEmbedProps {
    url: string;
}

export const PreviewVideo = ({ url }: YouTubeEmbedProps) => {
    return (
        <div className={"aspect-video w-full"}>
            <iframe
                src={url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
    );
};
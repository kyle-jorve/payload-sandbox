import type { CollectionConfig } from "payload";

// import {
//     FixedToolbarFeature,
//     InlineToolbarFeature,
//     lexicalEditor,
// } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
    slug: "media",
    folders: true,
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
        // {
        //     name: "caption",
        //     type: "richText",
        //     editor: lexicalEditor({
        //         features: ({ rootFeatures }) => {
        //             return [
        //                 ...rootFeatures,
        //                 FixedToolbarFeature(),
        //                 InlineToolbarFeature(),
        //             ];
        //         },
        //     }),
        // },
    ],
    upload: {
        // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
        staticDir: path.resolve(dirname, "../../public/media"),
        adminThumbnail: "thumbnail",
        focalPoint: true,
        imageSizes: [
            {
                name: "thumbnail",
                width: 320,
            },
            {
                name: "mobile-small",
                width: 480,
            },
            {
                name: "mobile-medium",
                width: 512,
            },
            {
                name: "mobile-large",
                width: 640,
            },
            {
                name: "tablet-small",
                width: 720,
            },
            {
                name: "tablet-medium",
                width: 768,
            },
            {
                name: "tablet-large",
                width: 960,
            },
            {
                name: "desktop-small",
                width: 1024,
            },
            {
                name: "desktop-medium",
                width: 1440,
            },
            {
                name: "desktop-large",
                width: 1920,
            },
        ],
    },
};

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
                name: "mobile_small",
                width: 480,
            },
            {
                name: "mobile_medium",
                width: 512,
            },
            {
                name: "mobile_large",
                width: 640,
            },
            {
                name: "tablet_small",
                width: 720,
            },
            {
                name: "tablet_medium",
                width: 768,
            },
            {
                name: "tablet_large",
                width: 960,
            },
            {
                name: "desktop_small",
                width: 1024,
            },
            {
                name: "desktop_medium",
                width: 1440,
            },
            {
                name: "desktop_large",
                width: 1920,
            },
        ],
    },
};

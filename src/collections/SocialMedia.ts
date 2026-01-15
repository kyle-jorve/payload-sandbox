import type { CollectionConfig } from "payload";

import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { link } from "@/fields/link";

export const SocialMedia: CollectionConfig = {
    slug: "socialMedia",
    labels: {
        singular: "Social Media",
        plural: "Social Media",
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
    },
    admin: {
        useAsTitle: "service",
    },
    fields: [
        {
            name: "service",
            type: "select",
            options: [
                {
                    label: "Instagram",
                    value: "instagram",
                },
                {
                    label: "Bluesky",
                    value: "bluesky",
                },
                {
                    label: "LinkedIn",
                    value: "linkedin",
                },
                {
                    label: "GitHub",
                    value: "github",
                },
                {
                    label: "YouTube",
                    value: "youtube",
                },
                {
                    label: "Email",
                    value: "email",
                },
                {
                    label: "Print Shop",
                    value: "print-shop",
                },
                {
                    label: "Digital Shop",
                    value: "digital-shop",
                },
            ],
        },
        link({
            appearances: false,
        }),
    ],
};

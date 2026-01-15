import type { CollectionSlug, GlobalConfig } from "payload";

import { revalidateFooter } from "./hooks/revalidateFooter";

export const Footer: GlobalConfig = {
    slug: "footer",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "social",
            type: "relationship",
            relationTo: "socialMedia" as CollectionSlug,
        },
    ],
    hooks: {
        afterChange: [revalidateFooter],
    },
};

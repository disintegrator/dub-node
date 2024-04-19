/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of redirect to use for this domain.
 */
export const Type = {
    Redirect: "redirect",
    Rewrite: "rewrite",
} as const;
/**
 * The type of redirect to use for this domain.
 */
export type Type = (typeof Type)[keyof typeof Type];

export type AddDomainRequestBody = {
    /**
     * Name of the domain.
     */
    slug: string;
    /**
     * The type of redirect to use for this domain.
     */
    type?: Type | undefined;
    /**
     * The page your users will get redirected to when they visit your domain.
     */
    target?: string | null | undefined;
    /**
     * Redirect users to a specific URL when any link under this domain has expired.
     */
    expiredUrl?: string | null | undefined;
    /**
     * Whether to archive this domain. `false` will unarchive a previously archived domain.
     */
    archived?: boolean | undefined;
    /**
     * Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened.
     */
    placeholder?: string | null | undefined;
};

/**
 * The type of redirect to use for this domain.
 */
export const AddDomainType = {
    Redirect: "redirect",
    Rewrite: "rewrite",
} as const;
/**
 * The type of redirect to use for this domain.
 */
export type AddDomainType = (typeof AddDomainType)[keyof typeof AddDomainType];

/**
 * The domain was added.
 */
export type AddDomainResponseBody = {
    /**
     * The domain name.
     */
    slug: string;
    /**
     * Whether the domain is verified.
     */
    verified?: boolean | undefined;
    /**
     * Whether the domain is the primary domain for the workspace.
     */
    primary?: boolean | undefined;
    /**
     * Whether the domain is archived.
     */
    archived?: boolean | undefined;
    /**
     * Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened.
     */
    placeholder?: string | undefined;
    /**
     * The URL to redirect to when a link under this domain has expired.
     */
    expiredUrl: string | null;
    /**
     * The page your users will get redirected to when they visit your domain.
     */
    target: string | null;
    /**
     * The type of redirect to use for this domain.
     */
    type: AddDomainType;
    /**
     * The number of clicks on the domain.
     */
    clicks?: number | undefined;
};

/** @internal */
export const Type$: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export namespace AddDomainRequestBody$ {
    export type Inbound = {
        slug: string;
        type?: Type | undefined;
        target?: string | null | undefined;
        expiredUrl?: string | null | undefined;
        archived?: boolean | undefined;
        placeholder?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<AddDomainRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            slug: z.string(),
            type: Type$.default("redirect"),
            target: z.nullable(z.string()).optional(),
            expiredUrl: z.nullable(z.string()).optional(),
            archived: z.boolean().default(false),
            placeholder: z.nullable(z.string().default("https://dub.co/help/article/what-is-dub")),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                type: v.type,
                ...(v.target === undefined ? null : { target: v.target }),
                ...(v.expiredUrl === undefined ? null : { expiredUrl: v.expiredUrl }),
                archived: v.archived,
                placeholder: v.placeholder,
            };
        });

    export type Outbound = {
        slug: string;
        type: Type;
        target?: string | null | undefined;
        expiredUrl?: string | null | undefined;
        archived: boolean;
        placeholder: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDomainRequestBody> = z
        .object({
            slug: z.string(),
            type: Type$.default("redirect"),
            target: z.nullable(z.string()).optional(),
            expiredUrl: z.nullable(z.string()).optional(),
            archived: z.boolean().default(false),
            placeholder: z.nullable(z.string().default("https://dub.co/help/article/what-is-dub")),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                type: v.type,
                ...(v.target === undefined ? null : { target: v.target }),
                ...(v.expiredUrl === undefined ? null : { expiredUrl: v.expiredUrl }),
                archived: v.archived,
                placeholder: v.placeholder,
            };
        });
}

/** @internal */
export const AddDomainType$: z.ZodNativeEnum<typeof AddDomainType> = z.nativeEnum(AddDomainType);

/** @internal */
export namespace AddDomainResponseBody$ {
    export type Inbound = {
        slug: string;
        verified?: boolean | undefined;
        primary?: boolean | undefined;
        archived?: boolean | undefined;
        placeholder?: string | undefined;
        expiredUrl: string | null;
        target: string | null;
        type: AddDomainType;
        clicks?: number | undefined;
    };

    export const inboundSchema: z.ZodType<AddDomainResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            slug: z.string(),
            verified: z.boolean().default(false),
            primary: z.boolean().default(false),
            archived: z.boolean().default(false),
            placeholder: z.string().default("https://dub.co/help/article/what-is-dub"),
            expiredUrl: z.nullable(z.string()),
            target: z.nullable(z.string()),
            type: AddDomainType$,
            clicks: z.number().default(0),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                verified: v.verified,
                primary: v.primary,
                archived: v.archived,
                placeholder: v.placeholder,
                expiredUrl: v.expiredUrl,
                target: v.target,
                type: v.type,
                clicks: v.clicks,
            };
        });

    export type Outbound = {
        slug: string;
        verified: boolean;
        primary: boolean;
        archived: boolean;
        placeholder: string;
        expiredUrl: string | null;
        target: string | null;
        type: AddDomainType;
        clicks: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDomainResponseBody> = z
        .object({
            slug: z.string(),
            verified: z.boolean().default(false),
            primary: z.boolean().default(false),
            archived: z.boolean().default(false),
            placeholder: z.string().default("https://dub.co/help/article/what-is-dub"),
            expiredUrl: z.nullable(z.string()),
            target: z.nullable(z.string()),
            type: AddDomainType$,
            clicks: z.number().default(0),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                verified: v.verified,
                primary: v.primary,
                archived: v.archived,
                placeholder: v.placeholder,
                expiredUrl: v.expiredUrl,
                target: v.target,
                type: v.type,
                clicks: v.clicks,
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as components from "../components";
import * as z from "zod";

/**
 * The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.
 */
export const GetReferersByClicksDeprecatedQueryParamInterval = {
    Oneh: "1h",
    TwentyFourh: "24h",
    Sevend: "7d",
    Thirtyd: "30d",
    Ninetyd: "90d",
    Ytd: "ytd",
    Oney: "1y",
    All: "all",
} as const;
/**
 * The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.
 */
export type GetReferersByClicksDeprecatedQueryParamInterval = ClosedEnum<
    typeof GetReferersByClicksDeprecatedQueryParamInterval
>;

export type GetReferersByClicksDeprecatedRequest = {
    /**
     * The domain to filter analytics for.
     */
    domain?: string | undefined;
    /**
     * The short link slug.
     */
    key?: string | undefined;
    /**
     * The unique ID of the short link on Dub.
     */
    linkId?: string | undefined;
    /**
     * This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.
     */
    externalId?: string | undefined;
    /**
     * The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.
     */
    interval?: GetReferersByClicksDeprecatedQueryParamInterval | undefined;
    /**
     * The start date and time when to retrieve analytics from.
     */
    start?: string | undefined;
    /**
     * The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
     */
    end?: string | undefined;
    /**
     * The country to retrieve analytics for.
     */
    country?: components.CountryCode | undefined;
    /**
     * The city to retrieve analytics for.
     */
    city?: string | undefined;
    /**
     * The device to retrieve analytics for.
     */
    device?: string | undefined;
    /**
     * The browser to retrieve analytics for.
     */
    browser?: string | undefined;
    /**
     * The OS to retrieve analytics for.
     */
    os?: string | undefined;
    /**
     * The referer to retrieve analytics for.
     */
    referer?: string | undefined;
    /**
     * The URL to retrieve analytics for.
     */
    url?: string | undefined;
    /**
     * The tag ID to retrieve analytics for.
     */
    tagId?: string | undefined;
    /**
     * Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both.
     */
    qr?: boolean | undefined;
    /**
     * Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.
     */
    root?: boolean | undefined;
};

export type GetReferersByClicksDeprecatedResponseBody = {
    /**
     * The name of the referer. If unknown, this will be `(direct)`
     */
    referer: string;
    /**
     * The number of clicks from this referer
     */
    clicks: number;
};

/** @internal */
export namespace GetReferersByClicksDeprecatedQueryParamInterval$ {
    export const inboundSchema = z.nativeEnum(GetReferersByClicksDeprecatedQueryParamInterval);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetReferersByClicksDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<
        GetReferersByClicksDeprecatedRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            linkId: z.string().optional(),
            externalId: z.string().optional(),
            interval: GetReferersByClicksDeprecatedQueryParamInterval$.inboundSchema.default("24h"),
            start: z.string().optional(),
            end: z.string().optional(),
            country: components.CountryCode$.inboundSchema.optional(),
            city: z.string().optional(),
            device: z.string().optional(),
            browser: z.string().optional(),
            os: z.string().optional(),
            referer: z.string().optional(),
            url: z.string().optional(),
            tagId: z.string().optional(),
            qr: z.boolean().optional(),
            root: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.linkId === undefined ? null : { linkId: v.linkId }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                interval: v.interval,
                ...(v.start === undefined ? null : { start: v.start }),
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.device === undefined ? null : { device: v.device }),
                ...(v.browser === undefined ? null : { browser: v.browser }),
                ...(v.os === undefined ? null : { os: v.os }),
                ...(v.referer === undefined ? null : { referer: v.referer }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.qr === undefined ? null : { qr: v.qr }),
                ...(v.root === undefined ? null : { root: v.root }),
            };
        });

    export type Outbound = {
        domain?: string | undefined;
        key?: string | undefined;
        linkId?: string | undefined;
        externalId?: string | undefined;
        interval: string;
        start?: string | undefined;
        end?: string | undefined;
        country?: string | undefined;
        city?: string | undefined;
        device?: string | undefined;
        browser?: string | undefined;
        os?: string | undefined;
        referer?: string | undefined;
        url?: string | undefined;
        tagId?: string | undefined;
        qr?: boolean | undefined;
        root?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetReferersByClicksDeprecatedRequest
    > = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            linkId: z.string().optional(),
            externalId: z.string().optional(),
            interval:
                GetReferersByClicksDeprecatedQueryParamInterval$.outboundSchema.default("24h"),
            start: z.string().optional(),
            end: z.string().optional(),
            country: components.CountryCode$.outboundSchema.optional(),
            city: z.string().optional(),
            device: z.string().optional(),
            browser: z.string().optional(),
            os: z.string().optional(),
            referer: z.string().optional(),
            url: z.string().optional(),
            tagId: z.string().optional(),
            qr: z.boolean().optional(),
            root: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.linkId === undefined ? null : { linkId: v.linkId }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                interval: v.interval,
                ...(v.start === undefined ? null : { start: v.start }),
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.device === undefined ? null : { device: v.device }),
                ...(v.browser === undefined ? null : { browser: v.browser }),
                ...(v.os === undefined ? null : { os: v.os }),
                ...(v.referer === undefined ? null : { referer: v.referer }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.qr === undefined ? null : { qr: v.qr }),
                ...(v.root === undefined ? null : { root: v.root }),
            };
        });
}

/** @internal */
export namespace GetReferersByClicksDeprecatedResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetReferersByClicksDeprecatedResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            referer: z.string(),
            clicks: z.number(),
        })
        .transform((v) => {
            return {
                referer: v.referer,
                clicks: v.clicks,
            };
        });

    export type Outbound = {
        referer: string;
        clicks: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetReferersByClicksDeprecatedResponseBody
    > = z
        .object({
            referer: z.string(),
            clicks: z.number(),
        })
        .transform((v) => {
            return {
                referer: v.referer,
                clicks: v.clicks,
            };
        });
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Dynamic configuration for custom brand service and theme styling.
 */
export interface ListingTheme {
  mode?: 'red' | 'dark' | 'blue' | 'custom' | string;
  primary?: string; // Hex color code (e.g. #D52B1E)
  accent?: string;  // Hex color code (e.g. #FFFFFF)
}

export interface ServiceProfile {
  name: string;
  logo_url: string;
  favicon_url?: string;
  theme?: ListingTheme;
}

/**
 * Dynamic configuration for product / service listing.
 */
export interface ListingData {
  title: string;
  image_url: string;
  price: string | number;
  currency: string; // e.g. "CHF" | "EUR"
  delivery_info: string;
  seller_contact: string;
}

/**
 * Root dynamic data model representing the listing and service profile.
 */
export interface ListingConfig {
  listing_id: string; // Opaque public identifier (e.g. "CH-8924-7710-PX")
  service: ServiceProfile;
  listing: ListingData;
}

/**
 * Client-side catalog analytics event names.
 */
export type AnalyticsEventType =
  | 'landing_opened'
  | 'delivery_info_viewed'
  | 'contact_clicked'
  | 'checkout_started';

/**
 * Safe analytics event payload sent to project backend.
 */
export interface AnalyticsEventPayload {
  event: AnalyticsEventType;
  listing_id: string;
  occurred_at: string; // ISO-8601 timestamp
  referrer?: string;
  metadata?: Record<string, unknown>;
}

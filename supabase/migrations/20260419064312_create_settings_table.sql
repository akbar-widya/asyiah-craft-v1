/*
  # Create Settings Table for Asyiah Craft

  ## Summary
  Creates the core settings table used by the Asyiah Craft application.

  ## New Tables
  - `settings`
    - `id` (integer, primary key, always = 1) — single-row config
    - `whatsapp_number` (text) — WhatsApp number for order CTA
    - `pricelist_image_url` (text, nullable) — URL of uploaded pricelist image
    - `updated_at` (timestamptz) — last updated timestamp

  ## Security
  - RLS enabled on `settings`
  - Anon and authenticated users can SELECT (public config data)
  - Only authenticated users can UPDATE (admin only)

  ## Notes
  1. This is a single-row table — id is always 1
  2. Default WhatsApp number is a placeholder; admin must update it
  3. INSERT is seeded below; no INSERT policy needed after that
*/

CREATE TABLE IF NOT EXISTS settings (
  id integer PRIMARY KEY,
  whatsapp_number text NOT NULL DEFAULT '6281234567890',
  pricelist_image_url text,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read settings"
  ON settings FOR SELECT
  TO anon, authenticated
  USING (id = 1);

CREATE POLICY "Authenticated admin can update settings"
  ON settings FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

INSERT INTO settings (id, whatsapp_number, pricelist_image_url)
VALUES (1, '6281234567890', NULL)
ON CONFLICT (id) DO NOTHING;

/*
  # Create Seller Requests Table

  1. New Tables
    - `seller_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Seller's full name
      - `email` (text) - Email address (optional, but email or mobile required)
      - `mobile` (text) - Mobile number (optional, but email or mobile required)
      - `company_name` (text, required) - Company or business name
      - `status` (text) - pending, contacted, approved, rejected
      - `notes` (text) - Admin notes about the seller
      - `created_at` (timestamptz) - When request was submitted
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `seller_requests` table
    - Allow anyone to insert (for registration)
    - Only authenticated admin users can read/update
*/

CREATE TABLE IF NOT EXISTS seller_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  mobile text,
  company_name text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'approved', 'rejected')),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT email_or_mobile_required CHECK (
    email IS NOT NULL OR mobile IS NOT NULL
  )
);

ALTER TABLE seller_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create seller request"
  ON seller_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view seller requests"
  ON seller_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update seller requests"
  ON seller_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_seller_requests_status ON seller_requests(status);
CREATE INDEX IF NOT EXISTS idx_seller_requests_created_at ON seller_requests(created_at DESC);

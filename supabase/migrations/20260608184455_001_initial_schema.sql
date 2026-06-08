-- Products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  image_url text NOT NULL,
  additional_images text[],
  category text NOT NULL,
  colors text[],
  rating decimal(3,2) DEFAULT 4.5,
  reviews_count integer DEFAULT 0,
  stock integer DEFAULT 10,
  badge text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Products policies (public read)
CREATE POLICY "products_select" ON products FOR SELECT
  TO public USING (true);

CREATE POLICY "products_insert" ON products FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "products_update" ON products FOR UPDATE
  TO authenticated USING (true);

-- Orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  shipping_address jsonb,
  items jsonb NOT NULL,
  total_amount decimal(10,2) NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_method text,
  payment_id text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Orders policies
CREATE POLICY "orders_insert" ON orders FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "orders_select_own" ON orders FOR SELECT
  TO authenticated USING (auth.email() = customer_email);

-- Custom order requests table
CREATE TABLE custom_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  occasion text NOT NULL,
  bangle_size text NOT NULL,
  preferred_colors text NOT NULL,
  quantity integer DEFAULT 1,
  reference_image_url text,
  special_instructions text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'completed', 'cancelled')),
  quote_amount decimal(10,2),
  admin_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE custom_orders ENABLE ROW LEVEL SECURITY;

-- Custom orders policies
CREATE POLICY "custom_orders_insert" ON custom_orders FOR INSERT
  TO public WITH CHECK (true);

CREATE POLICY "custom_orders_select_own" ON custom_orders FOR SELECT
  TO authenticated USING (auth.email() = email);

-- Contact messages table
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Contact messages policies
CREATE POLICY "contact_messages_insert" ON contact_messages FOR INSERT
  TO public WITH CHECK (true);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Newsletter policies
CREATE POLICY "newsletter_insert" ON newsletter_subscribers FOR INSERT
  TO public WITH CHECK (true);

-- Insert sample products
INSERT INTO products (name, description, price, original_price, image_url, category, colors, rating, reviews_count, badge, featured) VALUES
('Royal Maroon Silk Thread Bangles Set', 'Beautiful handcrafted bangles wrapped with premium silk threads', 1299, 1599, 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600', 'Silk Thread', ARRAY['#7a1f35', '#d4af37', '#e8a0bf'], 4.8, 124, 'Bestseller', true),
('Bridal Gold Pearl Bangles Collection', 'Premium bridal bangles with real pearls and gold finish', 2499, 2999, 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600', 'Bridal', ARRAY['#d4af37', '#fff8f0', '#7a1f35'], 4.9, 89, 'Premium', true),
('Designer Peacock Pattern Bangles', 'Stunning peacock-inspired designer bangles with intricate patterns', 1899, 2199, 'https://images.pexels.com/photos/2917733/pexels-photo-2917733.jpeg?auto=compress&cs=tinysrgb&w=600', 'Designer', ARRAY['#1a5276', '#7a1f35', '#d4af37'], 4.7, 67, 'New', false),
('Festive Pink Rose Bangles Set', 'Perfect festive collection bangles in beautiful pink tones', 999, 1299, 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600', 'Festive', ARRAY['#e8a0bf', '#7a1f35', '#fff8f0'], 4.6, 156, NULL, false),
('Traditional Red & Gold Bridal Set', 'Complete bridal set with traditional red and gold combination', 3999, 4599, 'https://images.pexels.com/photos/5625102/pexels-photo-5625102.jpeg?auto=compress&cs=tinysrgb&w=600', 'Bridal', ARRAY['#c0392b', '#d4af37', '#fff8f0'], 5.0, 45, 'Exclusive', true),
('Mandala Art Designer Bangles', 'Artistic mandala patterns on premium silk thread base', 1599, 1899, 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600', 'Designer', ARRAY['#8b5e3c', '#d4af37', '#e8a0bf'], 4.5, 78, NULL, false);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER custom_orders_updated_at BEFORE UPDATE ON custom_orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
-- Baking Beyond Boundaries - PostgreSQL Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USERS TABLE
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    phone VARCHAR(20),
    avatar_url VARCHAR(500),
    role VARCHAR(20) DEFAULT 'customer' CHECK (role IN ('customer', 'admin', 'staff')),
    is_verified BOOLEAN DEFAULT false,
    auth_provider VARCHAR(20) DEFAULT 'email' CHECK (auth_provider IN ('email', 'google', 'apple')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ADDRESSES TABLE
CREATE TABLE addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100) DEFAULT 'USA',
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CATEGORIES TABLE
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PRODUCTS TABLE
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2),
    image_url VARCHAR(500),
    gallery JSONB,
    is_available BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    is_seasonal BOOLEAN DEFAULT false,
    preparation_time VARCHAR(50),
    allergens TEXT[],
    nutrition_info JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CUSTOM ORDER TEMPLATES
CREATE TABLE custom_order_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    tier_options JSONB NOT NULL,
    flavor_options JSONB NOT NULL,
    filling_options JSONB NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL,
    price_per_tier DECIMAL(10, 2),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ORDERS TABLE
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'baking', 'decorating', 'ready', 'out_for_delivery', 'delivered', 'completed', 'cancelled')),
    order_type VARCHAR(20) DEFAULT 'standard' CHECK (order_type IN ('standard', 'custom')),
    subtotal DECIMAL(10, 2) NOT NULL,
    tax DECIMAL(10, 2) DEFAULT 0,
    delivery_fee DECIMAL(10, 2) DEFAULT 0,
    discount DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    delivery_address_id UUID REFERENCES addresses(id),
    delivery_notes TEXT,
    scheduled_date DATE,
    scheduled_time VARCHAR(20),
    payment_method VARCHAR(50),
    payment_status VARCHAR(30) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
    payment_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ORDER ITEMS TABLE
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),
    custom_order_data JSONB,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CUSTOM ORDER REQUESTS TABLE
CREATE TABLE custom_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id),
    user_id UUID REFERENCES users(id),
    size VARCHAR(50) NOT NULL,
    tiers INT NOT NULL DEFAULT 1,
    sponge_flavor VARCHAR(100) NOT NULL,
    filling VARCHAR(100),
    theme_description TEXT NOT NULL,
    reference_images JSONB,
    delivery_date DATE NOT NULL,
    delivery_time VARCHAR(20),
    delivery_method VARCHAR(20) DEFAULT 'pickup' CHECK (delivery_method IN ('pickup', 'delivery')),
    delivery_address VARCHAR(500),
    estimated_price DECIMAL(10, 2),
    final_price DECIMAL(10, 2),
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'quoted', 'accepted', 'confirmed', 'in_progress', 'ready', 'completed', 'cancelled', 'rejected')),
    admin_notes TEXT,
    quoted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- REVIEWS/TESTIMONIALS TABLE
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    product_id UUID REFERENCES products(id),
    order_id UUID REFERENCES orders(id),
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(200),
    comment TEXT,
    is_approved BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LOYALTY POINTS TABLE
CREATE TABLE loyalty_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) UNIQUE,
    points_balance INT DEFAULT 0,
    lifetime_points INT DEFAULT 0,
    tier VARCHAR(20) DEFAULT 'bronze' CHECK (tier IN ('bronze', 'silver', 'gold', 'platinum')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LOYALTY TRANSACTIONS TABLE
CREATE TABLE loyalty_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    loyalty_account_id UUID REFERENCES loyalty_accounts(id),
    points INT NOT NULL,
    transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('earn', 'redeem', 'expire', 'bonus')),
    description VARCHAR(255),
    order_id UUID REFERENCES orders(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- COUPONS/PROMOTIONS TABLE
CREATE TABLE coupons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
    discount_value DECIMAL(10, 2) NOT NULL,
    min_order_amount DECIMAL(10, 2),
    max_uses INT,
    uses_count INT DEFAULT 0,
    valid_from TIMESTAMP,
    valid_until TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INVENTORY TABLE (for tracking stock)
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ingredient_name VARCHAR(200) NOT NULL,
    current_stock DECIMAL(10, 2),
    unit VARCHAR(50),
    min_threshold DECIMAL(10, 2),
    last_restocked TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ADMIN NOTES TABLE
CREATE TABLE order_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    admin_user_id UUID REFERENCES users(id),
    note TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_available ON products(is_available);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_date ON orders(created_at);
CREATE INDEX idx_custom_orders_status ON custom_orders(status);
CREATE INDEX idx_reviews_product ON reviews(product_id);
CREATE INDEX idx_reviews_approved ON reviews(is_approved);

-- Insert default categories
INSERT INTO categories (name, slug, description, display_order) VALUES
('Custom Cakes', 'custom-cakes', 'Handcrafted custom cakes for any occasion', 1),
('Cupcakes', 'cupcakes', 'Delicious individual cupcakes', 2),
('Pastries', 'pastries', 'Freshly baked pastries and treats', 3),
('Festive Specials', 'festive-specials', 'Seasonal and holiday specials', 4),
('Cookies', 'cookies', 'Artisanal cookies and biscuits', 5),
('Breads', 'breads', 'Fresh baked breads and loaves', 6);

-- Insert default custom order template
INSERT INTO custom_order_templates (name, tier_options, flavor_options, filling_options, base_price, price_per_tier) VALUES
('Standard Custom Cake',
 '{"sizes": [{"label": "6 inch", "serves": 6}, {"label": "8 inch", "serves": 10}, {"label": "10 inch", "serves": 15}, {"label": "12 inch", "serves": 20}]}',
 '{"flavors": ["Vanilla", "Chocolate", "Red Velvet", "Lemon", "Carrot", "Strawberry", "Banana", "Marble", "Coffee", "Almond"]}',
 '{"fillings": ["Buttercream", "Chocolate Ganache", "Cream Cheese", "Fruit Jam", "Caramel", "Whipped Cream", "Ricotta"]}',
 50.00,
 25.00);
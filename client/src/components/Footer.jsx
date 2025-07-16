import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage:
          "url('//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/grocery-footer-bg.png?v=1709880367')",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Logo Info */}
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
            <a href="/" className="block mb-4 max-w-[120px]">
              <img
                src="//dc7wn4wtm4nbrqdv-72849948973.shopifypreview.com/cdn/shop/files/logo-16.png?v=1709266136&width=500"
                alt="Logo"
                className="w-full"
              />
            </a>
            <p className="text-gray-600 text-sm mt-6">
              Lorem Ipsum simply dummy text of the printing typese.
            </p>
            <p className="text-gray-600 text-sm mt-2">© 2025 by spacingtech</p>
          </div>

          {/* Menu Lists */}
          <FooterList
            title="My account"
            links={[
              { label: "My account", href: "/account" },
              { label: "My cart", href: "/cart" },
              { label: "Wishlist", href: "/pages/wishlist" },
              { label: "Order history", href: "/account" },
              { label: "Return policy", href: "/pages/return-policy" },
            ]}
          />

          <FooterList
            title="Our legal"
            links={[
              { label: "Terms & condition", href: "/pages/terms-condition" },
              { label: "Accessibility", href: "/pages/contact-us-02" },
              { label: "About us", href: "/pages/about-us" },
              { label: "Track order", href: "/account" },
              { label: "Store location", href: "/pages/store-location" },
            ]}
          />

          <FooterList
            title="Information"
            links={[
              { label: "Our story", href: "/pages/about-us" },
              { label: "Keep in touch", href: "/pages/contact-us-02" },
              { label: "Privacy policy", href: "/pages/privacy-policy" },
              { label: "Refund policy", href: "/pages/return-policy" },
              { label: "Faq's", href: "/pages/faqs" },
            ]}
          />

          <FooterList
            title="Contact us"
            links={[
              { label: "+1234 567 890", href: "tel:+1234567890" },
              { label: "info@domain.com", href: "mailto:info@domain.com" },
              { label: "401 BROADWAY, 24TH FLOOR,", href: "#" },
              { label: "ORCHARD VIEW, LONDON, UK", href: "#" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

const FooterList = ({ title, links }) => (
  <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
    <h2 className="text-lg font-semibold text-neutral-800 mb-4">{title}</h2>
    <ul>
      {links.map((link, idx) => (
        <li key={idx} className="mb-2">
          {link.href.startsWith("#") || link.href === "#" ? (
            <span className="text-gray-600 text-sm">{link.label}</span>
          ) : (
            <a
              href={link.href}
              className="text-gray-600 hover:text-orange-500 text-sm block"
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
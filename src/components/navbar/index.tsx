"use client";

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import Container from "../container";
import "antd/dist/reset.css";

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/yonalishlar", label: "Yo'nalishlar" },
  { to: "/yangiliklar", label: "Yangiliklar" },
  { to: "/videolar", label: "Videolar" },
  { to: "/aloqa", label: "Biz bilan bog'lanish" },
];

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 bg-[#01434F] ${
        isScrolled ? "shadow-lg py-3 py-[30px]" : "py-[40px]"
      }`}
    >
      <Container className="container mx-auto flex items-center justify-between px-6 transition-all duration-300 text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-cormorant text-cormorantSmall">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-kulrang transition duration-200 ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden p-2 text-white hover:bg-white/10"
          type="text"
          icon={<MenuOutlined className="text-white text-2xl" />}
          onClick={() => setIsDrawerOpen(true)}
        />

        {/* Mobile Drawer Menu */}
        <Drawer
          title=""
          placement="right"
          onClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
          styles={{
            body: { backgroundColor: "#01434F" }, // Green background
            header: { backgroundColor: "#01434F", color: "white" },
            // closeIcon: { color: "white" },
          }}
        >
          <nav className="flex flex-col space-y-6 sm:text-cormorantSmall">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsDrawerOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md transition ${
                    isActive ? "text-yellow-500 font-bold" : "text-white hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </Drawer>
      </Container>
    </header>
  );
};

export default Navbar;
'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Expeditions', href: '/expeditions' },
  { label: 'Films', href: '/films' },
  { label: 'Guiding', href: '/guiding' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" className={`${styles.appBar} ${scrolled ? styles.scrolled : ''}`}>
        <Toolbar className={styles.toolbar}>
          <Link href="/" className={styles.logoLink}>
            <Typography variant="h5" component="div" className={styles.logo}>
              Caro North
            </Typography>
          </Link>

          <Box className={styles.rightSection}>
            {/* Desktop Navigation */}
            <Box className={`${styles.desktopNav} ${scrolled ? styles.show : ''}`}>
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={styles.navLink}>
                  <Button color="inherit" className={styles.navButton}>
                    {item.label}
                  </Button>
                </Link>
              ))}

              {/* Language Selector - Shows on scroll */}
              <LanguageSelector />
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className={`${styles.menuButton} ${scrolled ? styles.show : ''}`}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className={styles.drawer}
      >
        <Box className={styles.drawerContent}>
          <IconButton
            onClick={handleDrawerToggle}
            className={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>

          {/* Language Selector in Mobile Menu */}
          <Box className={styles.drawerLanguage}>
            <LanguageSelector />
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <Link href={item.href} className={styles.drawerLink}>
                  <ListItemButton onClick={handleDrawerToggle}>
                    <ListItemText
                      primary={item.label}
                      className={styles.drawerItemText}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

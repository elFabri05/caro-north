'use client';

import { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import styles from './LanguageSelector.module.css';

type Language = 'en' | 'de' | 'fr';

export default function LanguageSelector() {
  const [language, setLanguage] = useState<Language>('en');

  const handleChange = (event: any) => {
    setLanguage(event.target.value as Language);
    // Here you can add logic to change the language throughout the app
    console.log('Language changed to:', event.target.value);
  };

  return (
    <FormControl className={styles.languageSelector}>
      <Select
        value={language}
        onChange={handleChange}
        className={styles.select}
        IconComponent={() => null}
        startAdornment={<LanguageIcon className={styles.icon} />}
        sx={{
          color: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      >
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="de">DE</MenuItem>
        <MenuItem value="fr">FR</MenuItem>
      </Select>
    </FormControl>
  );
}

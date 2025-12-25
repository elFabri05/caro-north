'use client';

import { Select, MenuItem, FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import styles from './LanguageSelector.module.css';

type Language = 'en' | 'de' | 'fr';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: any) => {
    const newLocale = event.target.value as Language;

    // Replace the locale in the current pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <FormControl className={styles.languageSelector}>
      <Select
        value={locale}
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

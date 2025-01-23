'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './ToggleButtons.module.css';
import Image from 'next/image';

export default function ToggleButtons() {
  const [showSearch, setShowSearch] = React.useState(false);

  const handleDashboardClick = () => {
    setShowSearch((prev) => !prev); // 検索フォームの表示・非表示を切り替える
  };

  return (
    <main className={styles.main}>
      <div>
        <Stack spacing={2} direction="row" className={styles.stack}>
          <Button variant="outlined">About</Button>
          {/* ダッシュボードボタン */}
          <Button
            variant="contained"
            onClick={handleDashboardClick}
          >
            Work
          </Button>
          <Button variant="outlined">Contact</Button>
        </Stack>
      </div>

      {/* 検索フォームをここで条件付き表示 */}
      {showSearch && (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              renderInput={(params) => <TextField {...params} label="検索" />}
            />
          </Stack>
        </div>
      )}

      <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   flexDirection: 'column',
      //   height: '100vh',
      // }}
      >
        <Image
          src="/profile.png"
          alt="Profile Image"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
        <h1>湯元みこと</h1>
      </div>
      <h3>歴史とファンタジーが大好き<br></br>
        趣味は遺跡巡りと朝カフェ</h3>

        <Stack
        spacing={2}
        direction="row"
        className={styles.stack}
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

      </Stack>
    </main>
  );
}

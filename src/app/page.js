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

import Link from 'next/link';

//コンポーネント使用
import ButtonGroup from "../../components/ButtonGroup";
import ProfileSection from '../../components/ProfileSection';
import SocialIcons from "../../components/SocialIcons";

export default function ToggleButtons() {
  const [showSearch, setShowSearch] = React.useState(false);

  const handleDashboardClick = () => {
    setShowSearch((prev) => !prev); // 検索フォームの表示・非表示を切り替える
  };

  return (
    <main className={styles.main}>

      <div style={{ marginBottom: "20px" }}>
        <div className='topText'>
        <h1>Welcome to My Page</h1>
        </div>
        <ButtonGroup handleDashboardClick={handleDashboardClick} />
      </div>

      <ProfileSection ProfileSection={ProfileSection} />

      <SocialIcons SocialIcons={SocialIcons} />

    </main>
  );
}

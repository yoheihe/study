'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './ToggleButtons.module.css';


//コンポーネント使用
import ButtonGroup from "../../components/ButtonGroup";
import ProfileSection from '../../components/ProfileSectionGroup';
import SocialIcons from "../../components/SocialIconGroup";
import Sakura from '../../components/Sakura'

export default function ToggleButtons() {
  // const [showSearch, setShowSearch] = React.useState(false);

  // const handleDashboardClick = () => {
  //   setShowSearch((prev) => !prev); // 検索フォームの表示・非表示を切り替える
  // };

  return (
    <main className="main-global">
      <Sakura />

      <div className="top-container">
        <div className="topText">
          <h1>Welcome to My Page</h1>
        </div>
      </div>
      <ButtonGroup />

      <ProfileSection />

      <SocialIcons />

    </main>
  );
}

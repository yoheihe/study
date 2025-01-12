// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ToggleButtons() {
  return (
    <main>
      <div>
        こんにちは
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <FacebookIcon />
      </div>

    </main>
  );
}

import styles from "./index.module.scss"
import { Button, FormControlLabel, IconButton, Radio, RadioGroup, TextField } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CountrySelect from "src/components/CountrySelect";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useState } from "react";
import UserAvatar from "src/components/Avatar";

const ProfileNewView = () => {
  const [date, setDate] = useState<Date | null>(
    new Date('2000-01-01T00:00:00'),
  );

  const handleChangeDate = (newValue: Date | null) => {
    setDate(newValue);
  };

  return (
    <div className={styles.root}>
      
      <div className={styles.avatar}>
        <UserAvatar sx={{width: 76, height: 76, display: "inlineFlex"}}/>
        <label htmlFor="icon-button-file" className={styles.avatarEdit}>
          <input accept="image/*" id="icon-button-file" type="file" hidden/>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCameraIcon sx={{ color: "white" }} />
          </IconButton>
        </label>
      </div>

      <label className={styles.subtitle}>ユーザーネーム</label>
      <TextField
        fullWidth 
        placeholder="山田 太郎" 
        size="small" 
        variant="standard"
      />

      <label className={styles.subtitle}>性別</label>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        className={styles.radio}
      >
        <FormControlLabel value="male" control={<Radio size="small" />} label="男性" />
        <FormControlLabel value="female" control={<Radio size="small" />} label="女性" />
        <FormControlLabel value="other" control={<Radio size="small" />} label="その他" />
      </RadioGroup>

      <label className={styles.subtitle}>出身国</label>
      <CountrySelect />

      <label className={styles.subtitle}>誕生日</label>
      <MobileDatePicker
        inputFormat="yyyy / MM / dd"
        value={date}
        onChange={handleChangeDate}
        renderInput={(params) => <TextField variant="standard" placeholder="2000/01/01" fullWidth {...params} />}
      />
      
      <Button variant="contained" className={styles.btn} disabled>
        保存する
      </Button> 
    </div>
  );
};

export default ProfileNewView;

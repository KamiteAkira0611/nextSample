import styles from "./index.module.scss"
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import CountrySelect from "src/components/CountrySelect";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useState } from "react";

const ProfileNewView = () => {
  const [date, setDate] = useState<Date | null>(
    new Date('2000-01-01T00:00:00'),
  );

  const handleChangeDate = (newValue: Date | null) => {
    setDate(newValue);
  };

  return (
    <div className={styles.root}>
      <h2>アカウント新規登録</h2>

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

    </div>
  );
};

export default ProfileNewView;

import { useTheme } from "@emotion/react";
import { Avatar } from "@mui/material";

type Props = {
  name?: string
  src?: ImageUrl
  sx?: any
  className?: string
}

const UserAvatar = (props: Props) => {
  const theme = useTheme() as any
  const primaryColor = theme.palette.primary.main

  if(props.src){
    return <Avatar 
      sx={{...props.sx, bgcolor: primaryColor }}
      src={props.src}
    />;
  }

  if(props.name){
    return <Avatar sx={{
      ...props.sx,
      bgcolor: primaryColor,
      children: props.name[0],
    }} />;
  }

  return <Avatar sx={{ 
    ...props.sx,
    bgcolor: primaryColor 
  }} />;
};

export default UserAvatar;

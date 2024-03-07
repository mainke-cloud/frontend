import { Button, Stack, Typography } from "@mui/material";


const Mail_Button = ({bgColor, textColor, text, subText, image}) => {
    return (
        <Button variant='contained' disableElevation sx={{backgroundColor: bgColor, padding: "10px"}}>
            <img src={image} style={{marginRight: "8px"}} />
            <Stack alignItems="flex-start">
                <Typography variant='h3' sx={{color: textColor}}>{text}</Typography>
                <Typography variant="body1" sx={{color: textColor}}>{subText}</Typography>
            </Stack>
        </Button>
    )
}

export default Mail_Button;
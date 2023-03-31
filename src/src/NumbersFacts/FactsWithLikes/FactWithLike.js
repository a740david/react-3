import { Button, IconButton, Stack } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function FactWithLike(props) {

    // const [isDisabled, setDisabled] = useState(false);
  
    // const [inputValue, setInputValue] = useState('');

    const [clickValue, setClickValue] = useState(null);
    const [disableButton, setDisableButton] = useState(false);

    
    

    return(
        <Stack direction="row" spacing={2} alignItems='center'>
            <p style={{margin: 0}}>{props.factText}</p>
            
            <IconButton 
               
                color="primary" variant="outlined"
                // disabled={isDisabled}
                disabled={disableButton}
                // onClick={props.onLikedNumber(Number(props.factText.split(' ')[0]))}
                onClick={() => {
                    console.log("inside onClick in LikeButton")
                    const num = Number(props.factText.split(' ')[0])
                    setClickValue(num)

                    if(clickValue===num)
                    {
                      setDisableButton(true)
                    } 
                   
                    
                    // setDisabled(true)
                   
                    
                    console.log('calling props.onLikedNumber wxith ', num)
                    
                    props.onLikedNumber(num)
                    
                    }
                }>
                
                <ThumbUpAltIcon />
            </IconButton>
            
        </Stack>
        
    )
}

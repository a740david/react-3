import { Box, Button, LinearProgress, Stack } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";
import FactWithLike from "./FactWithLike";


import LikedList from "./LikedList";

export default function NumbersFactsLiked(props) {

    console.log("Rendering NumbersFactsLiked with props", props)


    const [factData, setFactData] = useState({
        text: null,
        loading: false
    })
    const [likedNumbers, setLikedNumbers] = useState([])

    // const [text, setText] = useState('')

<<<<<<< HEAD
    
=======
    // const [text, setText] = useState('')


>>>>>>> origin/main
    const getFact = () => {
        
        // set loading to true
        // important to update the whole objects, not parts of it!
        // DON'T DO THIS:
        // factData.loading = true
        // or this:
        // setFactData({loading: true})
       
        setFactData({...factData, loading: true})
        
        axios.get('http://numbersapi.com/random/math')
        .then((responseData) => {
            console.log('Received a new fact:', responseData)
          

            setFactData({
                text: responseData.data,
                loading: false
            })
        })
    }


    const handleLikedNumber = (number) => {

        console.log('inside handleLikedNumber with ', number, 'in NumberFacts component')
<<<<<<< HEAD
        
=======

>>>>>>> origin/main
        // updating an array - need to create a copy and add anew element to it
        // make sure not to mutate the array, but to copy one!
        // DON't do this!!!
        // likedNumbers.push([number])
        // setLikedNumbers([...likedNumbers])
        
        // https://beta.reactjs.org/learn/updating-arrays-in-state
        const newArray = [...likedNumbers, number]
        newArray.splice(number, 1);
        setLikedNumbers(newArray)
<<<<<<< HEAD
        
=======

>>>>>>> origin/main
        // setLikedNumbers([...likedNumbers, number])


    }
    

    return(
        <Box
            sx={{
                width: '50%',
                margin: 'auto',
                marginTop: '1em'
            }}
        >

            <h5 align="center">
                Welcome to Numbers Facts!
            </h5>


            <Stack spacing={2} marginY='2rem'>
                <Button  variant="contained"  onClick={getFact}>GET INTERESTING FACT!</Button>
            </Stack>


            {/* {factData.loading &&
                <LinearProgress />
            } */}
            {/* <LinearProgress style ={{visibility: factData.loading ? 'visible' : 'hidden' }}/> */}
            <LinearProgress hidden={!factData.loading}/>


            {factData.text &&
                <FactWithLike factText={factData.text}  onLikedNumber={handleLikedNumber}/>
            }


            {likedNumbers.length > 0 && 
                <Stack spacing={2} marginY='1em'>
                    <hr />
                    <h5>
                        Numbers you liked:
                    </h5>
                    <LikedList factText={factData.text}  onRemove={handleLikedNumber}   numbers={likedNumbers}/>
                </Stack>
            }

        </Box>
    )
}
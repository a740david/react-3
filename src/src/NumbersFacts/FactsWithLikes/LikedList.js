import { Stack } from "@mui/material"
import LikedItem from "./LikedItem"

export default function LikedList(props) {

    const items = props.numbers.map(
        (num,index) => <LikedItem factData={props.factText} index={index} key={index} number={num}  onRemove={() => props.onRemove(index)} />
    )

    return(
        <Stack  direction="row" spacing={1}>
           
            {items}
        </Stack>
    )
}
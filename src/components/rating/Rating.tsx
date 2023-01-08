import React, {useState} from "react";


// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function Rating() {
    let [rate, setRate] = useState(0)

    return (
        <div>
            <Star selected={rate >= 1}/>
            <button onClick={() => {
                setRate(1)
            }}>1
            </button>
            <Star selected={rate >= 2}/>
            <button onClick={() => {
                setRate(2)
            }}>2
            </button>
            <Star selected={rate >= 3}/>
            <button onClick={() => {
                setRate(3)
            }}>3
            </button>
            <Star selected={rate >= 4}/>
            <button onClick={() => {
                setRate(4)
            }}>4
            </button>
            <Star selected={rate >= 5}/>
            <button onClick={() => {
                setRate(5)
            }}>5
            </button>


        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star is rendering");

    if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}
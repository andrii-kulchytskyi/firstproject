import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, RatingPropsValueType} from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}


export const A = () => {
    let [rating, setRating] = useState<RatingPropsValueType>(1);

    return (
        <Rating selected={false} value={rating} onClick={setRating}/>
    )
}
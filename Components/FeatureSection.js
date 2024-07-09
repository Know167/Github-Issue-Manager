import React from 'react'

import ContentPart from './ContentPart';
import ImagePart from './ImagePart';


const FeatureSection = (props) => {
    return props.direction == "left" ? (
        <>
            <ContentPart {...props} />
            <ImagePart {...props} />
        </>
    ) : (
        <>
            <ImagePart {...props} />
            <ContentPart {...props} />
        </>
    );
   
}

export default FeatureSection; 

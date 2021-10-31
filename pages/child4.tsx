import React from 'react'

type DemoParams = {
    description: string; //関係性
}

export const Child4: React.FC<DemoParams> = props => {
    return (<li>{'私は' + props.description + 'です'}</li>)
}

export default Child4;
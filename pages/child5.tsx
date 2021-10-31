import React from 'react'

type Params = {
    description: string,
    gender: string;
}

export const Child5: React.FC<Params> = props => {
    return (
        <li>{'私は' + props.description + 'です。　性別は' + props.gender + 'です。'}</li>
    )
}

export default Child5;
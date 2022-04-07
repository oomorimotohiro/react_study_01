import React from 'react';

export type work = {
    description: string,
    gender: string;
}

export const Child6: React.FC<work> = p => {
    return(
        <li>{'私は' + p.description + 'です。性別は' + p.gender + 'です' }</li>
    )
}
export default  Child6;
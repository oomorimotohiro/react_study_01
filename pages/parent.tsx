import React from 'react'
import Child1 from './child1';
import Child2 from './child2';
import Child3 from './child3';
import Child4 from './child4';
import Child5 from './child5';
import {Child6, work} from './child6';

export const Parent: React.FC = () => {

    const param1: work = {
        description: '６男',
        gender: 'man',
    }


    /** レンダー部 */
    return (
        <>
            <span>{'私は親です'}</span>
            <ul>
                <Child1 />
                <Child2 />
                <Child3 />
                <Child4 description={'四男'} />
                <Child5 description={'五女'} gender={'female'} />
                <Child6 {...param1} />
            </ul>
        </>
    )
}

export default Parent;
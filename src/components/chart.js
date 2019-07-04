import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <div>
            <Sparklines
                data={props.data} width={360} height={240}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    )
}
import React from 'react'
import { ImSpinner2 } from 'react-icons/im'
import cn from 'classnames'

interface Props {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

function Spinner({ sm, md, lg }: Props) {

    const className = cn('animate-spin text-white-300 fill-white-300 mr-2', {
        "w-4 h-4": sm,
        "w-6 h-6": md,
        "w-8 h-8": lg,
    })
    
    return (
        <div role='status'>
            <ImSpinner2 className={className} />
            <span className="sr-only">
                Loading...
            </span>
        </div>
    )
}

export default Spinner
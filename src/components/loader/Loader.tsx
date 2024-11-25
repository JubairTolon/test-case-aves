import React from 'react'
import { PiSpinnerGap } from 'react-icons/pi'

export default function Loader() {
    return (
        <>
            <PiSpinnerGap className="animate-spin text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </>
    )
}
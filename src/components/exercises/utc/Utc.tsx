import React, { CSSProperties } from 'react'
import { useState, useEffect } from 'react'
import './Utc.css'
import remote from "../../../services/api"
import { utcToZonedTime, format } from 'date-fns-tz'
import CircleLoader from "react-spinners/CircleLoader"

function Utc() {
    const [timeNow, setTimeNow] = useState<string>('')
    const [localTime, setLocalTime] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const timeZone = 'America/Sao_Paulo';

    const override: CSSProperties = {
        position: "absolute",
    };

    async function showTime() {

        try {
            setLoading(true)
            const response = await remote.apiUtc.get('')

            const utc = response.data.currentDateTime
            const localTime = utcToZonedTime(new Date(utc), timeZone)

            const formatedLocalTime = format(new Date(String(localTime).replace('Z', '')), 'dd/MM/yyyy HH:mm:ss')
            const timeUtc = format(new Date(String(utc).replace('Z', '')), 'dd/MM/yyyy HH:mm:ss')

            setTimeNow(timeUtc)
            setLocalTime(formatedLocalTime)

            setLoading(false)

        } catch (error) {
            setLoading(false)
            alert('Get utc time error')
        }

    }

    return (
        <div className={'utc-body'}>
            <CircleLoader
                color={"#000"}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <h1>UTC And Local Time</h1>
            <p>UTC Time: {timeNow}</p>
            <p>Local Time: {localTime}</p>
            <button className='check_time_btn' onClick={showTime}>Get</button>
        </div>
    )

}

export default Utc
import { useEffect, useRef, useState } from "react"
import styles from './styles.module.css'
import { clsx } from "clsx"
import VideoPlayerActions from "./VideoPlayerActions"
import VideoDescription from "../VideoDescription/index"
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer (props) {
    const video = useRef(null)
    const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing
    })

    const { src } = props

    return (
        <div className={styles.wrapper}>
            <video 
                className={styles.video}
                autoPlay
                muted
                src={src}
                loop
                controls={false}
                ref={video}
                onClick={handlePlay}
            />

            <i className={playerClassName} onClick={handlePlay}></i>
            <VideoPlayerActions {...props} />
            <VideoDescription {...props} />    
        </div>

    )
}
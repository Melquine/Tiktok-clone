import { Comment } from "../Icons/Comment"
import { Heart } from "../Icons/Hart"
import { Share } from "../Icons/Share"
import styles from './styles.module.css'

const VideoPlayerActions = ({username, avatar, likes = 12450, comments = 120, shares = 592, harted = false}) => {

    const handleLike = () => {
        
    }

    const handleComment = () => {

    }

    const handleShare = () => {

    }

  return (
    <aside className={styles.actions}>

      <div className={styles.user}>
        <img alt={username} src={avatar} />
        <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
      </div>
   
            <button onClick={handleLike} className={styles.action}>
                <Heart width='45' />
                <span title="like">{likes}</span>
            </button>

            <button onClick={handleComment} className={styles.action}>
                <Comment width='45' />
                <span title="comments">{comments}</span>
            </button>

            <button onClick={handleShare} className={styles.action}>
                <Share width='45' />
                <span title="shares">{shares}</span>
            </button>

    </aside>
  )
}

export default VideoPlayerActions
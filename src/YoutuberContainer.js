const YoutuberContainer = (props) => {
    return (
        <div className="youtuber-item">
          <a 
            href={`https://www.youtube.com/${props.youtuber.youtuberId}`}
            target="_blank" rel='noreferrer'>
            <img 
            src={`/images/${props.youtuber.name}.jpg`} 
            alt={`프로필 이미지 ${props.youtuber.name}`}
            />
            <div className="youtuber-name">
              {props.youtuber.name}
            </div>
          </a>

          <pre className="youtuber-descript">
            {props.youtuber.descript}
          </pre>
        </div>
    )
  }

  export default YoutuberContainer
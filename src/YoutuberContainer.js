const YoutuberContainer = ({youtuber}) => {
    return (
        <div className="youtuber-item">
          <a 
            href={`https://www.youtube.com/${youtuber.youtuberId}`}
            target="_blank" rel='noreferrer'>
            <img 
            src={youtuber.url} 
            alt={`프로필 이미지 ${youtuber.name}`}
            />
            <div className="youtuber-name">
              {youtuber.name}
            </div>
          </a>

          <pre className="youtuber-descript">
            {youtuber.descript}
          </pre>
        </div>
    )
  }

  export default YoutuberContainer
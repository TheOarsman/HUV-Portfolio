function Project({
  deployedLink,
  thumbnail,
  demoType = "deployed",
  name,
  description,
  repoURL,
  repoLinkText = "GitHub Repository",
}) {
  return (
    <div className="job">
      <div className="job-info">
        <div className="job-img">
          <a href={deployedLink} target="_blank" rel="noreferrer">
            <figure>
              <img
                src={thumbnail}
                className="my-2"
                style={{ width: "100%" }}
                alt={name}
              />
              <figcaption className="img-description">
                {(() => {
                  switch (demoType) {
                    case "deployed":
                      return "Interactive Demo";
                    case "video":
                      return "Video Demonstration";
                    default:
                      return demoType;
                  }
                })()}
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="job-text">
          <h4>{name}</h4>
          <p>{description}</p>
          <br></br>
          <a href={repoURL} target="_blank" rel="noreferrer">
            {repoLinkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

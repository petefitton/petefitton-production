function useVideoSwitch(albumName) {
    switch(albumName) {
      case "The Starting of Something New":
        return (
          <>
            <h2>Videos</h2>
            <iframe title="The Starting of Something New on YouTube" src="https://youtube.com/embed/Dg4f5Yu9uUY?feature=shared" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </>
        );
      default:
        return (<></>);
    }
};

export default useVideoSwitch;
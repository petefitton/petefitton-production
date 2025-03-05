function useVideoSwitch(albumOrSongName) {
    switch(albumOrSongName) {
      case "The Starting of Something New":
        return (
          <iframe title="The Starting of Something New on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=2" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Refrain":
        return (
          <iframe title="Refrain on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      default:
        return (<></>);
    }
};

export default useVideoSwitch;
function useVideoSwitch(albumOrSongName) {
    switch(albumOrSongName) {
      case "Sunset|Sunrise":
        return (
          <iframe title="Sunset|Sunrise on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Sunset":
        return (
          <iframe title="Sunset on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Beyond":
        return (
          <iframe title="Beyond on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C&index=4" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Sown":
        return (
          <iframe title="Sown on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C&index=6" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Sunrise":
        return (
          <iframe title="Sunrise on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C&index=7" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Eternity":
        return (
          <iframe title="Eternity on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C&index=9" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Respond":
        return (
          <iframe title="Respond on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C&index=10" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Lava":
        return (
          <iframe title="Lava on YouTube" src="https://www.youtube.com/embed/?listTypeplaylist&list=PLTOeybonAABMu_pRFNIVvVIaMt93_zL-C&index=11" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Changing":
        return (
          <iframe title="Changing on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Atone":
        return (
          <iframe title="Atone on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=2" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Oceans":
        return (
          <iframe title="Oceans on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=3" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "Refrain":
        return (
          <iframe title="Refrain on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=4" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      case "The Starting of Something New":
        return (
          <iframe title="The Starting of Something New on YouTube" src="https://www.youtube.com/embed/?listType=playlist&list=PLTOeybonAABPE8l9Gbgf9QBSdIGjsHIRN&index=5" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      default:
        return (<></>);
    }
};

export default useVideoSwitch;
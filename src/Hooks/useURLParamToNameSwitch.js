function useURLParamToNameSwitch(songOrAlbumUrlParam) {
    switch(songOrAlbumUrlParam) {
      case "sunset-sunrise":
        return (
            "Sunset|Sunrise"
        );
      case "sunset":
        return (
            "Sunset"
        );
      case "beyond":
        return (
            "Beyond"
        );
      case "sown":
        return (
            "Sown"
        );
      case "sunrise":
        return (
            "Sunrise"
        );
      case "eternity":
        return (
            "Eternity"
        );
      case "respond":
        return (
            "Respond"
        );
      case "lava":
        return (
            "Lava"
        );
      case "changing":
        return (
            "Changing"
        );
      case "atone":
        return (
            "Atone"
        );
      case "oceans":
        return (
            "Oceans"
        );
      case "refrain":
        return (
            "Refrain"
        );
      case "the-starting-of-something-new":
        return (
            "The Starting of Something New"
        );
    default:
        return (<></>);
    }
}
  
export default useURLParamToNameSwitch;
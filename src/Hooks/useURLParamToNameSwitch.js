function useURLParamToNameSwitch(urlParam) {
    switch(urlParam) {
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
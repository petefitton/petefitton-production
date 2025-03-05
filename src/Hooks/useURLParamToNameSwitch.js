function useURLParamToNameSwitch(urlParam) {
    switch(urlParam) {
      case "the-starting-of-something-new":
        return (
            "The Starting of Something New"
        );
      case "refrain":
        return (
            "Refrain"
        );
    default:
        return (<></>);
    }
}
  
export default useURLParamToNameSwitch;
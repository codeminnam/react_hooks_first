export const useFullscreen = (callback) => {
    const element = useRef();
  
    const runCb = isFull => {
      if(callback &&typeof callback === "function"){
        callback(isFull);
      }
    };
    
    const triggerFull = () => {
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      }else if(element.current.mozReguestFullscreen){
        element.current.mozReguestFullscreen();
      }else if(element.current.webkitRequestFullscreen){
        element.current.webkitRequestFullscreen();
      }else if(element.current.msRequestFullscreen){
        element.current.msRequestFullscreen();
      }
      runCb(true);
    };
  
    const exitFull = () => {
      document.exitFullscreen();
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      }else if(element.current.mozReguestFullscreen){
        element.current.mozReguestFullscreen();
      }else if(element.current.webkitRequestFullscreen){
        element.current.webkitRequestFullscreen();
      }else if(element.current.msRequestFullscreen){
        element.current.msRequestFullscreen();
      }
      runCb(false);
    };
  
    return { element, triggerFull, exitFull };
  };
  
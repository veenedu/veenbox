import Rx from 'rxjs/Rx';

//get current dimensions of window
export function getDimensions(){
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

//internal use
export function wrapComponent(comp){
  return comp
}

//for handleResize
//
let
  listeners = {},
  subscription = null;

  function _getListenersCount(){
    return Object.keys(listeners).length;
  }

export const windowResize = {
  subscribe:function(fn){
    //subscribe only if not already subscribed
    (!listeners[fn] && listeners[fn]  = fn);
    if(!subscription){
      subscription = Rx.Observable.fromEvent(window, 'resize')
          .debounceTime(200)
          .subscribe((e) =>{
            var width = window.innerWidth,height = window.innerHeight;
            for (var key in listeners){
              listeners[key]({width,height});
            }
          })
    }
  },
  unsubscribe:function(fn){
    //only 1 timer exists in list, so it must be this timer.
    //So first unbind/clear, than remove it from list of listenrs
    var isUnsubscribe =  _getListenersCount() === 1;
    if(isUnsubscribe){
      subscription.unsubscribe();
      subscription = null;
    }
    delete listeners[fn];
  }
}

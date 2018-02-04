let eventManager = null;

export const INITIALIZE_EVENT_MANAGER = ( vueInstance ) => {
  eventManager = vueInstance;
}

export const PUBLISH_EVENT = (eventName, data) => {
  console.log('publishing:',eventName,data);
  eventManager.$emit(eventName,data);

}

export const SUBSCRIBE_EVENT = (eventName, callback ) => {
  console.log('subscribing:', eventName,callback);
  console.log('at that time event manager', eventManager );
  eventManager.$on(eventName, callback );
}

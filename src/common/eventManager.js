let eventManager = null;

export const INITIALIZE_EVENT_MANAGER = ( vueInstance ) => {
  eventManager = vueInstance;
}

export const PUBLISH_EVENT = (eventName, data) => {
  eventManager.$emit(eventName,data);

}

export const SUBSCRIBE_EVENT = (eventName, callback ) => {
  eventManager.$on(eventName, callback );
}

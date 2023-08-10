import getType from ".";

const windowEvents = {};

export default {
	add(eventName, eventCallback) {
		if(getType(eventName) !== 'String' || getType(eventCallback) !== 'Function') {
			return;
		}
		if(windowEvents.hasOwnProperty(eventName)) {
			windowEvents[eventName].push(eventCallback);
		} else {
			windowEvents[eventName] = [eventCallback];
			window.addEventListener(eventName, (e) => {
				windowEvents[eventName].forEach(callback => callback(e));
			})
		}
	}
}
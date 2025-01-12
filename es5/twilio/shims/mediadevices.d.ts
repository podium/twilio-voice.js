/**
 * @packageDocumentation
 * @module Voice
 * @internalapi
 */
import EventTarget from './eventtarget';
/**
 * Make a custom MediaDevices object, and proxy through existing functionality. If
 *   devicechange is present, we simply reemit the event. If not, we will do the
 *   detection ourselves and fire the event when necessary. The same logic exists
 *   for deviceinfochange for consistency, however deviceinfochange is our own event
 *   so it is unlikely that it will ever be native. The w3c spec for devicechange
 *   is unclear as to whether MediaDeviceInfo changes (such as label) will
 *   trigger the devicechange event. We have an open question on this here:
 *   https://bugs.chromium.org/p/chromium/issues/detail?id=585096
 */
declare class MediaDevicesShim extends EventTarget {
    constructor();
}
declare const getMediaDevicesInstance: () => MediaDevicesShim | null;
export default getMediaDevicesInstance;

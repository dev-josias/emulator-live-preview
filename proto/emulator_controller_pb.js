// source: proto/emulator_controller.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.android.emulation.control.AudioFormat', null, global);
goog.exportSymbol('proto.android.emulation.control.AudioFormat.Channels', null, global);
goog.exportSymbol('proto.android.emulation.control.AudioFormat.DeliveryMode', null, global);
goog.exportSymbol('proto.android.emulation.control.AudioFormat.SampleFormat', null, global);
goog.exportSymbol('proto.android.emulation.control.AudioPacket', null, global);
goog.exportSymbol('proto.android.emulation.control.BatteryState', null, global);
goog.exportSymbol('proto.android.emulation.control.BatteryState.BatteryCharger', null, global);
goog.exportSymbol('proto.android.emulation.control.BatteryState.BatteryHealth', null, global);
goog.exportSymbol('proto.android.emulation.control.BatteryState.BatteryStatus', null, global);
goog.exportSymbol('proto.android.emulation.control.BrightnessValue', null, global);
goog.exportSymbol('proto.android.emulation.control.BrightnessValue.LightType', null, global);
goog.exportSymbol('proto.android.emulation.control.CameraNotification', null, global);
goog.exportSymbol('proto.android.emulation.control.ClipData', null, global);
goog.exportSymbol('proto.android.emulation.control.DisplayConfiguration', null, global);
goog.exportSymbol('proto.android.emulation.control.DisplayConfiguration.DisplayFlags', null, global);
goog.exportSymbol('proto.android.emulation.control.DisplayConfigurations', null, global);
goog.exportSymbol('proto.android.emulation.control.DisplayConfigurationsChangedNotification', null, global);
goog.exportSymbol('proto.android.emulation.control.DisplayMode', null, global);
goog.exportSymbol('proto.android.emulation.control.DisplayModeValue', null, global);
goog.exportSymbol('proto.android.emulation.control.EmulatorStatus', null, global);
goog.exportSymbol('proto.android.emulation.control.Entry', null, global);
goog.exportSymbol('proto.android.emulation.control.EntryList', null, global);
goog.exportSymbol('proto.android.emulation.control.Fingerprint', null, global);
goog.exportSymbol('proto.android.emulation.control.FoldedDisplay', null, global);
goog.exportSymbol('proto.android.emulation.control.GpsState', null, global);
goog.exportSymbol('proto.android.emulation.control.Image', null, global);
goog.exportSymbol('proto.android.emulation.control.ImageFormat', null, global);
goog.exportSymbol('proto.android.emulation.control.ImageFormat.ImgFormat', null, global);
goog.exportSymbol('proto.android.emulation.control.ImageTransport', null, global);
goog.exportSymbol('proto.android.emulation.control.ImageTransport.TransportChannel', null, global);
goog.exportSymbol('proto.android.emulation.control.KeyboardEvent', null, global);
goog.exportSymbol('proto.android.emulation.control.KeyboardEvent.KeyCodeType', null, global);
goog.exportSymbol('proto.android.emulation.control.KeyboardEvent.KeyEventType', null, global);
goog.exportSymbol('proto.android.emulation.control.LogMessage', null, global);
goog.exportSymbol('proto.android.emulation.control.LogMessage.LogType', null, global);
goog.exportSymbol('proto.android.emulation.control.LogcatEntry', null, global);
goog.exportSymbol('proto.android.emulation.control.LogcatEntry.LogLevel', null, global);
goog.exportSymbol('proto.android.emulation.control.MouseEvent', null, global);
goog.exportSymbol('proto.android.emulation.control.Notification', null, global);
goog.exportSymbol('proto.android.emulation.control.Notification.EventType', null, global);
goog.exportSymbol('proto.android.emulation.control.Notification.TypeCase', null, global);
goog.exportSymbol('proto.android.emulation.control.ParameterValue', null, global);
goog.exportSymbol('proto.android.emulation.control.PhoneCall', null, global);
goog.exportSymbol('proto.android.emulation.control.PhoneCall.Operation', null, global);
goog.exportSymbol('proto.android.emulation.control.PhoneNumber', null, global);
goog.exportSymbol('proto.android.emulation.control.PhoneResponse', null, global);
goog.exportSymbol('proto.android.emulation.control.PhoneResponse.Response', null, global);
goog.exportSymbol('proto.android.emulation.control.PhysicalModelValue', null, global);
goog.exportSymbol('proto.android.emulation.control.PhysicalModelValue.PhysicalType', null, global);
goog.exportSymbol('proto.android.emulation.control.PhysicalModelValue.State', null, global);
goog.exportSymbol('proto.android.emulation.control.Posture', null, global);
goog.exportSymbol('proto.android.emulation.control.Posture.PostureValue', null, global);
goog.exportSymbol('proto.android.emulation.control.Rotation', null, global);
goog.exportSymbol('proto.android.emulation.control.Rotation.SkinRotation', null, global);
goog.exportSymbol('proto.android.emulation.control.RotationRadian', null, global);
goog.exportSymbol('proto.android.emulation.control.SensorValue', null, global);
goog.exportSymbol('proto.android.emulation.control.SensorValue.SensorType', null, global);
goog.exportSymbol('proto.android.emulation.control.SensorValue.State', null, global);
goog.exportSymbol('proto.android.emulation.control.SmsMessage', null, global);
goog.exportSymbol('proto.android.emulation.control.Touch', null, global);
goog.exportSymbol('proto.android.emulation.control.Touch.EventExpiration', null, global);
goog.exportSymbol('proto.android.emulation.control.TouchEvent', null, global);
goog.exportSymbol('proto.android.emulation.control.Velocity', null, global);
goog.exportSymbol('proto.android.emulation.control.VmConfiguration', null, global);
goog.exportSymbol('proto.android.emulation.control.VmConfiguration.VmHypervisorType', null, global);
goog.exportSymbol('proto.android.emulation.control.VmRunState', null, global);
goog.exportSymbol('proto.android.emulation.control.VmRunState.RunState', null, global);
goog.exportSymbol('proto.android.emulation.control.WheelEvent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.VmRunState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.VmRunState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.VmRunState.displayName = 'proto.android.emulation.control.VmRunState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.ParameterValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android.emulation.control.ParameterValue.repeatedFields_, null);
};
goog.inherits(proto.android.emulation.control.ParameterValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.ParameterValue.displayName = 'proto.android.emulation.control.ParameterValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.PhysicalModelValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.PhysicalModelValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.PhysicalModelValue.displayName = 'proto.android.emulation.control.PhysicalModelValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.SensorValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.SensorValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.SensorValue.displayName = 'proto.android.emulation.control.SensorValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.BrightnessValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.BrightnessValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.BrightnessValue.displayName = 'proto.android.emulation.control.BrightnessValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.DisplayMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.DisplayMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.DisplayMode.displayName = 'proto.android.emulation.control.DisplayMode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.LogMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android.emulation.control.LogMessage.repeatedFields_, null);
};
goog.inherits(proto.android.emulation.control.LogMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.LogMessage.displayName = 'proto.android.emulation.control.LogMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.LogcatEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.LogcatEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.LogcatEntry.displayName = 'proto.android.emulation.control.LogcatEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.VmConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.VmConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.VmConfiguration.displayName = 'proto.android.emulation.control.VmConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.ClipData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.ClipData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.ClipData.displayName = 'proto.android.emulation.control.ClipData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Touch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Touch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Touch.displayName = 'proto.android.emulation.control.Touch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.TouchEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android.emulation.control.TouchEvent.repeatedFields_, null);
};
goog.inherits(proto.android.emulation.control.TouchEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.TouchEvent.displayName = 'proto.android.emulation.control.TouchEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.MouseEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.MouseEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.MouseEvent.displayName = 'proto.android.emulation.control.MouseEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.WheelEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.WheelEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.WheelEvent.displayName = 'proto.android.emulation.control.WheelEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.KeyboardEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.KeyboardEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.KeyboardEvent.displayName = 'proto.android.emulation.control.KeyboardEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Fingerprint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Fingerprint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Fingerprint.displayName = 'proto.android.emulation.control.Fingerprint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.GpsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.GpsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.GpsState.displayName = 'proto.android.emulation.control.GpsState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.BatteryState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.BatteryState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.BatteryState.displayName = 'proto.android.emulation.control.BatteryState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.ImageTransport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.ImageTransport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.ImageTransport.displayName = 'proto.android.emulation.control.ImageTransport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.FoldedDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.FoldedDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.FoldedDisplay.displayName = 'proto.android.emulation.control.FoldedDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.ImageFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.ImageFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.ImageFormat.displayName = 'proto.android.emulation.control.ImageFormat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Image.displayName = 'proto.android.emulation.control.Image';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Rotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Rotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Rotation.displayName = 'proto.android.emulation.control.Rotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.PhoneCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.PhoneCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.PhoneCall.displayName = 'proto.android.emulation.control.PhoneCall';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.PhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.PhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.PhoneResponse.displayName = 'proto.android.emulation.control.PhoneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Entry.displayName = 'proto.android.emulation.control.Entry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.EntryList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android.emulation.control.EntryList.repeatedFields_, null);
};
goog.inherits(proto.android.emulation.control.EntryList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.EntryList.displayName = 'proto.android.emulation.control.EntryList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.EmulatorStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.EmulatorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.EmulatorStatus.displayName = 'proto.android.emulation.control.EmulatorStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.AudioFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.AudioFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.AudioFormat.displayName = 'proto.android.emulation.control.AudioFormat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.AudioPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.AudioPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.AudioPacket.displayName = 'proto.android.emulation.control.AudioPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.SmsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.SmsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.SmsMessage.displayName = 'proto.android.emulation.control.SmsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.DisplayConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.DisplayConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.DisplayConfiguration.displayName = 'proto.android.emulation.control.DisplayConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.DisplayConfigurations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android.emulation.control.DisplayConfigurations.repeatedFields_, null);
};
goog.inherits(proto.android.emulation.control.DisplayConfigurations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.DisplayConfigurations.displayName = 'proto.android.emulation.control.DisplayConfigurations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Notification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.android.emulation.control.Notification.oneofGroups_);
};
goog.inherits(proto.android.emulation.control.Notification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Notification.displayName = 'proto.android.emulation.control.Notification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.CameraNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.CameraNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.CameraNotification.displayName = 'proto.android.emulation.control.CameraNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.DisplayConfigurationsChangedNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.DisplayConfigurationsChangedNotification.displayName = 'proto.android.emulation.control.DisplayConfigurationsChangedNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.RotationRadian = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.RotationRadian, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.RotationRadian.displayName = 'proto.android.emulation.control.RotationRadian';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Velocity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Velocity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Velocity.displayName = 'proto.android.emulation.control.Velocity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.Posture = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.Posture, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.Posture.displayName = 'proto.android.emulation.control.Posture';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android.emulation.control.PhoneNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android.emulation.control.PhoneNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android.emulation.control.PhoneNumber.displayName = 'proto.android.emulation.control.PhoneNumber';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.VmRunState.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.VmRunState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.VmRunState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.VmRunState.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.VmRunState}
 */
proto.android.emulation.control.VmRunState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.VmRunState;
  return proto.android.emulation.control.VmRunState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.VmRunState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.VmRunState}
 */
proto.android.emulation.control.VmRunState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.VmRunState.RunState} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.VmRunState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.VmRunState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.VmRunState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.VmRunState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.VmRunState.RunState = {
  UNKNOWN: 0,
  RUNNING: 1,
  RESTORE_VM: 2,
  PAUSED: 3,
  SAVE_VM: 4,
  SHUTDOWN: 5,
  TERMINATE: 7,
  RESET: 9,
  INTERNAL_ERROR: 10
};

/**
 * optional RunState state = 1;
 * @return {!proto.android.emulation.control.VmRunState.RunState}
 */
proto.android.emulation.control.VmRunState.prototype.getState = function() {
  return /** @type {!proto.android.emulation.control.VmRunState.RunState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.VmRunState.RunState} value
 * @return {!proto.android.emulation.control.VmRunState} returns this
 */
proto.android.emulation.control.VmRunState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android.emulation.control.ParameterValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.ParameterValue.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.ParameterValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.ParameterValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ParameterValue.toObject = function(includeInstance, msg) {
  var f, obj = {
dataList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.ParameterValue}
 */
proto.android.emulation.control.ParameterValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.ParameterValue;
  return proto.android.emulation.control.ParameterValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.ParameterValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.ParameterValue}
 */
proto.android.emulation.control.ParameterValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addData(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.ParameterValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.ParameterValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.ParameterValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ParameterValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float data = 1;
 * @return {!Array<number>}
 */
proto.android.emulation.control.ParameterValue.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.android.emulation.control.ParameterValue} returns this
 */
proto.android.emulation.control.ParameterValue.prototype.setDataList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.android.emulation.control.ParameterValue} returns this
 */
proto.android.emulation.control.ParameterValue.prototype.addData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android.emulation.control.ParameterValue} returns this
 */
proto.android.emulation.control.ParameterValue.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.PhysicalModelValue.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.PhysicalModelValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.PhysicalModelValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhysicalModelValue.toObject = function(includeInstance, msg) {
  var f, obj = {
target: jspb.Message.getFieldWithDefault(msg, 1, 0),
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
value: (f = msg.getValue()) && proto.android.emulation.control.ParameterValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.PhysicalModelValue}
 */
proto.android.emulation.control.PhysicalModelValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.PhysicalModelValue;
  return proto.android.emulation.control.PhysicalModelValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.PhysicalModelValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.PhysicalModelValue}
 */
proto.android.emulation.control.PhysicalModelValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.PhysicalModelValue.PhysicalType} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 2:
      var value = /** @type {!proto.android.emulation.control.PhysicalModelValue.State} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.android.emulation.control.ParameterValue;
      reader.readMessage(value,proto.android.emulation.control.ParameterValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.PhysicalModelValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.PhysicalModelValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.PhysicalModelValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhysicalModelValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.android.emulation.control.ParameterValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.PhysicalModelValue.State = {
  OK: 0,
  NO_SERVICE: -3,
  DISABLED: -2,
  UNKNOWN: -1
};

/**
 * @enum {number}
 */
proto.android.emulation.control.PhysicalModelValue.PhysicalType = {
  POSITION: 0,
  ROTATION: 1,
  MAGNETIC_FIELD: 2,
  TEMPERATURE: 3,
  PROXIMITY: 4,
  LIGHT: 5,
  PRESSURE: 6,
  HUMIDITY: 7,
  VELOCITY: 8,
  AMBIENT_MOTION: 9,
  HINGE_ANGLE0: 10,
  HINGE_ANGLE1: 11,
  HINGE_ANGLE2: 12,
  ROLLABLE0: 13,
  ROLLABLE1: 14,
  ROLLABLE2: 15,
  POSTURE: 16,
  HEART_RATE: 17,
  RGBC_LIGHT: 18,
  WRIST_TILT: 19
};

/**
 * optional PhysicalType target = 1;
 * @return {!proto.android.emulation.control.PhysicalModelValue.PhysicalType}
 */
proto.android.emulation.control.PhysicalModelValue.prototype.getTarget = function() {
  return /** @type {!proto.android.emulation.control.PhysicalModelValue.PhysicalType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.PhysicalModelValue.PhysicalType} value
 * @return {!proto.android.emulation.control.PhysicalModelValue} returns this
 */
proto.android.emulation.control.PhysicalModelValue.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional State status = 2;
 * @return {!proto.android.emulation.control.PhysicalModelValue.State}
 */
proto.android.emulation.control.PhysicalModelValue.prototype.getStatus = function() {
  return /** @type {!proto.android.emulation.control.PhysicalModelValue.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.android.emulation.control.PhysicalModelValue.State} value
 * @return {!proto.android.emulation.control.PhysicalModelValue} returns this
 */
proto.android.emulation.control.PhysicalModelValue.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ParameterValue value = 3;
 * @return {?proto.android.emulation.control.ParameterValue}
 */
proto.android.emulation.control.PhysicalModelValue.prototype.getValue = function() {
  return /** @type{?proto.android.emulation.control.ParameterValue} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.ParameterValue, 3));
};


/**
 * @param {?proto.android.emulation.control.ParameterValue|undefined} value
 * @return {!proto.android.emulation.control.PhysicalModelValue} returns this
*/
proto.android.emulation.control.PhysicalModelValue.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.PhysicalModelValue} returns this
 */
proto.android.emulation.control.PhysicalModelValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.PhysicalModelValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.SensorValue.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.SensorValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.SensorValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.SensorValue.toObject = function(includeInstance, msg) {
  var f, obj = {
target: jspb.Message.getFieldWithDefault(msg, 1, 0),
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
value: (f = msg.getValue()) && proto.android.emulation.control.ParameterValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.SensorValue}
 */
proto.android.emulation.control.SensorValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.SensorValue;
  return proto.android.emulation.control.SensorValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.SensorValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.SensorValue}
 */
proto.android.emulation.control.SensorValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.SensorValue.SensorType} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 2:
      var value = /** @type {!proto.android.emulation.control.SensorValue.State} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.android.emulation.control.ParameterValue;
      reader.readMessage(value,proto.android.emulation.control.ParameterValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.SensorValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.SensorValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.SensorValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.SensorValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.android.emulation.control.ParameterValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.SensorValue.State = {
  OK: 0,
  NO_SERVICE: -3,
  DISABLED: -2,
  UNKNOWN: -1
};

/**
 * @enum {number}
 */
proto.android.emulation.control.SensorValue.SensorType = {
  ACCELERATION: 0,
  GYROSCOPE: 1,
  MAGNETIC_FIELD: 2,
  ORIENTATION: 3,
  TEMPERATURE: 4,
  PROXIMITY: 5,
  LIGHT: 6,
  PRESSURE: 7,
  HUMIDITY: 8,
  MAGNETIC_FIELD_UNCALIBRATED: 9,
  GYROSCOPE_UNCALIBRATED: 10,
  HEART_RATE: 14,
  RGBC_LIGHT: 15,
  ACCELERATION_UNCALIBRATED: 17
};

/**
 * optional SensorType target = 1;
 * @return {!proto.android.emulation.control.SensorValue.SensorType}
 */
proto.android.emulation.control.SensorValue.prototype.getTarget = function() {
  return /** @type {!proto.android.emulation.control.SensorValue.SensorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.SensorValue.SensorType} value
 * @return {!proto.android.emulation.control.SensorValue} returns this
 */
proto.android.emulation.control.SensorValue.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional State status = 2;
 * @return {!proto.android.emulation.control.SensorValue.State}
 */
proto.android.emulation.control.SensorValue.prototype.getStatus = function() {
  return /** @type {!proto.android.emulation.control.SensorValue.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.android.emulation.control.SensorValue.State} value
 * @return {!proto.android.emulation.control.SensorValue} returns this
 */
proto.android.emulation.control.SensorValue.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ParameterValue value = 3;
 * @return {?proto.android.emulation.control.ParameterValue}
 */
proto.android.emulation.control.SensorValue.prototype.getValue = function() {
  return /** @type{?proto.android.emulation.control.ParameterValue} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.ParameterValue, 3));
};


/**
 * @param {?proto.android.emulation.control.ParameterValue|undefined} value
 * @return {!proto.android.emulation.control.SensorValue} returns this
*/
proto.android.emulation.control.SensorValue.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.SensorValue} returns this
 */
proto.android.emulation.control.SensorValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.SensorValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.BrightnessValue.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.BrightnessValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.BrightnessValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.BrightnessValue.toObject = function(includeInstance, msg) {
  var f, obj = {
target: jspb.Message.getFieldWithDefault(msg, 1, 0),
value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.BrightnessValue}
 */
proto.android.emulation.control.BrightnessValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.BrightnessValue;
  return proto.android.emulation.control.BrightnessValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.BrightnessValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.BrightnessValue}
 */
proto.android.emulation.control.BrightnessValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.BrightnessValue.LightType} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.BrightnessValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.BrightnessValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.BrightnessValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.BrightnessValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.BrightnessValue.LightType = {
  LCD: 0,
  KEYBOARD: 1,
  BUTTON: 2
};

/**
 * optional LightType target = 1;
 * @return {!proto.android.emulation.control.BrightnessValue.LightType}
 */
proto.android.emulation.control.BrightnessValue.prototype.getTarget = function() {
  return /** @type {!proto.android.emulation.control.BrightnessValue.LightType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.BrightnessValue.LightType} value
 * @return {!proto.android.emulation.control.BrightnessValue} returns this
 */
proto.android.emulation.control.BrightnessValue.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 value = 2;
 * @return {number}
 */
proto.android.emulation.control.BrightnessValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.BrightnessValue} returns this
 */
proto.android.emulation.control.BrightnessValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.DisplayMode.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.DisplayMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.DisplayMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayMode.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.DisplayMode}
 */
proto.android.emulation.control.DisplayMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.DisplayMode;
  return proto.android.emulation.control.DisplayMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.DisplayMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.DisplayMode}
 */
proto.android.emulation.control.DisplayMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.DisplayModeValue} */ (reader.readEnum());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.DisplayMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.DisplayMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.DisplayMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional DisplayModeValue value = 1;
 * @return {!proto.android.emulation.control.DisplayModeValue}
 */
proto.android.emulation.control.DisplayMode.prototype.getValue = function() {
  return /** @type {!proto.android.emulation.control.DisplayModeValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.DisplayModeValue} value
 * @return {!proto.android.emulation.control.DisplayMode} returns this
 */
proto.android.emulation.control.DisplayMode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android.emulation.control.LogMessage.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.LogMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.LogMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.LogMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.LogMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
contents: jspb.Message.getFieldWithDefault(msg, 1, ""),
start: jspb.Message.getFieldWithDefault(msg, 2, 0),
next: jspb.Message.getFieldWithDefault(msg, 3, 0),
sort: jspb.Message.getFieldWithDefault(msg, 4, 0),
entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.android.emulation.control.LogcatEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.LogMessage}
 */
proto.android.emulation.control.LogMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.LogMessage;
  return proto.android.emulation.control.LogMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.LogMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.LogMessage}
 */
proto.android.emulation.control.LogMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContents(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNext(value);
      break;
    case 4:
      var value = /** @type {!proto.android.emulation.control.LogMessage.LogType} */ (reader.readEnum());
      msg.setSort(value);
      break;
    case 5:
      var value = new proto.android.emulation.control.LogcatEntry;
      reader.readMessage(value,proto.android.emulation.control.LogcatEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.LogMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.LogMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.LogMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.LogMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContents();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNext();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSort();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.android.emulation.control.LogcatEntry.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.LogMessage.LogType = {
  TEXT: 0,
  PARSED: 1
};

/**
 * optional string contents = 1;
 * @return {string}
 */
proto.android.emulation.control.LogMessage.prototype.getContents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.LogMessage} returns this
 */
proto.android.emulation.control.LogMessage.prototype.setContents = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 start = 2;
 * @return {number}
 */
proto.android.emulation.control.LogMessage.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.LogMessage} returns this
 */
proto.android.emulation.control.LogMessage.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 next = 3;
 * @return {number}
 */
proto.android.emulation.control.LogMessage.prototype.getNext = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.LogMessage} returns this
 */
proto.android.emulation.control.LogMessage.prototype.setNext = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional LogType sort = 4;
 * @return {!proto.android.emulation.control.LogMessage.LogType}
 */
proto.android.emulation.control.LogMessage.prototype.getSort = function() {
  return /** @type {!proto.android.emulation.control.LogMessage.LogType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.android.emulation.control.LogMessage.LogType} value
 * @return {!proto.android.emulation.control.LogMessage} returns this
 */
proto.android.emulation.control.LogMessage.prototype.setSort = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated LogcatEntry entries = 5;
 * @return {!Array<!proto.android.emulation.control.LogcatEntry>}
 */
proto.android.emulation.control.LogMessage.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.android.emulation.control.LogcatEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.android.emulation.control.LogcatEntry, 5));
};


/**
 * @param {!Array<!proto.android.emulation.control.LogcatEntry>} value
 * @return {!proto.android.emulation.control.LogMessage} returns this
*/
proto.android.emulation.control.LogMessage.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.android.emulation.control.LogcatEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.android.emulation.control.LogcatEntry}
 */
proto.android.emulation.control.LogMessage.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.android.emulation.control.LogcatEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android.emulation.control.LogMessage} returns this
 */
proto.android.emulation.control.LogMessage.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.LogcatEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.LogcatEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.LogcatEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.LogcatEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
pid: jspb.Message.getFieldWithDefault(msg, 2, 0),
tid: jspb.Message.getFieldWithDefault(msg, 3, 0),
level: jspb.Message.getFieldWithDefault(msg, 4, 0),
tag: jspb.Message.getFieldWithDefault(msg, 5, ""),
msg: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.LogcatEntry}
 */
proto.android.emulation.control.LogcatEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.LogcatEntry;
  return proto.android.emulation.control.LogcatEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.LogcatEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.LogcatEntry}
 */
proto.android.emulation.control.LogcatEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTid(value);
      break;
    case 4:
      var value = /** @type {!proto.android.emulation.control.LogcatEntry.LogLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.LogcatEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.LogcatEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.LogcatEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.LogcatEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.LogcatEntry.LogLevel = {
  UNKNOWN: 0,
  DEFAULT: 1,
  VERBOSE: 2,
  DEBUG: 3,
  INFO: 4,
  WARN: 5,
  ERR: 6,
  FATAL: 7,
  SILENT: 8
};

/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.android.emulation.control.LogcatEntry.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.LogcatEntry} returns this
 */
proto.android.emulation.control.LogcatEntry.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 pid = 2;
 * @return {number}
 */
proto.android.emulation.control.LogcatEntry.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.LogcatEntry} returns this
 */
proto.android.emulation.control.LogcatEntry.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 tid = 3;
 * @return {number}
 */
proto.android.emulation.control.LogcatEntry.prototype.getTid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.LogcatEntry} returns this
 */
proto.android.emulation.control.LogcatEntry.prototype.setTid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional LogLevel level = 4;
 * @return {!proto.android.emulation.control.LogcatEntry.LogLevel}
 */
proto.android.emulation.control.LogcatEntry.prototype.getLevel = function() {
  return /** @type {!proto.android.emulation.control.LogcatEntry.LogLevel} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.android.emulation.control.LogcatEntry.LogLevel} value
 * @return {!proto.android.emulation.control.LogcatEntry} returns this
 */
proto.android.emulation.control.LogcatEntry.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string tag = 5;
 * @return {string}
 */
proto.android.emulation.control.LogcatEntry.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.LogcatEntry} returns this
 */
proto.android.emulation.control.LogcatEntry.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string msg = 6;
 * @return {string}
 */
proto.android.emulation.control.LogcatEntry.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.LogcatEntry} returns this
 */
proto.android.emulation.control.LogcatEntry.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.VmConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.VmConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.VmConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.VmConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
hypervisortype: jspb.Message.getFieldWithDefault(msg, 1, 0),
numberofcpucores: jspb.Message.getFieldWithDefault(msg, 2, 0),
ramsizebytes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.VmConfiguration}
 */
proto.android.emulation.control.VmConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.VmConfiguration;
  return proto.android.emulation.control.VmConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.VmConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.VmConfiguration}
 */
proto.android.emulation.control.VmConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.VmConfiguration.VmHypervisorType} */ (reader.readEnum());
      msg.setHypervisortype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofcpucores(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRamsizebytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.VmConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.VmConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.VmConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.VmConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHypervisortype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumberofcpucores();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRamsizebytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.VmConfiguration.VmHypervisorType = {
  UNKNOWN: 0,
  NONE: 1,
  KVM: 2,
  HAXM: 3,
  HVF: 4,
  WHPX: 5,
  AEHD: 6
};

/**
 * optional VmHypervisorType hypervisorType = 1;
 * @return {!proto.android.emulation.control.VmConfiguration.VmHypervisorType}
 */
proto.android.emulation.control.VmConfiguration.prototype.getHypervisortype = function() {
  return /** @type {!proto.android.emulation.control.VmConfiguration.VmHypervisorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.VmConfiguration.VmHypervisorType} value
 * @return {!proto.android.emulation.control.VmConfiguration} returns this
 */
proto.android.emulation.control.VmConfiguration.prototype.setHypervisortype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 numberOfCpuCores = 2;
 * @return {number}
 */
proto.android.emulation.control.VmConfiguration.prototype.getNumberofcpucores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.VmConfiguration} returns this
 */
proto.android.emulation.control.VmConfiguration.prototype.setNumberofcpucores = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 ramSizeBytes = 3;
 * @return {number}
 */
proto.android.emulation.control.VmConfiguration.prototype.getRamsizebytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.VmConfiguration} returns this
 */
proto.android.emulation.control.VmConfiguration.prototype.setRamsizebytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.ClipData.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.ClipData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.ClipData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ClipData.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.ClipData}
 */
proto.android.emulation.control.ClipData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.ClipData;
  return proto.android.emulation.control.ClipData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.ClipData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.ClipData}
 */
proto.android.emulation.control.ClipData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.ClipData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.ClipData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.ClipData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ClipData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.android.emulation.control.ClipData.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.ClipData} returns this
 */
proto.android.emulation.control.ClipData.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Touch.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Touch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Touch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Touch.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFieldWithDefault(msg, 1, 0),
y: jspb.Message.getFieldWithDefault(msg, 2, 0),
identifier: jspb.Message.getFieldWithDefault(msg, 3, 0),
pressure: jspb.Message.getFieldWithDefault(msg, 4, 0),
touchMajor: jspb.Message.getFieldWithDefault(msg, 5, 0),
touchMinor: jspb.Message.getFieldWithDefault(msg, 6, 0),
expiration: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Touch}
 */
proto.android.emulation.control.Touch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Touch;
  return proto.android.emulation.control.Touch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Touch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Touch}
 */
proto.android.emulation.control.Touch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIdentifier(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPressure(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTouchMajor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTouchMinor(value);
      break;
    case 7:
      var value = /** @type {!proto.android.emulation.control.Touch.EventExpiration} */ (reader.readEnum());
      msg.setExpiration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Touch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Touch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Touch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Touch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIdentifier();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPressure();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTouchMajor();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTouchMinor();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getExpiration();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.Touch.EventExpiration = {
  EVENT_EXPIRATION_UNSPECIFIED: 0,
  NEVER_EXPIRE: 1
};

/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.android.emulation.control.Touch.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.android.emulation.control.Touch.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 identifier = 3;
 * @return {number}
 */
proto.android.emulation.control.Touch.prototype.getIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setIdentifier = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 pressure = 4;
 * @return {number}
 */
proto.android.emulation.control.Touch.prototype.getPressure = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setPressure = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 touch_major = 5;
 * @return {number}
 */
proto.android.emulation.control.Touch.prototype.getTouchMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setTouchMajor = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 touch_minor = 6;
 * @return {number}
 */
proto.android.emulation.control.Touch.prototype.getTouchMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setTouchMinor = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional EventExpiration expiration = 7;
 * @return {!proto.android.emulation.control.Touch.EventExpiration}
 */
proto.android.emulation.control.Touch.prototype.getExpiration = function() {
  return /** @type {!proto.android.emulation.control.Touch.EventExpiration} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.android.emulation.control.Touch.EventExpiration} value
 * @return {!proto.android.emulation.control.Touch} returns this
 */
proto.android.emulation.control.Touch.prototype.setExpiration = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android.emulation.control.TouchEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.TouchEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.TouchEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.TouchEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.TouchEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
touchesList: jspb.Message.toObjectList(msg.getTouchesList(),
    proto.android.emulation.control.Touch.toObject, includeInstance),
display: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.TouchEvent}
 */
proto.android.emulation.control.TouchEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.TouchEvent;
  return proto.android.emulation.control.TouchEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.TouchEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.TouchEvent}
 */
proto.android.emulation.control.TouchEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android.emulation.control.Touch;
      reader.readMessage(value,proto.android.emulation.control.Touch.deserializeBinaryFromReader);
      msg.addTouches(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.TouchEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.TouchEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.TouchEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.TouchEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTouchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.android.emulation.control.Touch.serializeBinaryToWriter
    );
  }
  f = message.getDisplay();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated Touch touches = 1;
 * @return {!Array<!proto.android.emulation.control.Touch>}
 */
proto.android.emulation.control.TouchEvent.prototype.getTouchesList = function() {
  return /** @type{!Array<!proto.android.emulation.control.Touch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.android.emulation.control.Touch, 1));
};


/**
 * @param {!Array<!proto.android.emulation.control.Touch>} value
 * @return {!proto.android.emulation.control.TouchEvent} returns this
*/
proto.android.emulation.control.TouchEvent.prototype.setTouchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.android.emulation.control.Touch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.android.emulation.control.Touch}
 */
proto.android.emulation.control.TouchEvent.prototype.addTouches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.android.emulation.control.Touch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android.emulation.control.TouchEvent} returns this
 */
proto.android.emulation.control.TouchEvent.prototype.clearTouchesList = function() {
  return this.setTouchesList([]);
};


/**
 * optional int32 display = 2;
 * @return {number}
 */
proto.android.emulation.control.TouchEvent.prototype.getDisplay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.TouchEvent} returns this
 */
proto.android.emulation.control.TouchEvent.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.MouseEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.MouseEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.MouseEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.MouseEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFieldWithDefault(msg, 1, 0),
y: jspb.Message.getFieldWithDefault(msg, 2, 0),
buttons: jspb.Message.getFieldWithDefault(msg, 3, 0),
display: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.MouseEvent}
 */
proto.android.emulation.control.MouseEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.MouseEvent;
  return proto.android.emulation.control.MouseEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.MouseEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.MouseEvent}
 */
proto.android.emulation.control.MouseEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setButtons(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.MouseEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.MouseEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.MouseEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.MouseEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getButtons();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDisplay();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.android.emulation.control.MouseEvent.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.MouseEvent} returns this
 */
proto.android.emulation.control.MouseEvent.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.android.emulation.control.MouseEvent.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.MouseEvent} returns this
 */
proto.android.emulation.control.MouseEvent.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 buttons = 3;
 * @return {number}
 */
proto.android.emulation.control.MouseEvent.prototype.getButtons = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.MouseEvent} returns this
 */
proto.android.emulation.control.MouseEvent.prototype.setButtons = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 display = 4;
 * @return {number}
 */
proto.android.emulation.control.MouseEvent.prototype.getDisplay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.MouseEvent} returns this
 */
proto.android.emulation.control.MouseEvent.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.WheelEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.WheelEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.WheelEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.WheelEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
dx: jspb.Message.getFieldWithDefault(msg, 1, 0),
dy: jspb.Message.getFieldWithDefault(msg, 2, 0),
display: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.WheelEvent}
 */
proto.android.emulation.control.WheelEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.WheelEvent;
  return proto.android.emulation.control.WheelEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.WheelEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.WheelEvent}
 */
proto.android.emulation.control.WheelEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDx(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.WheelEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.WheelEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.WheelEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.WheelEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDx();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDy();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDisplay();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 dx = 1;
 * @return {number}
 */
proto.android.emulation.control.WheelEvent.prototype.getDx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.WheelEvent} returns this
 */
proto.android.emulation.control.WheelEvent.prototype.setDx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 dy = 2;
 * @return {number}
 */
proto.android.emulation.control.WheelEvent.prototype.getDy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.WheelEvent} returns this
 */
proto.android.emulation.control.WheelEvent.prototype.setDy = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 display = 3;
 * @return {number}
 */
proto.android.emulation.control.WheelEvent.prototype.getDisplay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.WheelEvent} returns this
 */
proto.android.emulation.control.WheelEvent.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.KeyboardEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.KeyboardEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.KeyboardEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.KeyboardEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
codetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
eventtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
keycode: jspb.Message.getFieldWithDefault(msg, 3, 0),
key: jspb.Message.getFieldWithDefault(msg, 4, ""),
text: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.KeyboardEvent}
 */
proto.android.emulation.control.KeyboardEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.KeyboardEvent;
  return proto.android.emulation.control.KeyboardEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.KeyboardEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.KeyboardEvent}
 */
proto.android.emulation.control.KeyboardEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.KeyboardEvent.KeyCodeType} */ (reader.readEnum());
      msg.setCodetype(value);
      break;
    case 2:
      var value = /** @type {!proto.android.emulation.control.KeyboardEvent.KeyEventType} */ (reader.readEnum());
      msg.setEventtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeycode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.KeyboardEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.KeyboardEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.KeyboardEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.KeyboardEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getKeycode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.KeyboardEvent.KeyCodeType = {
  USB: 0,
  EVDEV: 1,
  XKB: 2,
  WIN: 3,
  MAC: 4
};

/**
 * @enum {number}
 */
proto.android.emulation.control.KeyboardEvent.KeyEventType = {
  KEYDOWN: 0,
  KEYUP: 1,
  KEYPRESS: 2
};

/**
 * optional KeyCodeType codeType = 1;
 * @return {!proto.android.emulation.control.KeyboardEvent.KeyCodeType}
 */
proto.android.emulation.control.KeyboardEvent.prototype.getCodetype = function() {
  return /** @type {!proto.android.emulation.control.KeyboardEvent.KeyCodeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.KeyboardEvent.KeyCodeType} value
 * @return {!proto.android.emulation.control.KeyboardEvent} returns this
 */
proto.android.emulation.control.KeyboardEvent.prototype.setCodetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional KeyEventType eventType = 2;
 * @return {!proto.android.emulation.control.KeyboardEvent.KeyEventType}
 */
proto.android.emulation.control.KeyboardEvent.prototype.getEventtype = function() {
  return /** @type {!proto.android.emulation.control.KeyboardEvent.KeyEventType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.android.emulation.control.KeyboardEvent.KeyEventType} value
 * @return {!proto.android.emulation.control.KeyboardEvent} returns this
 */
proto.android.emulation.control.KeyboardEvent.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 keyCode = 3;
 * @return {number}
 */
proto.android.emulation.control.KeyboardEvent.prototype.getKeycode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.KeyboardEvent} returns this
 */
proto.android.emulation.control.KeyboardEvent.prototype.setKeycode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.android.emulation.control.KeyboardEvent.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.KeyboardEvent} returns this
 */
proto.android.emulation.control.KeyboardEvent.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string text = 5;
 * @return {string}
 */
proto.android.emulation.control.KeyboardEvent.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.KeyboardEvent} returns this
 */
proto.android.emulation.control.KeyboardEvent.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Fingerprint.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Fingerprint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Fingerprint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Fingerprint.toObject = function(includeInstance, msg) {
  var f, obj = {
istouching: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
touchid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Fingerprint}
 */
proto.android.emulation.control.Fingerprint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Fingerprint;
  return proto.android.emulation.control.Fingerprint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Fingerprint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Fingerprint}
 */
proto.android.emulation.control.Fingerprint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstouching(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTouchid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Fingerprint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Fingerprint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Fingerprint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Fingerprint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIstouching();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTouchid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bool isTouching = 1;
 * @return {boolean}
 */
proto.android.emulation.control.Fingerprint.prototype.getIstouching = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.android.emulation.control.Fingerprint} returns this
 */
proto.android.emulation.control.Fingerprint.prototype.setIstouching = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 touchId = 2;
 * @return {number}
 */
proto.android.emulation.control.Fingerprint.prototype.getTouchid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Fingerprint} returns this
 */
proto.android.emulation.control.Fingerprint.prototype.setTouchid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.GpsState.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.GpsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.GpsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.GpsState.toObject = function(includeInstance, msg) {
  var f, obj = {
passiveupdate: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
speed: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
bearing: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
satellites: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.GpsState}
 */
proto.android.emulation.control.GpsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.GpsState;
  return proto.android.emulation.control.GpsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.GpsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.GpsState}
 */
proto.android.emulation.control.GpsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassiveupdate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBearing(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAltitude(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSatellites(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.GpsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.GpsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.GpsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.GpsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassiveupdate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getBearing();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSatellites();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional bool passiveUpdate = 1;
 * @return {boolean}
 */
proto.android.emulation.control.GpsState.prototype.getPassiveupdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setPassiveupdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional double latitude = 2;
 * @return {number}
 */
proto.android.emulation.control.GpsState.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double longitude = 3;
 * @return {number}
 */
proto.android.emulation.control.GpsState.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double speed = 4;
 * @return {number}
 */
proto.android.emulation.control.GpsState.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double bearing = 5;
 * @return {number}
 */
proto.android.emulation.control.GpsState.prototype.getBearing = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setBearing = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double altitude = 6;
 * @return {number}
 */
proto.android.emulation.control.GpsState.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int32 satellites = 7;
 * @return {number}
 */
proto.android.emulation.control.GpsState.prototype.getSatellites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.GpsState} returns this
 */
proto.android.emulation.control.GpsState.prototype.setSatellites = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.BatteryState.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.BatteryState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.BatteryState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.BatteryState.toObject = function(includeInstance, msg) {
  var f, obj = {
hasbattery: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
ispresent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
charger: jspb.Message.getFieldWithDefault(msg, 3, 0),
chargelevel: jspb.Message.getFieldWithDefault(msg, 4, 0),
health: jspb.Message.getFieldWithDefault(msg, 5, 0),
status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.BatteryState}
 */
proto.android.emulation.control.BatteryState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.BatteryState;
  return proto.android.emulation.control.BatteryState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.BatteryState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.BatteryState}
 */
proto.android.emulation.control.BatteryState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasbattery(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspresent(value);
      break;
    case 3:
      var value = /** @type {!proto.android.emulation.control.BatteryState.BatteryCharger} */ (reader.readEnum());
      msg.setCharger(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChargelevel(value);
      break;
    case 5:
      var value = /** @type {!proto.android.emulation.control.BatteryState.BatteryHealth} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    case 6:
      var value = /** @type {!proto.android.emulation.control.BatteryState.BatteryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.BatteryState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.BatteryState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.BatteryState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.BatteryState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHasbattery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIspresent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCharger();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getChargelevel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.BatteryState.BatteryStatus = {
  UNKNOWN: 0,
  CHARGING: 1,
  DISCHARGING: 2,
  NOT_CHARGING: 3,
  FULL: 4
};

/**
 * @enum {number}
 */
proto.android.emulation.control.BatteryState.BatteryCharger = {
  NONE: 0,
  AC: 1,
  USB: 2,
  WIRELESS: 3
};

/**
 * @enum {number}
 */
proto.android.emulation.control.BatteryState.BatteryHealth = {
  GOOD: 0,
  FAILED: 1,
  DEAD: 2,
  OVERVOLTAGE: 3,
  OVERHEATED: 4
};

/**
 * optional bool hasBattery = 1;
 * @return {boolean}
 */
proto.android.emulation.control.BatteryState.prototype.getHasbattery = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.android.emulation.control.BatteryState} returns this
 */
proto.android.emulation.control.BatteryState.prototype.setHasbattery = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool isPresent = 2;
 * @return {boolean}
 */
proto.android.emulation.control.BatteryState.prototype.getIspresent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.android.emulation.control.BatteryState} returns this
 */
proto.android.emulation.control.BatteryState.prototype.setIspresent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional BatteryCharger charger = 3;
 * @return {!proto.android.emulation.control.BatteryState.BatteryCharger}
 */
proto.android.emulation.control.BatteryState.prototype.getCharger = function() {
  return /** @type {!proto.android.emulation.control.BatteryState.BatteryCharger} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.android.emulation.control.BatteryState.BatteryCharger} value
 * @return {!proto.android.emulation.control.BatteryState} returns this
 */
proto.android.emulation.control.BatteryState.prototype.setCharger = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 chargeLevel = 4;
 * @return {number}
 */
proto.android.emulation.control.BatteryState.prototype.getChargelevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.BatteryState} returns this
 */
proto.android.emulation.control.BatteryState.prototype.setChargelevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional BatteryHealth health = 5;
 * @return {!proto.android.emulation.control.BatteryState.BatteryHealth}
 */
proto.android.emulation.control.BatteryState.prototype.getHealth = function() {
  return /** @type {!proto.android.emulation.control.BatteryState.BatteryHealth} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.android.emulation.control.BatteryState.BatteryHealth} value
 * @return {!proto.android.emulation.control.BatteryState} returns this
 */
proto.android.emulation.control.BatteryState.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional BatteryStatus status = 6;
 * @return {!proto.android.emulation.control.BatteryState.BatteryStatus}
 */
proto.android.emulation.control.BatteryState.prototype.getStatus = function() {
  return /** @type {!proto.android.emulation.control.BatteryState.BatteryStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.android.emulation.control.BatteryState.BatteryStatus} value
 * @return {!proto.android.emulation.control.BatteryState} returns this
 */
proto.android.emulation.control.BatteryState.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.ImageTransport.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.ImageTransport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.ImageTransport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ImageTransport.toObject = function(includeInstance, msg) {
  var f, obj = {
channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
handle: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.ImageTransport}
 */
proto.android.emulation.control.ImageTransport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.ImageTransport;
  return proto.android.emulation.control.ImageTransport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.ImageTransport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.ImageTransport}
 */
proto.android.emulation.control.ImageTransport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.ImageTransport.TransportChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.ImageTransport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.ImageTransport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.ImageTransport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ImageTransport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHandle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.ImageTransport.TransportChannel = {
  TRANSPORT_CHANNEL_UNSPECIFIED: 0,
  MMAP: 1
};

/**
 * optional TransportChannel channel = 1;
 * @return {!proto.android.emulation.control.ImageTransport.TransportChannel}
 */
proto.android.emulation.control.ImageTransport.prototype.getChannel = function() {
  return /** @type {!proto.android.emulation.control.ImageTransport.TransportChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.ImageTransport.TransportChannel} value
 * @return {!proto.android.emulation.control.ImageTransport} returns this
 */
proto.android.emulation.control.ImageTransport.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string handle = 2;
 * @return {string}
 */
proto.android.emulation.control.ImageTransport.prototype.getHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.ImageTransport} returns this
 */
proto.android.emulation.control.ImageTransport.prototype.setHandle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.FoldedDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.FoldedDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.FoldedDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.FoldedDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
width: jspb.Message.getFieldWithDefault(msg, 1, 0),
height: jspb.Message.getFieldWithDefault(msg, 2, 0),
xoffset: jspb.Message.getFieldWithDefault(msg, 3, 0),
yoffset: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.FoldedDisplay}
 */
proto.android.emulation.control.FoldedDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.FoldedDisplay;
  return proto.android.emulation.control.FoldedDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.FoldedDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.FoldedDisplay}
 */
proto.android.emulation.control.FoldedDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setXoffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setYoffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.FoldedDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.FoldedDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.FoldedDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.FoldedDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getXoffset();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getYoffset();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 width = 1;
 * @return {number}
 */
proto.android.emulation.control.FoldedDisplay.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.FoldedDisplay} returns this
 */
proto.android.emulation.control.FoldedDisplay.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 height = 2;
 * @return {number}
 */
proto.android.emulation.control.FoldedDisplay.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.FoldedDisplay} returns this
 */
proto.android.emulation.control.FoldedDisplay.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 xOffset = 3;
 * @return {number}
 */
proto.android.emulation.control.FoldedDisplay.prototype.getXoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.FoldedDisplay} returns this
 */
proto.android.emulation.control.FoldedDisplay.prototype.setXoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 yOffset = 4;
 * @return {number}
 */
proto.android.emulation.control.FoldedDisplay.prototype.getYoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.FoldedDisplay} returns this
 */
proto.android.emulation.control.FoldedDisplay.prototype.setYoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.ImageFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.ImageFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.ImageFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ImageFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
format: jspb.Message.getFieldWithDefault(msg, 1, 0),
rotation: (f = msg.getRotation()) && proto.android.emulation.control.Rotation.toObject(includeInstance, f),
width: jspb.Message.getFieldWithDefault(msg, 3, 0),
height: jspb.Message.getFieldWithDefault(msg, 4, 0),
display: jspb.Message.getFieldWithDefault(msg, 5, 0),
transport: (f = msg.getTransport()) && proto.android.emulation.control.ImageTransport.toObject(includeInstance, f),
foldeddisplay: (f = msg.getFoldeddisplay()) && proto.android.emulation.control.FoldedDisplay.toObject(includeInstance, f),
displaymode: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.ImageFormat}
 */
proto.android.emulation.control.ImageFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.ImageFormat;
  return proto.android.emulation.control.ImageFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.ImageFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.ImageFormat}
 */
proto.android.emulation.control.ImageFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.ImageFormat.ImgFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 2:
      var value = new proto.android.emulation.control.Rotation;
      reader.readMessage(value,proto.android.emulation.control.Rotation.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDisplay(value);
      break;
    case 6:
      var value = new proto.android.emulation.control.ImageTransport;
      reader.readMessage(value,proto.android.emulation.control.ImageTransport.deserializeBinaryFromReader);
      msg.setTransport(value);
      break;
    case 7:
      var value = new proto.android.emulation.control.FoldedDisplay;
      reader.readMessage(value,proto.android.emulation.control.FoldedDisplay.deserializeBinaryFromReader);
      msg.setFoldeddisplay(value);
      break;
    case 8:
      var value = /** @type {!proto.android.emulation.control.DisplayModeValue} */ (reader.readEnum());
      msg.setDisplaymode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.ImageFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.ImageFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.ImageFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.ImageFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.android.emulation.control.Rotation.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDisplay();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTransport();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.android.emulation.control.ImageTransport.serializeBinaryToWriter
    );
  }
  f = message.getFoldeddisplay();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.android.emulation.control.FoldedDisplay.serializeBinaryToWriter
    );
  }
  f = message.getDisplaymode();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.ImageFormat.ImgFormat = {
  PNG: 0,
  RGBA8888: 1,
  RGB888: 2
};

/**
 * optional ImgFormat format = 1;
 * @return {!proto.android.emulation.control.ImageFormat.ImgFormat}
 */
proto.android.emulation.control.ImageFormat.prototype.getFormat = function() {
  return /** @type {!proto.android.emulation.control.ImageFormat.ImgFormat} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.ImageFormat.ImgFormat} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Rotation rotation = 2;
 * @return {?proto.android.emulation.control.Rotation}
 */
proto.android.emulation.control.ImageFormat.prototype.getRotation = function() {
  return /** @type{?proto.android.emulation.control.Rotation} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.Rotation, 2));
};


/**
 * @param {?proto.android.emulation.control.Rotation|undefined} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
*/
proto.android.emulation.control.ImageFormat.prototype.setRotation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.ImageFormat.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 width = 3;
 * @return {number}
 */
proto.android.emulation.control.ImageFormat.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 height = 4;
 * @return {number}
 */
proto.android.emulation.control.ImageFormat.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 display = 5;
 * @return {number}
 */
proto.android.emulation.control.ImageFormat.prototype.getDisplay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional ImageTransport transport = 6;
 * @return {?proto.android.emulation.control.ImageTransport}
 */
proto.android.emulation.control.ImageFormat.prototype.getTransport = function() {
  return /** @type{?proto.android.emulation.control.ImageTransport} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.ImageTransport, 6));
};


/**
 * @param {?proto.android.emulation.control.ImageTransport|undefined} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
*/
proto.android.emulation.control.ImageFormat.prototype.setTransport = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.clearTransport = function() {
  return this.setTransport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.ImageFormat.prototype.hasTransport = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FoldedDisplay foldedDisplay = 7;
 * @return {?proto.android.emulation.control.FoldedDisplay}
 */
proto.android.emulation.control.ImageFormat.prototype.getFoldeddisplay = function() {
  return /** @type{?proto.android.emulation.control.FoldedDisplay} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.FoldedDisplay, 7));
};


/**
 * @param {?proto.android.emulation.control.FoldedDisplay|undefined} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
*/
proto.android.emulation.control.ImageFormat.prototype.setFoldeddisplay = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.clearFoldeddisplay = function() {
  return this.setFoldeddisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.ImageFormat.prototype.hasFoldeddisplay = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DisplayModeValue displayMode = 8;
 * @return {!proto.android.emulation.control.DisplayModeValue}
 */
proto.android.emulation.control.ImageFormat.prototype.getDisplaymode = function() {
  return /** @type {!proto.android.emulation.control.DisplayModeValue} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.android.emulation.control.DisplayModeValue} value
 * @return {!proto.android.emulation.control.ImageFormat} returns this
 */
proto.android.emulation.control.ImageFormat.prototype.setDisplaymode = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
format: (f = msg.getFormat()) && proto.android.emulation.control.ImageFormat.toObject(includeInstance, f),
width: jspb.Message.getFieldWithDefault(msg, 2, 0),
height: jspb.Message.getFieldWithDefault(msg, 3, 0),
image: msg.getImage_asB64(),
seq: jspb.Message.getFieldWithDefault(msg, 5, 0),
timestampus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Image}
 */
proto.android.emulation.control.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Image;
  return proto.android.emulation.control.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Image}
 */
proto.android.emulation.control.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android.emulation.control.ImageFormat;
      reader.readMessage(value,proto.android.emulation.control.ImageFormat.deserializeBinaryFromReader);
      msg.setFormat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeq(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.android.emulation.control.ImageFormat.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTimestampus();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional ImageFormat format = 1;
 * @return {?proto.android.emulation.control.ImageFormat}
 */
proto.android.emulation.control.Image.prototype.getFormat = function() {
  return /** @type{?proto.android.emulation.control.ImageFormat} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.ImageFormat, 1));
};


/**
 * @param {?proto.android.emulation.control.ImageFormat|undefined} value
 * @return {!proto.android.emulation.control.Image} returns this
*/
proto.android.emulation.control.Image.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.Image} returns this
 */
proto.android.emulation.control.Image.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.Image.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 width = 2;
 * @return {number}
 */
proto.android.emulation.control.Image.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Image} returns this
 */
proto.android.emulation.control.Image.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 height = 3;
 * @return {number}
 */
proto.android.emulation.control.Image.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Image} returns this
 */
proto.android.emulation.control.Image.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes image = 4;
 * @return {!(string|Uint8Array)}
 */
proto.android.emulation.control.Image.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes image = 4;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.android.emulation.control.Image.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Image.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.android.emulation.control.Image} returns this
 */
proto.android.emulation.control.Image.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional uint32 seq = 5;
 * @return {number}
 */
proto.android.emulation.control.Image.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Image} returns this
 */
proto.android.emulation.control.Image.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 timestampUs = 6;
 * @return {number}
 */
proto.android.emulation.control.Image.prototype.getTimestampus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Image} returns this
 */
proto.android.emulation.control.Image.prototype.setTimestampus = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Rotation.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Rotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Rotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Rotation.toObject = function(includeInstance, msg) {
  var f, obj = {
rotation: jspb.Message.getFieldWithDefault(msg, 1, 0),
xaxis: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
yaxis: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
zaxis: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Rotation}
 */
proto.android.emulation.control.Rotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Rotation;
  return proto.android.emulation.control.Rotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Rotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Rotation}
 */
proto.android.emulation.control.Rotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.Rotation.SkinRotation} */ (reader.readEnum());
      msg.setRotation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXaxis(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYaxis(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZaxis(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Rotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Rotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Rotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Rotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getXaxis();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getYaxis();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getZaxis();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.Rotation.SkinRotation = {
  PORTRAIT: 0,
  LANDSCAPE: 1,
  REVERSE_PORTRAIT: 2,
  REVERSE_LANDSCAPE: 3
};

/**
 * optional SkinRotation rotation = 1;
 * @return {!proto.android.emulation.control.Rotation.SkinRotation}
 */
proto.android.emulation.control.Rotation.prototype.getRotation = function() {
  return /** @type {!proto.android.emulation.control.Rotation.SkinRotation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.Rotation.SkinRotation} value
 * @return {!proto.android.emulation.control.Rotation} returns this
 */
proto.android.emulation.control.Rotation.prototype.setRotation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double xAxis = 2;
 * @return {number}
 */
proto.android.emulation.control.Rotation.prototype.getXaxis = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Rotation} returns this
 */
proto.android.emulation.control.Rotation.prototype.setXaxis = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double yAxis = 3;
 * @return {number}
 */
proto.android.emulation.control.Rotation.prototype.getYaxis = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Rotation} returns this
 */
proto.android.emulation.control.Rotation.prototype.setYaxis = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double zAxis = 4;
 * @return {number}
 */
proto.android.emulation.control.Rotation.prototype.getZaxis = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Rotation} returns this
 */
proto.android.emulation.control.Rotation.prototype.setZaxis = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.PhoneCall.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.PhoneCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.PhoneCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhoneCall.toObject = function(includeInstance, msg) {
  var f, obj = {
operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
number: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.PhoneCall}
 */
proto.android.emulation.control.PhoneCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.PhoneCall;
  return proto.android.emulation.control.PhoneCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.PhoneCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.PhoneCall}
 */
proto.android.emulation.control.PhoneCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.PhoneCall.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.PhoneCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.PhoneCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.PhoneCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhoneCall.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.PhoneCall.Operation = {
  INITCALL: 0,
  ACCEPTCALL: 1,
  REJECTCALLEXPLICIT: 2,
  REJECTCALLBUSY: 3,
  DISCONNECTCALL: 4,
  PLACECALLONHOLD: 5,
  TAKECALLOFFHOLD: 6
};

/**
 * optional Operation operation = 1;
 * @return {!proto.android.emulation.control.PhoneCall.Operation}
 */
proto.android.emulation.control.PhoneCall.prototype.getOperation = function() {
  return /** @type {!proto.android.emulation.control.PhoneCall.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.PhoneCall.Operation} value
 * @return {!proto.android.emulation.control.PhoneCall} returns this
 */
proto.android.emulation.control.PhoneCall.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.android.emulation.control.PhoneCall.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.PhoneCall} returns this
 */
proto.android.emulation.control.PhoneCall.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.PhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.PhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.PhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
response: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.PhoneResponse}
 */
proto.android.emulation.control.PhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.PhoneResponse;
  return proto.android.emulation.control.PhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.PhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.PhoneResponse}
 */
proto.android.emulation.control.PhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.PhoneResponse.Response} */ (reader.readEnum());
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.PhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.PhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.PhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.PhoneResponse.Response = {
  OK: 0,
  BADOPERATION: 1,
  BADNUMBER: 2,
  INVALIDACTION: 3,
  ACTIONFAILED: 4,
  RADIOOFF: 5
};

/**
 * optional Response response = 1;
 * @return {!proto.android.emulation.control.PhoneResponse.Response}
 */
proto.android.emulation.control.PhoneResponse.prototype.getResponse = function() {
  return /** @type {!proto.android.emulation.control.PhoneResponse.Response} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.PhoneResponse.Response} value
 * @return {!proto.android.emulation.control.PhoneResponse} returns this
 */
proto.android.emulation.control.PhoneResponse.prototype.setResponse = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Entry}
 */
proto.android.emulation.control.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Entry;
  return proto.android.emulation.control.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Entry}
 */
proto.android.emulation.control.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.android.emulation.control.Entry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.Entry} returns this
 */
proto.android.emulation.control.Entry.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.android.emulation.control.Entry.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.Entry} returns this
 */
proto.android.emulation.control.Entry.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android.emulation.control.EntryList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.EntryList.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.EntryList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.EntryList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.EntryList.toObject = function(includeInstance, msg) {
  var f, obj = {
entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.android.emulation.control.Entry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.EntryList}
 */
proto.android.emulation.control.EntryList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.EntryList;
  return proto.android.emulation.control.EntryList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.EntryList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.EntryList}
 */
proto.android.emulation.control.EntryList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android.emulation.control.Entry;
      reader.readMessage(value,proto.android.emulation.control.Entry.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.EntryList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.EntryList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.EntryList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.EntryList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.android.emulation.control.Entry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Entry entry = 1;
 * @return {!Array<!proto.android.emulation.control.Entry>}
 */
proto.android.emulation.control.EntryList.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.android.emulation.control.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.android.emulation.control.Entry, 1));
};


/**
 * @param {!Array<!proto.android.emulation.control.Entry>} value
 * @return {!proto.android.emulation.control.EntryList} returns this
*/
proto.android.emulation.control.EntryList.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.android.emulation.control.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.android.emulation.control.Entry}
 */
proto.android.emulation.control.EntryList.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.android.emulation.control.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android.emulation.control.EntryList} returns this
 */
proto.android.emulation.control.EntryList.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.EmulatorStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.EmulatorStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.EmulatorStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.EmulatorStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
version: jspb.Message.getFieldWithDefault(msg, 1, ""),
uptime: jspb.Message.getFieldWithDefault(msg, 2, 0),
booted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
vmconfig: (f = msg.getVmconfig()) && proto.android.emulation.control.VmConfiguration.toObject(includeInstance, f),
hardwareconfig: (f = msg.getHardwareconfig()) && proto.android.emulation.control.EntryList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.EmulatorStatus}
 */
proto.android.emulation.control.EmulatorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.EmulatorStatus;
  return proto.android.emulation.control.EmulatorStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.EmulatorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.EmulatorStatus}
 */
proto.android.emulation.control.EmulatorStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUptime(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBooted(value);
      break;
    case 4:
      var value = new proto.android.emulation.control.VmConfiguration;
      reader.readMessage(value,proto.android.emulation.control.VmConfiguration.deserializeBinaryFromReader);
      msg.setVmconfig(value);
      break;
    case 5:
      var value = new proto.android.emulation.control.EntryList;
      reader.readMessage(value,proto.android.emulation.control.EntryList.deserializeBinaryFromReader);
      msg.setHardwareconfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.EmulatorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.EmulatorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.EmulatorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.EmulatorStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUptime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBooted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getVmconfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.android.emulation.control.VmConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getHardwareconfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.android.emulation.control.EntryList.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.android.emulation.control.EmulatorStatus.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
 */
proto.android.emulation.control.EmulatorStatus.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 uptime = 2;
 * @return {number}
 */
proto.android.emulation.control.EmulatorStatus.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
 */
proto.android.emulation.control.EmulatorStatus.prototype.setUptime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool booted = 3;
 * @return {boolean}
 */
proto.android.emulation.control.EmulatorStatus.prototype.getBooted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
 */
proto.android.emulation.control.EmulatorStatus.prototype.setBooted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional VmConfiguration vmConfig = 4;
 * @return {?proto.android.emulation.control.VmConfiguration}
 */
proto.android.emulation.control.EmulatorStatus.prototype.getVmconfig = function() {
  return /** @type{?proto.android.emulation.control.VmConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.VmConfiguration, 4));
};


/**
 * @param {?proto.android.emulation.control.VmConfiguration|undefined} value
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
*/
proto.android.emulation.control.EmulatorStatus.prototype.setVmconfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
 */
proto.android.emulation.control.EmulatorStatus.prototype.clearVmconfig = function() {
  return this.setVmconfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.EmulatorStatus.prototype.hasVmconfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EntryList hardwareConfig = 5;
 * @return {?proto.android.emulation.control.EntryList}
 */
proto.android.emulation.control.EmulatorStatus.prototype.getHardwareconfig = function() {
  return /** @type{?proto.android.emulation.control.EntryList} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.EntryList, 5));
};


/**
 * @param {?proto.android.emulation.control.EntryList|undefined} value
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
*/
proto.android.emulation.control.EmulatorStatus.prototype.setHardwareconfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.EmulatorStatus} returns this
 */
proto.android.emulation.control.EmulatorStatus.prototype.clearHardwareconfig = function() {
  return this.setHardwareconfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.EmulatorStatus.prototype.hasHardwareconfig = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.AudioFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.AudioFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.AudioFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.AudioFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
samplingrate: jspb.Message.getFieldWithDefault(msg, 1, 0),
channels: jspb.Message.getFieldWithDefault(msg, 2, 0),
format: jspb.Message.getFieldWithDefault(msg, 3, 0),
mode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.AudioFormat}
 */
proto.android.emulation.control.AudioFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.AudioFormat;
  return proto.android.emulation.control.AudioFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.AudioFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.AudioFormat}
 */
proto.android.emulation.control.AudioFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSamplingrate(value);
      break;
    case 2:
      var value = /** @type {!proto.android.emulation.control.AudioFormat.Channels} */ (reader.readEnum());
      msg.setChannels(value);
      break;
    case 3:
      var value = /** @type {!proto.android.emulation.control.AudioFormat.SampleFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 4:
      var value = /** @type {!proto.android.emulation.control.AudioFormat.DeliveryMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.AudioFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.AudioFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.AudioFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.AudioFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSamplingrate();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getChannels();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.AudioFormat.SampleFormat = {
  AUD_FMT_U8: 0,
  AUD_FMT_S16: 1
};

/**
 * @enum {number}
 */
proto.android.emulation.control.AudioFormat.Channels = {
  MONO: 0,
  STEREO: 1
};

/**
 * @enum {number}
 */
proto.android.emulation.control.AudioFormat.DeliveryMode = {
  MODE_UNSPECIFIED: 0,
  MODE_REAL_TIME: 1
};

/**
 * optional uint64 samplingRate = 1;
 * @return {number}
 */
proto.android.emulation.control.AudioFormat.prototype.getSamplingrate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.AudioFormat} returns this
 */
proto.android.emulation.control.AudioFormat.prototype.setSamplingrate = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Channels channels = 2;
 * @return {!proto.android.emulation.control.AudioFormat.Channels}
 */
proto.android.emulation.control.AudioFormat.prototype.getChannels = function() {
  return /** @type {!proto.android.emulation.control.AudioFormat.Channels} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.android.emulation.control.AudioFormat.Channels} value
 * @return {!proto.android.emulation.control.AudioFormat} returns this
 */
proto.android.emulation.control.AudioFormat.prototype.setChannels = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SampleFormat format = 3;
 * @return {!proto.android.emulation.control.AudioFormat.SampleFormat}
 */
proto.android.emulation.control.AudioFormat.prototype.getFormat = function() {
  return /** @type {!proto.android.emulation.control.AudioFormat.SampleFormat} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.android.emulation.control.AudioFormat.SampleFormat} value
 * @return {!proto.android.emulation.control.AudioFormat} returns this
 */
proto.android.emulation.control.AudioFormat.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional DeliveryMode mode = 4;
 * @return {!proto.android.emulation.control.AudioFormat.DeliveryMode}
 */
proto.android.emulation.control.AudioFormat.prototype.getMode = function() {
  return /** @type {!proto.android.emulation.control.AudioFormat.DeliveryMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.android.emulation.control.AudioFormat.DeliveryMode} value
 * @return {!proto.android.emulation.control.AudioFormat} returns this
 */
proto.android.emulation.control.AudioFormat.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.AudioPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.AudioPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.AudioPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.AudioPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
format: (f = msg.getFormat()) && proto.android.emulation.control.AudioFormat.toObject(includeInstance, f),
timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
audio: msg.getAudio_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.AudioPacket}
 */
proto.android.emulation.control.AudioPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.AudioPacket;
  return proto.android.emulation.control.AudioPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.AudioPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.AudioPacket}
 */
proto.android.emulation.control.AudioPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android.emulation.control.AudioFormat;
      reader.readMessage(value,proto.android.emulation.control.AudioFormat.deserializeBinaryFromReader);
      msg.setFormat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.AudioPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.AudioPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.AudioPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.AudioPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.android.emulation.control.AudioFormat.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional AudioFormat format = 1;
 * @return {?proto.android.emulation.control.AudioFormat}
 */
proto.android.emulation.control.AudioPacket.prototype.getFormat = function() {
  return /** @type{?proto.android.emulation.control.AudioFormat} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.AudioFormat, 1));
};


/**
 * @param {?proto.android.emulation.control.AudioFormat|undefined} value
 * @return {!proto.android.emulation.control.AudioPacket} returns this
*/
proto.android.emulation.control.AudioPacket.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.AudioPacket} returns this
 */
proto.android.emulation.control.AudioPacket.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.AudioPacket.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.android.emulation.control.AudioPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.AudioPacket} returns this
 */
proto.android.emulation.control.AudioPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes audio = 3;
 * @return {!(string|Uint8Array)}
 */
proto.android.emulation.control.AudioPacket.prototype.getAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes audio = 3;
 * This is a type-conversion wrapper around `getAudio()`
 * @return {string}
 */
proto.android.emulation.control.AudioPacket.prototype.getAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudio()));
};


/**
 * optional bytes audio = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudio()`
 * @return {!Uint8Array}
 */
proto.android.emulation.control.AudioPacket.prototype.getAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.android.emulation.control.AudioPacket} returns this
 */
proto.android.emulation.control.AudioPacket.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.SmsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.SmsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.SmsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.SmsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
srcaddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.SmsMessage}
 */
proto.android.emulation.control.SmsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.SmsMessage;
  return proto.android.emulation.control.SmsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.SmsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.SmsMessage}
 */
proto.android.emulation.control.SmsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcaddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.SmsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.SmsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.SmsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.SmsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string srcAddress = 1;
 * @return {string}
 */
proto.android.emulation.control.SmsMessage.prototype.getSrcaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.SmsMessage} returns this
 */
proto.android.emulation.control.SmsMessage.prototype.setSrcaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.android.emulation.control.SmsMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.SmsMessage} returns this
 */
proto.android.emulation.control.SmsMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.DisplayConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.DisplayConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
width: jspb.Message.getFieldWithDefault(msg, 1, 0),
height: jspb.Message.getFieldWithDefault(msg, 2, 0),
dpi: jspb.Message.getFieldWithDefault(msg, 3, 0),
flags: jspb.Message.getFieldWithDefault(msg, 4, 0),
display: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.DisplayConfiguration}
 */
proto.android.emulation.control.DisplayConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.DisplayConfiguration;
  return proto.android.emulation.control.DisplayConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.DisplayConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.DisplayConfiguration}
 */
proto.android.emulation.control.DisplayConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDpi(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlags(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.DisplayConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.DisplayConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDpi();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getFlags();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDisplay();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.DisplayConfiguration.DisplayFlags = {
  DISPLAYFLAGS_UNSPECIFIED: 0,
  VIRTUAL_DISPLAY_FLAG_PUBLIC: 1,
  VIRTUAL_DISPLAY_FLAG_PRESENTATION: 2,
  VIRTUAL_DISPLAY_FLAG_SECURE: 4,
  VIRTUAL_DISPLAY_FLAG_OWN_CONTENT_ONLY: 8,
  VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR: 16
};

/**
 * optional uint32 width = 1;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfiguration} returns this
 */
proto.android.emulation.control.DisplayConfiguration.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 height = 2;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfiguration} returns this
 */
proto.android.emulation.control.DisplayConfiguration.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 dpi = 3;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.getDpi = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfiguration} returns this
 */
proto.android.emulation.control.DisplayConfiguration.prototype.setDpi = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 flags = 4;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.getFlags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfiguration} returns this
 */
proto.android.emulation.control.DisplayConfiguration.prototype.setFlags = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 display = 5;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfiguration.prototype.getDisplay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfiguration} returns this
 */
proto.android.emulation.control.DisplayConfiguration.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android.emulation.control.DisplayConfigurations.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.DisplayConfigurations.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.DisplayConfigurations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.DisplayConfigurations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayConfigurations.toObject = function(includeInstance, msg) {
  var f, obj = {
displaysList: jspb.Message.toObjectList(msg.getDisplaysList(),
    proto.android.emulation.control.DisplayConfiguration.toObject, includeInstance),
userconfigurable: jspb.Message.getFieldWithDefault(msg, 2, 0),
maxdisplays: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.DisplayConfigurations}
 */
proto.android.emulation.control.DisplayConfigurations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.DisplayConfigurations;
  return proto.android.emulation.control.DisplayConfigurations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.DisplayConfigurations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.DisplayConfigurations}
 */
proto.android.emulation.control.DisplayConfigurations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android.emulation.control.DisplayConfiguration;
      reader.readMessage(value,proto.android.emulation.control.DisplayConfiguration.deserializeBinaryFromReader);
      msg.addDisplays(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserconfigurable(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxdisplays(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.DisplayConfigurations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.DisplayConfigurations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.DisplayConfigurations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayConfigurations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.android.emulation.control.DisplayConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getUserconfigurable();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxdisplays();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * repeated DisplayConfiguration displays = 1;
 * @return {!Array<!proto.android.emulation.control.DisplayConfiguration>}
 */
proto.android.emulation.control.DisplayConfigurations.prototype.getDisplaysList = function() {
  return /** @type{!Array<!proto.android.emulation.control.DisplayConfiguration>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.android.emulation.control.DisplayConfiguration, 1));
};


/**
 * @param {!Array<!proto.android.emulation.control.DisplayConfiguration>} value
 * @return {!proto.android.emulation.control.DisplayConfigurations} returns this
*/
proto.android.emulation.control.DisplayConfigurations.prototype.setDisplaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.android.emulation.control.DisplayConfiguration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.android.emulation.control.DisplayConfiguration}
 */
proto.android.emulation.control.DisplayConfigurations.prototype.addDisplays = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.android.emulation.control.DisplayConfiguration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android.emulation.control.DisplayConfigurations} returns this
 */
proto.android.emulation.control.DisplayConfigurations.prototype.clearDisplaysList = function() {
  return this.setDisplaysList([]);
};


/**
 * optional uint32 userConfigurable = 2;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfigurations.prototype.getUserconfigurable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfigurations} returns this
 */
proto.android.emulation.control.DisplayConfigurations.prototype.setUserconfigurable = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 maxDisplays = 3;
 * @return {number}
 */
proto.android.emulation.control.DisplayConfigurations.prototype.getMaxdisplays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.DisplayConfigurations} returns this
 */
proto.android.emulation.control.DisplayConfigurations.prototype.setMaxdisplays = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.android.emulation.control.Notification.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.android.emulation.control.Notification.TypeCase = {
  TYPE_NOT_SET: 0,
  CAMERANOTIFICATION: 2,
  DISPLAYCONFIGURATIONSCHANGEDNOTIFICATION: 3
};

/**
 * @return {proto.android.emulation.control.Notification.TypeCase}
 */
proto.android.emulation.control.Notification.prototype.getTypeCase = function() {
  return /** @type {proto.android.emulation.control.Notification.TypeCase} */(jspb.Message.computeOneofCase(this, proto.android.emulation.control.Notification.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Notification.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Notification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Notification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Notification.toObject = function(includeInstance, msg) {
  var f, obj = {
event: jspb.Message.getFieldWithDefault(msg, 1, 0),
cameranotification: (f = msg.getCameranotification()) && proto.android.emulation.control.CameraNotification.toObject(includeInstance, f),
displayconfigurationschangednotification: (f = msg.getDisplayconfigurationschangednotification()) && proto.android.emulation.control.DisplayConfigurationsChangedNotification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Notification}
 */
proto.android.emulation.control.Notification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Notification;
  return proto.android.emulation.control.Notification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Notification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Notification}
 */
proto.android.emulation.control.Notification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.android.emulation.control.Notification.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new proto.android.emulation.control.CameraNotification;
      reader.readMessage(value,proto.android.emulation.control.CameraNotification.deserializeBinaryFromReader);
      msg.setCameranotification(value);
      break;
    case 3:
      var value = new proto.android.emulation.control.DisplayConfigurationsChangedNotification;
      reader.readMessage(value,proto.android.emulation.control.DisplayConfigurationsChangedNotification.deserializeBinaryFromReader);
      msg.setDisplayconfigurationschangednotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Notification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Notification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Notification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Notification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCameranotification();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.android.emulation.control.CameraNotification.serializeBinaryToWriter
    );
  }
  f = message.getDisplayconfigurationschangednotification();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.android.emulation.control.DisplayConfigurationsChangedNotification.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.Notification.EventType = {
  VIRTUAL_SCENE_CAMERA_INACTIVE: 0,
  VIRTUAL_SCENE_CAMERA_ACTIVE: 1,
  DISPLAY_CONFIGURATIONS_CHANGED_UI: 2
};

/**
 * optional EventType event = 1;
 * @return {!proto.android.emulation.control.Notification.EventType}
 */
proto.android.emulation.control.Notification.prototype.getEvent = function() {
  return /** @type {!proto.android.emulation.control.Notification.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.android.emulation.control.Notification.EventType} value
 * @return {!proto.android.emulation.control.Notification} returns this
 */
proto.android.emulation.control.Notification.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CameraNotification cameraNotification = 2;
 * @return {?proto.android.emulation.control.CameraNotification}
 */
proto.android.emulation.control.Notification.prototype.getCameranotification = function() {
  return /** @type{?proto.android.emulation.control.CameraNotification} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.CameraNotification, 2));
};


/**
 * @param {?proto.android.emulation.control.CameraNotification|undefined} value
 * @return {!proto.android.emulation.control.Notification} returns this
*/
proto.android.emulation.control.Notification.prototype.setCameranotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.android.emulation.control.Notification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.Notification} returns this
 */
proto.android.emulation.control.Notification.prototype.clearCameranotification = function() {
  return this.setCameranotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.Notification.prototype.hasCameranotification = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DisplayConfigurationsChangedNotification displayConfigurationsChangedNotification = 3;
 * @return {?proto.android.emulation.control.DisplayConfigurationsChangedNotification}
 */
proto.android.emulation.control.Notification.prototype.getDisplayconfigurationschangednotification = function() {
  return /** @type{?proto.android.emulation.control.DisplayConfigurationsChangedNotification} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.DisplayConfigurationsChangedNotification, 3));
};


/**
 * @param {?proto.android.emulation.control.DisplayConfigurationsChangedNotification|undefined} value
 * @return {!proto.android.emulation.control.Notification} returns this
*/
proto.android.emulation.control.Notification.prototype.setDisplayconfigurationschangednotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.android.emulation.control.Notification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.Notification} returns this
 */
proto.android.emulation.control.Notification.prototype.clearDisplayconfigurationschangednotification = function() {
  return this.setDisplayconfigurationschangednotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.Notification.prototype.hasDisplayconfigurationschangednotification = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.CameraNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.CameraNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.CameraNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.CameraNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
display: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.CameraNotification}
 */
proto.android.emulation.control.CameraNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.CameraNotification;
  return proto.android.emulation.control.CameraNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.CameraNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.CameraNotification}
 */
proto.android.emulation.control.CameraNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.CameraNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.CameraNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.CameraNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.CameraNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDisplay();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.android.emulation.control.CameraNotification.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.android.emulation.control.CameraNotification} returns this
 */
proto.android.emulation.control.CameraNotification.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 display = 2;
 * @return {number}
 */
proto.android.emulation.control.CameraNotification.prototype.getDisplay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.CameraNotification} returns this
 */
proto.android.emulation.control.CameraNotification.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.DisplayConfigurationsChangedNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.DisplayConfigurationsChangedNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
displayconfigurations: (f = msg.getDisplayconfigurations()) && proto.android.emulation.control.DisplayConfigurations.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.DisplayConfigurationsChangedNotification}
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.DisplayConfigurationsChangedNotification;
  return proto.android.emulation.control.DisplayConfigurationsChangedNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.DisplayConfigurationsChangedNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.DisplayConfigurationsChangedNotification}
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android.emulation.control.DisplayConfigurations;
      reader.readMessage(value,proto.android.emulation.control.DisplayConfigurations.deserializeBinaryFromReader);
      msg.setDisplayconfigurations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.DisplayConfigurationsChangedNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.DisplayConfigurationsChangedNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayconfigurations();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.android.emulation.control.DisplayConfigurations.serializeBinaryToWriter
    );
  }
};


/**
 * optional DisplayConfigurations displayConfigurations = 1;
 * @return {?proto.android.emulation.control.DisplayConfigurations}
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.prototype.getDisplayconfigurations = function() {
  return /** @type{?proto.android.emulation.control.DisplayConfigurations} */ (
    jspb.Message.getWrapperField(this, proto.android.emulation.control.DisplayConfigurations, 1));
};


/**
 * @param {?proto.android.emulation.control.DisplayConfigurations|undefined} value
 * @return {!proto.android.emulation.control.DisplayConfigurationsChangedNotification} returns this
*/
proto.android.emulation.control.DisplayConfigurationsChangedNotification.prototype.setDisplayconfigurations = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.android.emulation.control.DisplayConfigurationsChangedNotification} returns this
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.prototype.clearDisplayconfigurations = function() {
  return this.setDisplayconfigurations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.android.emulation.control.DisplayConfigurationsChangedNotification.prototype.hasDisplayconfigurations = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.RotationRadian.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.RotationRadian.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.RotationRadian} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.RotationRadian.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.RotationRadian}
 */
proto.android.emulation.control.RotationRadian.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.RotationRadian;
  return proto.android.emulation.control.RotationRadian.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.RotationRadian} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.RotationRadian}
 */
proto.android.emulation.control.RotationRadian.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.RotationRadian.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.RotationRadian.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.RotationRadian} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.RotationRadian.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.android.emulation.control.RotationRadian.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.RotationRadian} returns this
 */
proto.android.emulation.control.RotationRadian.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.android.emulation.control.RotationRadian.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.RotationRadian} returns this
 */
proto.android.emulation.control.RotationRadian.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z = 3;
 * @return {number}
 */
proto.android.emulation.control.RotationRadian.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.RotationRadian} returns this
 */
proto.android.emulation.control.RotationRadian.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Velocity.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Velocity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Velocity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Velocity.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Velocity}
 */
proto.android.emulation.control.Velocity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Velocity;
  return proto.android.emulation.control.Velocity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Velocity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Velocity}
 */
proto.android.emulation.control.Velocity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Velocity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Velocity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Velocity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Velocity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.android.emulation.control.Velocity.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Velocity} returns this
 */
proto.android.emulation.control.Velocity.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.android.emulation.control.Velocity.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Velocity} returns this
 */
proto.android.emulation.control.Velocity.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z = 3;
 * @return {number}
 */
proto.android.emulation.control.Velocity.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.android.emulation.control.Velocity} returns this
 */
proto.android.emulation.control.Velocity.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.Posture.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.Posture.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.Posture} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Posture.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.Posture}
 */
proto.android.emulation.control.Posture.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.Posture;
  return proto.android.emulation.control.Posture.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.Posture} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.Posture}
 */
proto.android.emulation.control.Posture.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.android.emulation.control.Posture.PostureValue} */ (reader.readEnum());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.Posture.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.Posture.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.Posture} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.Posture.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.android.emulation.control.Posture.PostureValue = {
  POSTURE_UNKNOWN: 0,
  POSTURE_CLOSED: 1,
  POSTURE_HALF_OPENED: 2,
  POSTURE_OPENED: 3,
  POSTURE_FLIPPED: 4,
  POSTURE_TENT: 5,
  POSTURE_MAX: 6
};

/**
 * optional PostureValue value = 3;
 * @return {!proto.android.emulation.control.Posture.PostureValue}
 */
proto.android.emulation.control.Posture.prototype.getValue = function() {
  return /** @type {!proto.android.emulation.control.Posture.PostureValue} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.android.emulation.control.Posture.PostureValue} value
 * @return {!proto.android.emulation.control.Posture} returns this
 */
proto.android.emulation.control.Posture.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android.emulation.control.PhoneNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.android.emulation.control.PhoneNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android.emulation.control.PhoneNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhoneNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
number: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android.emulation.control.PhoneNumber}
 */
proto.android.emulation.control.PhoneNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android.emulation.control.PhoneNumber;
  return proto.android.emulation.control.PhoneNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android.emulation.control.PhoneNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android.emulation.control.PhoneNumber}
 */
proto.android.emulation.control.PhoneNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android.emulation.control.PhoneNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android.emulation.control.PhoneNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android.emulation.control.PhoneNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android.emulation.control.PhoneNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.android.emulation.control.PhoneNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.android.emulation.control.PhoneNumber} returns this
 */
proto.android.emulation.control.PhoneNumber.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.android.emulation.control.DisplayModeValue = {
  PHONE: 0,
  FOLDABLE: 1,
  TABLET: 2,
  DESKTOP: 3
};

goog.object.extend(exports, proto.android.emulation.control);

// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (C) 2018 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Note that if you add/remove methods in this file you must update
// the metrics sql as well ./android/scripts/gen-grpc-sql.py
//
// Please group deleted methods in a block including the date (MM/DD/YY)
// it was removed. This enables us to easily keep metrics around after removal
//
// List of deleted methods
// rpc iWasDeleted (03/12/12)
// ...
'use strict';
var grpc = require('grpc');
var proto_emulator_controller_pb = require('../proto/emulator_controller_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_android_emulation_control_AudioFormat(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.AudioFormat)) {
    throw new Error('Expected argument of type android.emulation.control.AudioFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_AudioFormat(buffer_arg) {
  return proto_emulator_controller_pb.AudioFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_AudioPacket(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.AudioPacket)) {
    throw new Error('Expected argument of type android.emulation.control.AudioPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_AudioPacket(buffer_arg) {
  return proto_emulator_controller_pb.AudioPacket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_BatteryState(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.BatteryState)) {
    throw new Error('Expected argument of type android.emulation.control.BatteryState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_BatteryState(buffer_arg) {
  return proto_emulator_controller_pb.BatteryState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_BrightnessValue(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.BrightnessValue)) {
    throw new Error('Expected argument of type android.emulation.control.BrightnessValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_BrightnessValue(buffer_arg) {
  return proto_emulator_controller_pb.BrightnessValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_ClipData(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.ClipData)) {
    throw new Error('Expected argument of type android.emulation.control.ClipData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_ClipData(buffer_arg) {
  return proto_emulator_controller_pb.ClipData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_DisplayConfigurations(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.DisplayConfigurations)) {
    throw new Error('Expected argument of type android.emulation.control.DisplayConfigurations');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_DisplayConfigurations(buffer_arg) {
  return proto_emulator_controller_pb.DisplayConfigurations.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_DisplayMode(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.DisplayMode)) {
    throw new Error('Expected argument of type android.emulation.control.DisplayMode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_DisplayMode(buffer_arg) {
  return proto_emulator_controller_pb.DisplayMode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_EmulatorStatus(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.EmulatorStatus)) {
    throw new Error('Expected argument of type android.emulation.control.EmulatorStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_EmulatorStatus(buffer_arg) {
  return proto_emulator_controller_pb.EmulatorStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Fingerprint(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.Fingerprint)) {
    throw new Error('Expected argument of type android.emulation.control.Fingerprint');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Fingerprint(buffer_arg) {
  return proto_emulator_controller_pb.Fingerprint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_GpsState(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.GpsState)) {
    throw new Error('Expected argument of type android.emulation.control.GpsState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_GpsState(buffer_arg) {
  return proto_emulator_controller_pb.GpsState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Image(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.Image)) {
    throw new Error('Expected argument of type android.emulation.control.Image');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Image(buffer_arg) {
  return proto_emulator_controller_pb.Image.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_ImageFormat(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.ImageFormat)) {
    throw new Error('Expected argument of type android.emulation.control.ImageFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_ImageFormat(buffer_arg) {
  return proto_emulator_controller_pb.ImageFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_KeyboardEvent(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.KeyboardEvent)) {
    throw new Error('Expected argument of type android.emulation.control.KeyboardEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_KeyboardEvent(buffer_arg) {
  return proto_emulator_controller_pb.KeyboardEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_LogMessage(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.LogMessage)) {
    throw new Error('Expected argument of type android.emulation.control.LogMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_LogMessage(buffer_arg) {
  return proto_emulator_controller_pb.LogMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_MouseEvent(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.MouseEvent)) {
    throw new Error('Expected argument of type android.emulation.control.MouseEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_MouseEvent(buffer_arg) {
  return proto_emulator_controller_pb.MouseEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Notification(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.Notification)) {
    throw new Error('Expected argument of type android.emulation.control.Notification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Notification(buffer_arg) {
  return proto_emulator_controller_pb.Notification.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhoneCall(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.PhoneCall)) {
    throw new Error('Expected argument of type android.emulation.control.PhoneCall');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhoneCall(buffer_arg) {
  return proto_emulator_controller_pb.PhoneCall.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhoneNumber(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.PhoneNumber)) {
    throw new Error('Expected argument of type android.emulation.control.PhoneNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhoneNumber(buffer_arg) {
  return proto_emulator_controller_pb.PhoneNumber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhoneResponse(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.PhoneResponse)) {
    throw new Error('Expected argument of type android.emulation.control.PhoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhoneResponse(buffer_arg) {
  return proto_emulator_controller_pb.PhoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_PhysicalModelValue(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.PhysicalModelValue)) {
    throw new Error('Expected argument of type android.emulation.control.PhysicalModelValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_PhysicalModelValue(buffer_arg) {
  return proto_emulator_controller_pb.PhysicalModelValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Posture(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.Posture)) {
    throw new Error('Expected argument of type android.emulation.control.Posture');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Posture(buffer_arg) {
  return proto_emulator_controller_pb.Posture.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_RotationRadian(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.RotationRadian)) {
    throw new Error('Expected argument of type android.emulation.control.RotationRadian');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_RotationRadian(buffer_arg) {
  return proto_emulator_controller_pb.RotationRadian.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_SensorValue(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.SensorValue)) {
    throw new Error('Expected argument of type android.emulation.control.SensorValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_SensorValue(buffer_arg) {
  return proto_emulator_controller_pb.SensorValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_SmsMessage(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.SmsMessage)) {
    throw new Error('Expected argument of type android.emulation.control.SmsMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_SmsMessage(buffer_arg) {
  return proto_emulator_controller_pb.SmsMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_TouchEvent(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.TouchEvent)) {
    throw new Error('Expected argument of type android.emulation.control.TouchEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_TouchEvent(buffer_arg) {
  return proto_emulator_controller_pb.TouchEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_Velocity(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.Velocity)) {
    throw new Error('Expected argument of type android.emulation.control.Velocity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_Velocity(buffer_arg) {
  return proto_emulator_controller_pb.Velocity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_VmRunState(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.VmRunState)) {
    throw new Error('Expected argument of type android.emulation.control.VmRunState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_VmRunState(buffer_arg) {
  return proto_emulator_controller_pb.VmRunState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_android_emulation_control_WheelEvent(arg) {
  if (!(arg instanceof proto_emulator_controller_pb.WheelEvent)) {
    throw new Error('Expected argument of type android.emulation.control.WheelEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_android_emulation_control_WheelEvent(buffer_arg) {
  return proto_emulator_controller_pb.WheelEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// An EmulatorController service lets you control the emulator.
// Note that this is currently an experimental feature, and that the
// service definition might change without notice. Use at your own risk!
//
// We use the following rough conventions:
//
// streamXXX --> streams values XXX (usually for emulator lifetime). Values
//               are updated as soon as they become available.
// getXXX    --> gets a single value XXX
// setXXX    --> sets a single value XXX, does not returning state, these
//               usually have an observable lasting side effect.
// sendXXX   --> send a single event XXX, possibly returning state information.
//               android usually responds to these events.
var EmulatorControllerService = exports.EmulatorControllerService = {
  // set/get/stream the sensor data
streamSensor: {
    path: '/android.emulation.control.EmulatorController/streamSensor',
    requestStream: false,
    responseStream: true,
    requestType: proto_emulator_controller_pb.SensorValue,
    responseType: proto_emulator_controller_pb.SensorValue,
    requestSerialize: serialize_android_emulation_control_SensorValue,
    requestDeserialize: deserialize_android_emulation_control_SensorValue,
    responseSerialize: serialize_android_emulation_control_SensorValue,
    responseDeserialize: deserialize_android_emulation_control_SensorValue,
  },
  getSensor: {
    path: '/android.emulation.control.EmulatorController/getSensor',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.SensorValue,
    responseType: proto_emulator_controller_pb.SensorValue,
    requestSerialize: serialize_android_emulation_control_SensorValue,
    requestDeserialize: deserialize_android_emulation_control_SensorValue,
    responseSerialize: serialize_android_emulation_control_SensorValue,
    responseDeserialize: deserialize_android_emulation_control_SensorValue,
  },
  setSensor: {
    path: '/android.emulation.control.EmulatorController/setSensor',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.SensorValue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_SensorValue,
    requestDeserialize: deserialize_android_emulation_control_SensorValue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // set/get/stream the physical model, this is likely the one you are
// looking for when you wish to modify the device state.
setPhysicalModel: {
    path: '/android.emulation.control.EmulatorController/setPhysicalModel',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.PhysicalModelValue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_PhysicalModelValue,
    requestDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getPhysicalModel: {
    path: '/android.emulation.control.EmulatorController/getPhysicalModel',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.PhysicalModelValue,
    responseType: proto_emulator_controller_pb.PhysicalModelValue,
    requestSerialize: serialize_android_emulation_control_PhysicalModelValue,
    requestDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
    responseSerialize: serialize_android_emulation_control_PhysicalModelValue,
    responseDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
  },
  streamPhysicalModel: {
    path: '/android.emulation.control.EmulatorController/streamPhysicalModel',
    requestStream: false,
    responseStream: true,
    requestType: proto_emulator_controller_pb.PhysicalModelValue,
    responseType: proto_emulator_controller_pb.PhysicalModelValue,
    requestSerialize: serialize_android_emulation_control_PhysicalModelValue,
    requestDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
    responseSerialize: serialize_android_emulation_control_PhysicalModelValue,
    responseDeserialize: deserialize_android_emulation_control_PhysicalModelValue,
  },
  // Atomically set/get the current primary clipboard data.
setClipboard: {
    path: '/android.emulation.control.EmulatorController/setClipboard',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.ClipData,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_ClipData,
    requestDeserialize: deserialize_android_emulation_control_ClipData,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getClipboard: {
    path: '/android.emulation.control.EmulatorController/getClipboard',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.ClipData,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_ClipData,
    responseDeserialize: deserialize_android_emulation_control_ClipData,
  },
  // Streams the current data on the clipboard. This will immediately produce
// a result with the current state of the clipboard after which the stream
// will block and wait until a new clip event is available from the guest.
// Calling the setClipboard method above will not result in generating a
// clip event. It is possible to lose clipboard events if the clipboard
// updates very rapidly.
streamClipboard: {
    path: '/android.emulation.control.EmulatorController/streamClipboard',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.ClipData,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_ClipData,
    responseDeserialize: deserialize_android_emulation_control_ClipData,
  },
  // Set/get the battery to the given state.
setBattery: {
    path: '/android.emulation.control.EmulatorController/setBattery',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.BatteryState,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_BatteryState,
    requestDeserialize: deserialize_android_emulation_control_BatteryState,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getBattery: {
    path: '/android.emulation.control.EmulatorController/getBattery',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.BatteryState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_BatteryState,
    responseDeserialize: deserialize_android_emulation_control_BatteryState,
  },
  // Set the state of the gps.
// Note: Setting the gps position will not be reflected in the user
// interface. Keep in mind that android usually only samples the gps at 1
// hz.
setGps: {
    path: '/android.emulation.control.EmulatorController/setGps',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.GpsState,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_GpsState,
    requestDeserialize: deserialize_android_emulation_control_GpsState,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the latest gps state as delivered by the setGps call, or location ui
// if active.
//
// Note: this is not necessarily the actual gps coordinate visible at the
// time, due to gps sample frequency (usually 1hz).
getGps: {
    path: '/android.emulation.control.EmulatorController/getGps',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.GpsState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_GpsState,
    responseDeserialize: deserialize_android_emulation_control_GpsState,
  },
  // Simulate a touch event on the finger print sensor.
sendFingerprint: {
    path: '/android.emulation.control.EmulatorController/sendFingerprint',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.Fingerprint,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_Fingerprint,
    requestDeserialize: deserialize_android_emulation_control_Fingerprint,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Send a keyboard event. Translating the event.
sendKey: {
    path: '/android.emulation.control.EmulatorController/sendKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.KeyboardEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_KeyboardEvent,
    requestDeserialize: deserialize_android_emulation_control_KeyboardEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Send touch/mouse events. Note that mouse events can be simulated
// by touch events.
sendTouch: {
    path: '/android.emulation.control.EmulatorController/sendTouch',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.TouchEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_TouchEvent,
    requestDeserialize: deserialize_android_emulation_control_TouchEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendMouse: {
    path: '/android.emulation.control.EmulatorController/sendMouse',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.MouseEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_MouseEvent,
    requestDeserialize: deserialize_android_emulation_control_MouseEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  injectWheel: {
    path: '/android.emulation.control.EmulatorController/injectWheel',
    requestStream: true,
    responseStream: false,
    requestType: proto_emulator_controller_pb.WheelEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_WheelEvent,
    requestDeserialize: deserialize_android_emulation_control_WheelEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Make a phone call.
sendPhone: {
    path: '/android.emulation.control.EmulatorController/sendPhone',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.PhoneCall,
    responseType: proto_emulator_controller_pb.PhoneResponse,
    requestSerialize: serialize_android_emulation_control_PhoneCall,
    requestDeserialize: deserialize_android_emulation_control_PhoneCall,
    responseSerialize: serialize_android_emulation_control_PhoneResponse,
    responseDeserialize: deserialize_android_emulation_control_PhoneResponse,
  },
  // Sends an sms message to the emulator.
sendSms: {
    path: '/android.emulation.control.EmulatorController/sendSms',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.SmsMessage,
    responseType: proto_emulator_controller_pb.PhoneResponse,
    requestSerialize: serialize_android_emulation_control_SmsMessage,
    requestDeserialize: deserialize_android_emulation_control_SmsMessage,
    responseSerialize: serialize_android_emulation_control_PhoneResponse,
    responseDeserialize: deserialize_android_emulation_control_PhoneResponse,
  },
  // Sends an sms message to the emulator.
setPhoneNumber: {
    path: '/android.emulation.control.EmulatorController/setPhoneNumber',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.PhoneNumber,
    responseType: proto_emulator_controller_pb.PhoneResponse,
    requestSerialize: serialize_android_emulation_control_PhoneNumber,
    requestDeserialize: deserialize_android_emulation_control_PhoneNumber,
    responseSerialize: serialize_android_emulation_control_PhoneResponse,
    responseDeserialize: deserialize_android_emulation_control_PhoneResponse,
  },
  // Retrieve the status of the emulator. This will contain general
// hardware information, and whether the device has booted or not.
getStatus: {
    path: '/android.emulation.control.EmulatorController/getStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.EmulatorStatus,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_EmulatorStatus,
    responseDeserialize: deserialize_android_emulation_control_EmulatorStatus,
  },
  // Gets an individual screenshot in the desired format.
//
// The image will be scaled to the desired ImageFormat, while maintaining
// the aspect ratio. The returned image will never exceed resolution of the
// device display. Not setting the width or height (i.e. they are 0) will
// result in using the display width and height.
//
// The resulting image will be properly oriented and can be displayed
// directly without post processing. For example, if the device has a
// 1080x1920 screen and is in landscape mode and called with no width or
// height parameter, it will return a 1920x1080 image.
//
// The dimensions of the returned image will never exceed the corresponding
// display dimensions. For example, this method will return a 1920x1080
// screenshot, if the display resolution is 1080x1920 and a screenshot of
// 2048x2048 is requested when the device is in landscape mode.
//
// This method will return an empty image if the display is not visible.
getScreenshot: {
    path: '/android.emulation.control.EmulatorController/getScreenshot',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.ImageFormat,
    responseType: proto_emulator_controller_pb.Image,
    requestSerialize: serialize_android_emulation_control_ImageFormat,
    requestDeserialize: deserialize_android_emulation_control_ImageFormat,
    responseSerialize: serialize_android_emulation_control_Image,
    responseDeserialize: deserialize_android_emulation_control_Image,
  },
  // Streams a series of screenshots in the desired format.
//
// A new frame will be delivered whenever the device produces a new frame.
// Beware that this can produce a significant amount of data and that
// certain translations can be very costly. For example, streaming a series
// of png images is very cpu intensive.
//
// Images are produced according to the getScreenshot API described above.
//
// If the display is inactive, or becomes inactive, an empty image will be
// delivered. Images will be delived again if the display becomes active and
// new frames are produced.
streamScreenshot: {
    path: '/android.emulation.control.EmulatorController/streamScreenshot',
    requestStream: false,
    responseStream: true,
    requestType: proto_emulator_controller_pb.ImageFormat,
    responseType: proto_emulator_controller_pb.Image,
    requestSerialize: serialize_android_emulation_control_ImageFormat,
    requestDeserialize: deserialize_android_emulation_control_ImageFormat,
    responseSerialize: serialize_android_emulation_control_Image,
    responseDeserialize: deserialize_android_emulation_control_Image,
  },
  // Streams a series of audio packets in the desired format.
// A new frame will be delivered whenever the emulated device
// produces a new audio frame. You can expect packets to be
// delivered in intervals of 20-30ms.
//
// Be aware that this can block when the emulator does not
// produce any audio whatsoever!
streamAudio: {
    path: '/android.emulation.control.EmulatorController/streamAudio',
    requestStream: false,
    responseStream: true,
    requestType: proto_emulator_controller_pb.AudioFormat,
    responseType: proto_emulator_controller_pb.AudioPacket,
    requestSerialize: serialize_android_emulation_control_AudioFormat,
    requestDeserialize: deserialize_android_emulation_control_AudioFormat,
    responseSerialize: serialize_android_emulation_control_AudioPacket,
    responseDeserialize: deserialize_android_emulation_control_AudioPacket,
  },
  // Injects a series of audio packets to the android microphone.
// A new frame will be delivered whenever the emulated device
// requests a new audio frame. Audio is usually delivered at a rate
// that the emulator is requesting frames. Audio will be stored in a
// temporary buffer that can hold 300ms of audio.
//
// Notes:
//  - Only the first audio format packet that is delivered will be
// honored. There is no need to send the audio format multiple times.
//  - Real time audio currently immediately overrides the buffer. This
// means you must provide a constant rate of audio packets. The real
// time mode is experimental. Timestamps of audio packets might be
// used in the future to improve synchronization.
//
// -  INVALID_ARGUMENT (code 3) The sampling rate was too high/low
// -  INVALID_ARGUMENT (code 3) The audio packet was too large to handle.
// -  FAILED_PRECONDITION (code 9) If there was a microphone registered
// already.
injectAudio: {
    path: '/android.emulation.control.EmulatorController/injectAudio',
    requestStream: true,
    responseStream: false,
    requestType: proto_emulator_controller_pb.AudioPacket,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_AudioPacket,
    requestDeserialize: deserialize_android_emulation_control_AudioPacket,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the last 128Kb of logcat output from the emulator
// Note that parsed logcat messages are only available after L (Api >23).
// it is possible that the logcat buffer gets overwritten, or falls behind.
getLogcat: {
    path: '/android.emulation.control.EmulatorController/getLogcat',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.LogMessage,
    responseType: proto_emulator_controller_pb.LogMessage,
    requestSerialize: serialize_android_emulation_control_LogMessage,
    requestDeserialize: deserialize_android_emulation_control_LogMessage,
    responseSerialize: serialize_android_emulation_control_LogMessage,
    responseDeserialize: deserialize_android_emulation_control_LogMessage,
  },
  // Streams the logcat output from the emulator. The first call
// can retrieve up to 128Kb. This call will not return.
// Note that parsed logcat messages are only available after L (Api >23)
// it is possible that the logcat buffer gets overwritten, or falls behind.
streamLogcat: {
    path: '/android.emulation.control.EmulatorController/streamLogcat',
    requestStream: false,
    responseStream: true,
    requestType: proto_emulator_controller_pb.LogMessage,
    responseType: proto_emulator_controller_pb.LogMessage,
    requestSerialize: serialize_android_emulation_control_LogMessage,
    requestDeserialize: deserialize_android_emulation_control_LogMessage,
    responseSerialize: serialize_android_emulation_control_LogMessage,
    responseDeserialize: deserialize_android_emulation_control_LogMessage,
  },
  // Transition the virtual machine to the desired state. Note that
// some states are only observable. For example you cannot transition
// to the error state.
setVmState: {
    path: '/android.emulation.control.EmulatorController/setVmState',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.VmRunState,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_VmRunState,
    requestDeserialize: deserialize_android_emulation_control_VmRunState,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Gets the state of the virtual machine.
getVmState: {
    path: '/android.emulation.control.EmulatorController/getVmState',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.VmRunState,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_VmRunState,
    responseDeserialize: deserialize_android_emulation_control_VmRunState,
  },
  // Atomically changes the current multi-display configuration.
// After this call the given display configurations will be activated. You
// can only update secondary displays. Displays with id 0 will be ignored.
//
// This call can result in the removal or addition of secondary displays,
// the final display state can be observed by the returned configuration.
//
// The following gRPC error codes can be returned:
// -  FAILED_PRECONDITION (code 9) if the AVD does not support a
// configurable
//    secondary display.
// -  INVALID_ARGUMENT (code 3) if:
//     - The same display id is defined multiple times.
//     - The display configurations are outside valid ranges.
//       See DisplayConfiguration for details on valid ranges.
// -  INTERNAL (code 13) if there was an internal emulator failure.
setDisplayConfigurations: {
    path: '/android.emulation.control.EmulatorController/setDisplayConfigurations',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.DisplayConfigurations,
    responseType: proto_emulator_controller_pb.DisplayConfigurations,
    requestSerialize: serialize_android_emulation_control_DisplayConfigurations,
    requestDeserialize: deserialize_android_emulation_control_DisplayConfigurations,
    responseSerialize: serialize_android_emulation_control_DisplayConfigurations,
    responseDeserialize: deserialize_android_emulation_control_DisplayConfigurations,
  },
  // Returns all currently valid logical displays.
//
// The gRPC error code FAILED_PRECONDITION (code 9) is returned if the AVD
// does not support a configurable secondary display.
getDisplayConfigurations: {
    path: '/android.emulation.control.EmulatorController/getDisplayConfigurations',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.DisplayConfigurations,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_DisplayConfigurations,
    responseDeserialize: deserialize_android_emulation_control_DisplayConfigurations,
  },
  // Notifies client of the following changes:
//
// - Virtual scene camera status change.
// - Display configuration changes from extended ui. This will only be fired
//   if the user makes modifications the extended displays through the
//   extended control tab.
//
// Note that this method will send the initial virtual scene state
// immediately.
streamNotification: {
    path: '/android.emulation.control.EmulatorController/streamNotification',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.Notification,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_Notification,
    responseDeserialize: deserialize_android_emulation_control_Notification,
  },
  // RotationRadian is relative to the camera's current orientation.
rotateVirtualSceneCamera: {
    path: '/android.emulation.control.EmulatorController/rotateVirtualSceneCamera',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.RotationRadian,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_RotationRadian,
    requestDeserialize: deserialize_android_emulation_control_RotationRadian,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Velocity is absolute
setVirtualSceneCameraVelocity: {
    path: '/android.emulation.control.EmulatorController/setVirtualSceneCameraVelocity',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.Velocity,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_Velocity,
    requestDeserialize: deserialize_android_emulation_control_Velocity,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Set foldable posture
setPosture: {
    path: '/android.emulation.control.EmulatorController/setPosture',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.Posture,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_Posture,
    requestDeserialize: deserialize_android_emulation_control_Posture,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get the backlight brightness.
// The following gRPC error codes can be returned:
// -  FAILED_PRECONDITION (code 9) if the AVD does not support hw-control.
getBrightness: {
    path: '/android.emulation.control.EmulatorController/getBrightness',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.BrightnessValue,
    responseType: proto_emulator_controller_pb.BrightnessValue,
    requestSerialize: serialize_android_emulation_control_BrightnessValue,
    requestDeserialize: deserialize_android_emulation_control_BrightnessValue,
    responseSerialize: serialize_android_emulation_control_BrightnessValue,
    responseDeserialize: deserialize_android_emulation_control_BrightnessValue,
  },
  // Set the backlight brightness.
// The following gRPC error codes can be returned:
// -  FAILED_PRECONDITION (code 9) if the AVD does not support hw-control.
// -  INVALID_ARGUMENT (code 3) The brightness exceeds the valid range.
setBrightness: {
    path: '/android.emulation.control.EmulatorController/setBrightness',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.BrightnessValue,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_BrightnessValue,
    requestDeserialize: deserialize_android_emulation_control_BrightnessValue,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the current mode of the primary display of a resizable AVD.
// The following gRPC error codes can be returned:
// -  FAILED_PRECONDITION (code 9) if the AVD is not resizable.
getDisplayMode: {
    path: '/android.emulation.control.EmulatorController/getDisplayMode',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_emulator_controller_pb.DisplayMode,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_android_emulation_control_DisplayMode,
    responseDeserialize: deserialize_android_emulation_control_DisplayMode,
  },
  // Sets the size of the primary display of a resizable AVD. Fails if the AVD
// is not resizable. The following gRPC error codes can be returned:
// -  FAILED_PRECONDITION (code 9) if the AVD is not resizable.
setDisplayMode: {
    path: '/android.emulation.control.EmulatorController/setDisplayMode',
    requestStream: false,
    responseStream: false,
    requestType: proto_emulator_controller_pb.DisplayMode,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_android_emulation_control_DisplayMode,
    requestDeserialize: deserialize_android_emulation_control_DisplayMode,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.EmulatorControllerClient = grpc.makeGenericClientConstructor(EmulatorControllerService, 'EmulatorController');
